<script lang="ts">
	import Search from '../Search.svelte';
	import type { PageData } from './$types';
	import Book from './Book.svelte';

	export let data: PageData;
</script>

<div class="container h-full mx-auto flex flex-col">
	<div class="flex flex-col items-center py-8">
		<!-- <Search /> -->
	</div>
	<div class="flex flex-col space-y-48 mx-auto">
		{#await data.streamed.books}
			Loading...
		{:then books}
			{#each books as book}
				<Book {book} />
			{/each}
		{:catch error}
			{error.message}
		{/await}
	</div>
</div>
