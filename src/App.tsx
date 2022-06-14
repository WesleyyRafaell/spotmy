/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Login from './pages/Login'
import Home from './pages/Home'

export type RootStackParams = {
	Home: any
	Login: any
}

const Stack = createNativeStackNavigator<RootStackParams>()

const App = () => {
	return (
		<SafeAreaProvider>
			<NavigationContainer>
				<Stack.Navigator
					initialRouteName="Login"
					screenOptions={{
						headerShown: false
					}}
				>
					<Stack.Screen name="Home" component={Home} />
					<Stack.Screen name="Login" component={Login} />
				</Stack.Navigator>
			</NavigationContainer>
		</SafeAreaProvider>
	)
}

export default App
