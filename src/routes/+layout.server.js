import { supabase } from '$lib'

/** @type {import('./$types').LayoutServerLoad} */
export async function load() {
	let { data: campaigns } = await supabase.from('campaigns').select('*')
	let { data: decisioners } = await supabase.from('decisioners').select('*')

	return { campaigns, decisioners }
}
