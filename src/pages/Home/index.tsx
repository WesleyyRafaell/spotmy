/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react'

import { useFetch } from '../../hooks/useFetch'
import { getUserPlaylist } from '../../services/loggedUserInformation'

//components
import SliderGroup from '../../components/SliderGroup'

import * as S from './styles'

const Home = () => {
	const [slide, setSlide] = useState([])

	const { data } = useFetch('/me/playlists', getUserPlaylist)

	useEffect(() => {
		if (data) {
			const result = data.data.items.map((item: any) => {
				const [imageObject] = item.images
				const { url } = imageObject
				return {
					id: item.id,
					imageUri: url,
					text: item.name
				}
			})
			setSlide(result)
		}
	}, [data])

	if (!data) {
		return <S.Text>loading</S.Text>
	}

	return (
		<S.Wrapper>
			<SliderGroup title="My playlists" slideGroup={slide} />
		</S.Wrapper>
	)
}

export default Home
