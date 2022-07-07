import React from 'react'
import SliderGroup from '../../components/SliderGroup'

import { useFetch } from '../../hooks/useFetch'
import { getUserInformation } from '../../services/loggedUserInformation'

import * as S from './styles'

const Home = () => {
	const { data } = useFetch('/me', getUserInformation)

	return (
		<S.Wrapper>
			<SliderGroup title="My playlists" />
			<S.Text>user: {data?.data.display_name}</S.Text>
		</S.Wrapper>
	)
}

export default Home
