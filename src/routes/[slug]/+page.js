import { supabase } from '$lib'
import { error } from '@sveltejs/kit'

export async function load({ params }) {
	let { data: campaign } = await supabase
		.from('campaigns')
		.select('*')
		.eq('slug', params.slug)
		.maybeSingle()
	let { data: evidences } = await supabase
		.from('decision_pieces_plus')
		.select('*')
		.eq('campaign_id', campaign.id)
	let { data: decisioners } = await supabase.from('decisioners').select('*')

	// console.log(`here is the fetched data,`, campaign, evidences)

	if (!campaign) error(404, 'Not found')
	return { campaign, decisioners, evidences: evidences ?? [] }
}
