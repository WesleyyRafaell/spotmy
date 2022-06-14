import styled from 'styled-components/native'
import { Dimensions, StyleSheet } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { GlobalTextBold } from '../../styles/global'

const { height } = Dimensions.get('window')

export const styles = StyleSheet.create({
	backgroundVideo: {
		height: height,
		position: 'absolute',
		top: 0,
		left: 0,
		alignItems: 'stretch',
		bottom: 0,
		right: 0
	}
})

export const Wrapper = styled.View`
	flex: 1;
	position: relative;
`

export const Container = styled.View`
	flex: 1;
	z-index: 1;
	position: relative;
	justify-content: center;
	background-color: 'rgba(52, 52, 52, 0.4)';
`

export const Box = styled.View`
	height: ${RFValue(465)}px;
	justify-content: space-between;
	align-items: center;
`

export const Text = styled(GlobalTextBold)`
	font-size: ${RFValue(20)}px;
	color: #fff;
`
