import { RFValue } from 'react-native-responsive-fontsize'
import styled, { css } from 'styled-components/native'
import { ButtonProps } from '.'
import { GlobalTextBold } from '../../styles/global'

const WrapperModifiers = {
	large: () => css`
		width: ${RFValue(255)}px;
		height: ${RFValue(50)}px;
	`,
	small: () => css`
		width: ${RFValue(160)}px;
		height: ${RFValue(40)}px;
	`
}

export const Wrapper = styled.TouchableOpacity<Pick<ButtonProps, 'size'>>`
	${({ size }) => css`
		border-radius: ${RFValue(100)}px;
		background-color: #31b936;
		justify-content: center;
		align-items: center;
		${!!size && WrapperModifiers[size]}
	`}
`
export const Text = styled(GlobalTextBold)<Pick<ButtonProps, 'size'>>`
	${({ size }) => css`
		font-size: ${RFValue(size === 'large' ? 20 : 13)}px
		color: #fff;
	`}
`
