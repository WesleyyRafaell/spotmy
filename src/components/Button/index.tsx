import React from 'react'

import * as S from './styles'

export type ButtonProps = {
	children: string
	onPress?: () => void
	size?: 'large' | 'small'
}

const Button = ({ children, size = 'large', ...props }: ButtonProps) => {
	return (
		<S.Wrapper size={size} {...props}>
			<S.Text size={size}>{children}</S.Text>
		</S.Wrapper>
	)
}

export default Button
