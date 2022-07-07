import React from 'react'
import Button from '../Button'

import * as S from './styles'

export type ItemGroup = {
	id: string
	imageUri: string
	text: string
}

export type SliderGroupProps = {
	title: string
	slideGroup: ItemGroup[]
}

const SliderGroup = ({ title, slideGroup }: SliderGroupProps) => {
	return (
		<S.Wrapper>
			<S.Text>{title}</S.Text>
			<S.ContainerScrool showsHorizontalScrollIndicator={false} horizontal>
				{!!slideGroup && (
					<>
						{slideGroup.map((item: ItemGroup) => (
							<S.GroupBox key={item.id}>
								<S.ImageBox
									source={{
										uri: item.imageUri
									}}
								/>
								<S.TextBox>{item.text}</S.TextBox>
							</S.GroupBox>
						))}
					</>
				)}
			</S.ContainerScrool>
			<S.ContainerButton>
				<Button size="small">See more</Button>
			</S.ContainerButton>
		</S.Wrapper>
	)
}

export default SliderGroup
