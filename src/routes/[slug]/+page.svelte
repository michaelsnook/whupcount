<script>
	/** @type {import('./$types').PageData} */
	const { data } = $props()
	const options = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	}
</script>

<h2>{data.campaign.title}</h2>

<p>Feed of data points</p>
<ul>
	{#each data.evidences as evidence}
		<li>
			[{evidence.is_good ? '👍️ ' : evidence.is_bad ? '👎️ ' : ''}{evidence.disposition_enum}] {evidence.name}
			[{evidence.party}-{evidence.district}]. via: {evidence.source}
			<small>({new Date(evidence.evidence_valid_at).toLocaleString('en-US', options)})</small>
		</li>
	{/each}
</ul>

<p>All the legislators:</p>
<ul>
	{#each data.decisioners as moc}
		<li>{moc.name}</li>
	{/each}
</ul>
