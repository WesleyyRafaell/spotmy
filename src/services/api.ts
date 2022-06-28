import axios from 'axios'
import { getCookie, setCookie } from '../utils/cookies'
import { refresh } from 'react-native-app-auth'

const spotifyAuthConfig = {
	clientId: '44b81d3c92224756b9f2e543411021a2',
	clientSecret: 'e3335c1e9f6f4214be0b65cb9abe52fe',
	redirectUrl: 'com.spotmy:/oauth',
	scopes: ['user-read-email', 'playlist-modify-public', 'user-read-private'],
	serviceConfiguration: {
		authorizationEndpoint: 'https://accounts.spotify.com/authorize',
		tokenEndpoint: 'https://accounts.spotify.com/api/token'
	}
}

const api = axios.create({
	baseURL: 'https://api.spotify.com/v1'
})

api.interceptors.request.use(
	async (config) => {
		const token = await getCookie('token')
		if (token) {
			config.headers = {
				// eslint-disable-next-line prettier/prettier
				'Authorization': `Bearer ${JSON.parse(token)}`,
				'Content-Type': 'application/json'
			}
		}

		return config
	},
	(error) => {
		console.log(`error`, error)
		return Promise.reject(error)
	}
)

api.interceptors.response.use(
	(response) => {
		return response
	},
	async (error) => {
		return new Promise((resolve, reject) => {
			const originalReq = error.config
			if (
				error.response.status === 401 &&
				error.config &&
				!error.config._retry
			) {
				originalReq._retry = true
				getCookie('refreshtoken').then((response) => {
					if (response) {
						const responsin = JSON.parse(response)
						const res = refresh(spotifyAuthConfig, {
							refreshToken: responsin
						})
							.then((result) => {
								setCookie('token', JSON.stringify(result.accessToken))
								setCookie('refreshtoken', JSON.stringify(result.refreshToken))
								originalReq.headers[
									'Authorization'
								] = `Bearer ${result.accessToken}`

								return api(originalReq)
							})
							.catch((error) => {
								console.log(`error`, error)
							})

						resolve(res)
					}
				})
			} else {
				reject(error)
			}
		})
	}
)

export default api
