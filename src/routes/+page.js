import { supabase } from '$lib'
import { error } from '@sveltejs/kit'

export async function load() {
	let { data, error: fetchError } = await supabase.from('campaigns').select('*')
	// console.log(`this is the data:`, data)
	if (fetchError) error(500, fetchError.message)
	if (data?.length === 0) error(404, 'Not found')
	return { campaigns: data }
}
