import { Box } from '@chakra-ui/layout'
import LoginForm from 'components/LoginForm'
import React from 'react'

const LoginPage = () => {
	return (
		<Box w="100vw" h="100vh" d="grid" placeItems="center">
			<LoginForm />
		</Box>
	)
}

export default LoginPage
