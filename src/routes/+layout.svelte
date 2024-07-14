<script>
	import '../app.css'
	let { children } = $props()
</script>

<div class="p-1 bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200 min-h-screen flex flex-col justify-between">
	<div class="wrapper">{@render children()}</div>
	<footer class="mt-10 py-6 text-center opacity-70 text-sm">
		<p>
			<a class="underline hover:underline-offset-2 decoration-gray-500 hover:decoration-current pointer" href="https://github.com/michaelsnook/whupcount">&lt;/&gt; on GitHub</a>
		</p>
		<p>&copy; em snook 2024 - just playing around, not affiliated with anyone, don't @ me</p>
	</footer>
</div>
