import React from 'react'
import Video from 'react-native-video'

// components
import Button from '../../components/Button'
import Logo from '../../components/Logo'

import * as S from './styles'

const sourceVideo = 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'

const Login = () => {
	return (
		<S.Wrapper>
			<S.Container>
				<S.Box>
					<Logo />
					<S.Text>Discover new music</S.Text>
					<Button>Log In</Button>
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
