<script>
	/** @type {import('./$types').PageData} */
	const { data } = $props()
	const options = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	}
</script>

<header class="p-10 border-b mb-10">
	<p class="mx-auto text-center">Let's see who wants to</p>
	<h2 class="text-4xl font-bold text-center mn-10">{data.campaign.title}</h2>
</header>

<section class="py-10">
	<h3 class="text-2xl">Feed of data points</h3>
	<ul>
		{#each data.evidences as evidence}
			<li class="my-4">
				<span
					class="rounded-lg text-xs px-3 py-1 me-1 {evidence.is_good
						? 'bg-green-700 text-white'
						: evidence.is_bad
							? '👎️ '
							: ''}">{evidence.disposition_enum}</span
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
	<ul class="list-disc ms-4 columns-[18rem]">
		{#each data.decisioners as moc}
			<li>{moc.name}</li>
		{/each}
	</ul>
</section>
