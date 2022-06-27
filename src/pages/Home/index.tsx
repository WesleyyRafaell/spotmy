import React from 'react'

import { useFetch } from '../../hooks/useFetch'
import { getUserInformation } from '../../services/loggedUserInformation'

import * as S from './styles'

const Home = () => {
	const { data } = useFetch('/me', getUserInformation)

	return (
		<S.Wrapper>
			<S.Text>home</S.Text>
			<S.Text>user: {data?.data.display_name}</S.Text>
		</S.Wrapper>
	)
}

export default Home
