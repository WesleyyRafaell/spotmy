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
export const ContainerScrool = styled.ScrollView`
	margin: ${RFValue(25)}px 0;
`

export const GroupBox = styled.View`
	width: ${RFValue(136)}px;
	align-items: center;
	margin-right: ${RFValue(24)}px;
`

export const ImageBox = styled.Image`
	width: ${RFValue(136)}px;
	height: ${RFValue(100)}px;
	border-radius: ${RFValue(15)}px;
	margin-bottom: ${RFValue(5)}px;
`

export const TextBox = styled(GlobalTextBold)`
	font-size: ${RFValue(15)}px;
	color: #fff;
`
