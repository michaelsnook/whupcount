<script>
	/** @type {import('./$types').PageData} */
  const { data } = $props()
  console.log(`inside the component, this is the data`, data)
</script>

<h1>Welcome to this little whip tracker</h1>
<ul>
  {#each data.campaigns as campaign}
    <li>
      <a href="/{campaign.slug}">
        <p><strong>{campaign.title}</strong></p>
        <p>{campaign.description}</p>
      </a>
    </li>
  {/each}
</ul>
