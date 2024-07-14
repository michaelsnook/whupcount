<script>
	/** @type {import('./$types').PageData} */
	const { data } = $props()
	const options = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	}
	// console.log('Data is', data.campaign)
	const evidences = data.campaign.decision_pieces_plus || []
</script>

<header class="p-10 border-b mb-10">
	<p class="mx-auto text-center">Let's see who wants to</p>
	<h2 class="text-4xl font-bold text-center mn-10">{data.campaign.title}</h2>
</header>

<section class="py-10">
	<h3 class="text-2xl flex flex-row justify-between">
		<span class="text-md"> Feed of data points </span>
		<button>+ more</button>
	</h3>
	<ul>
		{#each evidences as evidence}
			<li class="my-4">
				<span
					class="rounded-lg text-xs px-3 py-1 me-1 {evidence.is_good
						? 'bg-green-700 text-white'
						: evidence.is_bad
							? 'bg-red-400 text-black'
							: 'bg-gray-300 text-gray-800'}">{evidence.disposition_enum}</span
				>
				{evidence.name}
				[{evidence.party}-{evidence.district}]. via: {evidence.source}
				<small>({new Date(evidence.evidence_valid_at).toLocaleString('en-US', options)})</small>
			</li>
		{/each}
	</ul>
</section>
<section class="py-10">
	<h3 class="text-2xl">All the legislators</h3>
	<ul class="list-disc *:ms-4 columns-[18rem] gap-4">
		{#each data.decisioners as moc}
			<li
				class={moc.party === 'R'
					? 'marker:text-red-600'
					: moc.party === 'D'
						? 'marker:text-blue-600'
						: ''}
			>
				{moc.name} ({moc.party}
				{moc.title}, {moc.district})
			</li>
		{/each}
	</ul>
</section>
