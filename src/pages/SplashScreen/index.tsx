import React, { useEffect } from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'

import { RootStackParams } from '../../App'
import { getCookie } from '../../utils/cookies'

import * as S from './styles'

const SplashScreen = () => {
	const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>()

	useEffect(() => {
		checkIfUserLoggedIn()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const checkIfUserLoggedIn = async () => {
		const result = await getCookie('token')

		if (!result) {
			navigation.navigate('Login')
			return
		}

		navigation.navigate('Home')
	}

	return (
		<S.Wrapper>
			<S.Text>SplashScreen</S.Text>
		</S.Wrapper>
	)
}

export default SplashScreen
