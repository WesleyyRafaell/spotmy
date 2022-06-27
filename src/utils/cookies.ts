import AsyncStorage from '@react-native-async-storage/async-storage'

export const setCookie = async (key: string, value: string) => {
	await AsyncStorage.setItem(`@Spotmy:${key}`, value)
}

export const removeCookie = async (key: string) => {
	await AsyncStorage.removeItem(`@Spotmy:${key}`)
}

export const clearCookies = async () => {
	return await AsyncStorage.clear()
}

export const getCookie = async (key: string) => {
	const value = `@Spotmy:${key}`
	return await AsyncStorage.getItem(value)
}
