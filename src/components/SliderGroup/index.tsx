import React from 'react'
import Button from '../Button'

import * as S from './styles'

export type ItemGroup = {
	imageUri: string
	text: string
}

export type SliderGroupProps = {
	title: string
	SlideGroup: ItemGroup[]
}

const SliderGroup = ({ title }: SliderGroupProps) => {
	return (
		<S.Wrapper>
			<S.Text>{title}</S.Text>
			<S.ContainerScrool showsHorizontalScrollIndicator={false} horizontal>
				<S.GroupBox>
					<S.ImageBox
						source={{
							uri: 'https://reactnative.dev/img/tiny_logo.png'
						}}
					/>
					<S.TextBox>Playlist 1</S.TextBox>
				</S.GroupBox>
				<S.GroupBox>
					<S.ImageBox
						source={{
							uri: 'https://reactnative.dev/img/tiny_logo.png'
						}}
					/>
					<S.TextBox>Playlist 1</S.TextBox>
				</S.GroupBox>
				<S.GroupBox>
					<S.ImageBox
						source={{
							uri: 'https://reactnative.dev/img/tiny_logo.png'
						}}
					/>
					<S.TextBox>Playlist 1</S.TextBox>
				</S.GroupBox>
				<S.GroupBox>
					<S.ImageBox
						source={{
							uri: 'https://reactnative.dev/img/tiny_logo.png'
						}}
					/>
					<S.TextBox>Playlist 1</S.TextBox>
				</S.GroupBox>
				<S.GroupBox>
					<S.ImageBox
						source={{
							uri: 'https://reactnative.dev/img/tiny_logo.png'
						}}
					/>
					<S.TextBox>Playlist 1</S.TextBox>
				</S.GroupBox>
				<S.GroupBox>
					<S.ImageBox
						source={{
							uri: 'https://reactnative.dev/img/tiny_logo.png'
						}}
					/>
					<S.TextBox>Playlist 1</S.TextBox>
				</S.GroupBox>
			</S.ContainerScrool>
			<S.ContainerButton>
				<Button size="small">See more</Button>
			</S.ContainerButton>
		</S.Wrapper>
	)
}

export default SliderGroup
