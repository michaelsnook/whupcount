<script>
	/** @type {import('./$types').PageData} */
	let { data } = $props()
	// console.log(`inside the component, this is the data`, data)
</script>

<h1 class="text-4xl font-bold text-center my-10">Welcome to my own personal whip tracker</h1>
<div class="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 flex-wrap">
	{#each data.campaigns as campaign}
		<a
			class="bg-gray-500/20 rounded border p-4 min-h-[8rem] hover:bg-indigo-200/20"
			href="/{campaign.slug}"
		>
			<p><strong>{campaign.title}</strong></p>
			<p>{campaign.description}</p>
		</a>
	{/each}
</div>
