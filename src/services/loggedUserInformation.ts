import api from './api'

export const getUserInformation = async (url: string) => {
	try {
		const result = await api.get(url)

		return result
	} catch (error) {
		console.log(`error`, error)
	}
}
