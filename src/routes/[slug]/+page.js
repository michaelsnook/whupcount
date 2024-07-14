import { supabase } from '$lib'

export async function load({ params }) {
	let { data, error } = await supabase
		.from('campaigns')
		.select('*, decision_pieces_plus(*)')
		.eq('slug', params.slug)
		.maybeSingle()
	return {
		campaign: data,
	}
}
