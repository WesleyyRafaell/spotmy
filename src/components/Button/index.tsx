import React from 'react'

import * as S from './styles'

type ButtonProps = {
	children: string
}

const Button = ({ children }: ButtonProps) => {
	return (
		<S.Wrapper>
			<S.Text>{children}</S.Text>
		</S.Wrapper>
	)
}

export default Button
