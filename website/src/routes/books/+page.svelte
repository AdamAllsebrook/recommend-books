<script lang="ts">
	import { page } from '$app/stores';
	import Search from '../Search.svelte';
	import type { PageData } from './$types';
	import Book from './Book.svelte';

	export let data: PageData;
	const searchQuery = $page.url.searchParams.get('search');
</script>

<div class="container h-full mx-auto flex flex-col px-4 lg:px-0">
	<div class="flex flex-col space-y-40 lg:space-y-48 mx-auto mt-8 lg:mt-0">
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
