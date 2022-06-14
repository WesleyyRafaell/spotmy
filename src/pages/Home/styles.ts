import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { GlobalTextBold } from '../../styles/global'

export const Wrapper = styled.View`
	flex: 1;
`
export const Text = styled(GlobalTextBold)`
	font-size: ${RFValue(20)}px;
	color: #fff;
`
