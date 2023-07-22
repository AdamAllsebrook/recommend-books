<script>
	import Search from './Search.svelte';
</script>

<div class="flex justify-evenly items-center w-full">
	<div class="flex flex-col align-middle">
		<h2 class="text-5xl font-bold">Find books <i>you</i> want to read</h2>
		<p class="max-w-[70ch] mt-4">
			Tired of being recommended the same books based on what you have already read? Search for
			different books using your favourite genres and tropes.
		</p>
		<a class="mb-16 anchor">How does the search work?</a>
		<Search />
	</div>
	<div class="flex space-x-5">
		<img class="-translate-y-16" src="https://images.gr-assets.com/books/1304100136m/7327624.jpg" />
		<img src="https://images.gr-assets.com/books/1493114742m/33394837.jpg" />
		<img class="translate-y-16" src="https://images.gr-assets.com/books/1413219371m/287140.jpg " />
	</div>
</div>
