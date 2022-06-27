/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosResponse } from 'axios'
import useSWR from 'swr'

type fetcherProps = (
	url: string
) => Promise<AxiosResponse<any, any> | undefined>

export function useFetch(url: string, fetcher: fetcherProps) {
	const { data, error } = useSWR(url, fetcher)

	return { data, error }
}
