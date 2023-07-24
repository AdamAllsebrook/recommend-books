<script lang="ts">
	import { page } from '$app/stores';
	import Search from '../Search.svelte';
	import type { PageData } from './$types';
	import Book from './Book.svelte';

	export let data: PageData;
	const searchQuery = $page.url.searchParams.get('search');
</script>

<div class="container h-full mx-auto flex flex-col">
	<div class="flex flex-col space-y-48 mx-auto">
		<Search searchText={searchQuery ?? ''} />
		{#await data.streamed.books}
			{#each Array(5).fill(null) as book}
				<Book {book} />
			{/each}
		{:then books}
			{#each books as book}
				<Book {book} />
			{/each}
		{:catch error}
			{error.message}
		{/await}
	</div>
</div>
