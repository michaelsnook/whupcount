import { supabase } from '$lib'

export async function load() {
	let { data: campaigns } = await supabase.from('campaigns').select('*')
	let { data: decisioners } = await supabase.from('decisioners').select('*')

	return { campaigns, decisioners }
}
