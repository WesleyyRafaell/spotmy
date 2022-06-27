import axios from 'axios'
import { getCookie } from '../utils/cookies'

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
		Promise.reject(error)
	}
)

export default api
