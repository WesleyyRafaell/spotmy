import React, { createContext, ReactNode } from 'react'
import { authorize } from 'react-native-app-auth'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { setCookie } from '../utils/cookies'
import { RootStackParams } from '../App'

type AuthProviderProps = {
	children: ReactNode
}

type AuthContextProps = {
	onLogin: () => void
}

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

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: AuthProviderProps) {
	const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>()

	const onLogin = async () => {
		try {
			const result = await authorize(spotifyAuthConfig)

			if (!result) {
				console.log(`erro`)
				return
			}

			await setCookie('token', JSON.stringify(result.accessToken))

			navigation.navigate('Home')

			return result
		} catch (error) {
			console.log(JSON.stringify(error))
		}
	}

	return (
		<AuthContext.Provider value={{ onLogin }}>{children}</AuthContext.Provider>
	)
}
