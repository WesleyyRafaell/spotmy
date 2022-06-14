import React from 'react'

import * as S from './styles'

type ButtonProps = {
	children: string
	onPress(): void
}

const Button = ({ children, ...props }: ButtonProps) => {
	return (
		<S.Wrapper {...props}>
			<S.Text>{children}</S.Text>
		</S.Wrapper>
	)
}

export default Button
