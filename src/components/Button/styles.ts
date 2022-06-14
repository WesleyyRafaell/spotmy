import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import { GlobalTextBold } from '../../styles/global'

export const Wrapper = styled.TouchableOpacity`
	width: ${RFValue(255)}px;
	height: ${RFValue(50)}px;
	border-radius: ${RFValue(100)}px;
	background-color: #31b936;
	justify-content: center;
	align-items: center;
`
export const Text = styled(GlobalTextBold)`
	font-size: ${RFValue(20)}px;
	color: #fff;
`
