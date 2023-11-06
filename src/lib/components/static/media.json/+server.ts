import type { RequestHandler } from '@sveltejs/kit'

export const GET: RequestHandler = async () => {
	const response = await fetch(
		'/media.json'
	)
	const media = await response.json()

	return {
		body: {
			media: media
		}
	}
}