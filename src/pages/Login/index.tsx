import React, { useContext, useState } from 'react'

import Video from 'react-native-video'

// components
import Button from '../../components/Button'
import Logo from '../../components/Logo'

import * as S from './styles'
import { AuthContext } from '../../context/authContext'

const sourceVideo = 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'

const Login = () => {
	const { onLogin } = useContext(AuthContext)

	// const { data, error } = useSWR('/api/user/123', async () => {
	// 	const result = await axios.get('https://swapi.dev/api/people')
	// 	return result.data
	// })

	return (
		<S.Wrapper>
			<S.Container>
				<S.Box>
					<Logo />
					<S.Text>Discover new music</S.Text>

					<Button onPress={onLogin}>Log In</Button>
				</S.Box>
			</S.Container>

			{/* <Video
				source={{
					uri: sourceVideo
				}}
				style={S.styles.backgroundVideo}
				muted={true}
				repeat={true}
				resizeMode={'cover'}
				rate={1.0}
				ignoreSilentSwitch={'obey'}
			/> */}
		</S.Wrapper>
	)
}

export default Login
