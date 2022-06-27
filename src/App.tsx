/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Login from './pages/Login'
import Home from './pages/Home'
import SplashScreen from './pages/SplashScreen'

import { AuthProvider } from './context/authContext'

export type RootStackParams = {
	Home: any
	Login: any
	SplashScreen: any
}

const Stack = createNativeStackNavigator<RootStackParams>()

const App = () => {
	return (
		<SafeAreaProvider>
			<NavigationContainer>
				<AuthProvider>
					<Stack.Navigator
						initialRouteName="SplashScreen"
						screenOptions={{
							headerShown: false
						}}
					>
						<Stack.Screen name="Home" component={Home} />
						<Stack.Screen name="Login" component={Login} />
						<Stack.Screen name="SplashScreen" component={SplashScreen} />
					</Stack.Navigator>
				</AuthProvider>
			</NavigationContainer>
		</SafeAreaProvider>
	)
}

export default App
