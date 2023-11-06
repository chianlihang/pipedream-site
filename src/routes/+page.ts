import type { Load } from '@sveltejs/kit'

export const load: Load = async ({ fetch }) => {
    const response = await fetch('/media.json');
    let media = await response.json();

    media = media.reverse();

    return {
        media
    };
}