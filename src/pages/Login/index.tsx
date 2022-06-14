import React from 'react'
import axios from 'axios'
import useSWR from 'swr'
import Video from 'react-native-video'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParams } from '../../App'

// components
import Button from '../../components/Button'
import Logo from '../../components/Logo'

import * as S from './styles'

const sourceVideo = 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'

const Login = () => {
	const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>()
	const { data, error } = useSWR('/api/user/123', async () => {
		const result = await axios.get('https://swapi.dev/api/people')
		return result.data
	})

	if (!data) {
		return <S.Text />
	}

	return (
		<S.Wrapper>
			<S.Container>
				<S.Box>
					<Logo />
					<S.Text>Discover new music</S.Text>
					<Button onPress={() => navigation.navigate('Home')}>Log In</Button>
				</S.Box>
			</S.Container>

			<Video
				source={{
					uri: sourceVideo
				}}
				style={S.styles.backgroundVideo}
				muted={true}
				repeat={true}
				resizeMode={'cover'}
				rate={1.0}
				ignoreSilentSwitch={'obey'}
			/>
		</S.Wrapper>
	)
}

export default Login
