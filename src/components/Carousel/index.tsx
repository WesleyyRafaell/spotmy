import React, { useState, useRef } from 'react'
import Button from '../Button'
import Carousel, { Pagination } from 'react-native-snap-carousel'

import * as S from './styles'

export type SliderGroupProps = {
	title: string
}

const carouselItems = [
	{
		title: 'Item 1',
		text: 'Text 1'
	},
	{
		title: 'Item 2',
		text: 'Text 2'
	},
	{
		title: 'Item 3',
		text: 'Text 3'
	},
	{
		title: 'Item 4',
		text: 'Text 4'
	},
	{
		title: 'Item 5',
		text: 'Text 5'
	}
]

const SliderGroup = ({ title }: SliderGroupProps) => {
	const [index, setIndex] = useState(0)
	const isCarousel = useRef(null)

	return (
		<S.Wrapper>
			<S.Text>{title}</S.Text>
			<S.BoxCenter>
				<Carousel
					ref={isCarousel}
					layout={'stack'}
					dotsLength={5}
					activeDotIndex={1}
					dotColor="red"
					data={carouselItems}
					renderItem={({ item }) => {
						return (
							<S.BoxCarousel>
								<S.Text>{item.title}</S.Text>
							</S.BoxCarousel>
						)
					}}
					sliderWidth={250}
					itemWidth={250}
					onSnapToItem={(index) => setIndex(index)}
				/>
				<Pagination
					dotsLength={carouselItems.length}
					activeDotIndex={index}
					carouselRef={isCarousel}
					dotStyle={{
						width: 10,
						height: 10,
						borderRadius: 5,
						marginHorizontal: 8,
						backgroundColor: '#31b936'
					}}
					tappableDots={true}
					inactiveDotStyle={{
						backgroundColor: 'black'
						// Define styles for inactive dots here
					}}
					inactiveDotOpacity={0.4}
					inactiveDotScale={0.6}
				/>
			</S.BoxCenter>
			<S.ContainerButton>
				<Button size="small">See more</Button>
			</S.ContainerButton>
		</S.Wrapper>
	)
}

export default SliderGroup
