import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { GlobalTextBold } from '../../styles/global'

export const Wrapper = styled.View``

export const Text = styled(GlobalTextBold)`
	font-size: ${RFValue(20)}px;
	color: #fff;
`
export const ContainerButton = styled.View`
	align-items: center;
`
export const BoxCenter = styled.View`
	align-items: center;
`
export const BoxCarousel = styled.View`
	background-color: floralwhite;
	border-radius: 5px;
	height: 180px;
	padding: 50px;
	margin: 25px;
`
