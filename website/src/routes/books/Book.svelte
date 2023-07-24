<script lang="ts">
	import type { Book } from '$lib/book';
	import goodreads from '$lib/assets/goodreads.png';
	import storygraph from '$lib/assets/storygraph.png';

	export let book: Book | null;
</script>

<div class="grid grid-cols-[auto_70ch_auto] grid-rows-[auto_auto] gap-8 relative">
	<!-- style={`background-image: url(${book.image})`} -->
	{#if book}
		<img
			src={book.image}
			alt="Blurred cover"
			class="filter absolute z-0 w-full h-2/3 translate-y-1/3 opacity-50 gradient-soft-opacity"
		/>
	{/if}
	<div class="w-full h-full z-0 absolute backdrop-blur-3xl scale-150" />
	<div class="row-span-full justify-self-left self-center flex">
		{#if book}
			<img
				src={book.image}
				alt="Blurred cover"
				class="h-64 scale-110 filter blur-2xl absolute z-0"
			/>
			<img src={book.image} alt={`Cover of ${book.title}`} class="h-64 z-10 pr-4" />
		{:else}
			<div class="placeholder h-64 w-48 z-10 pr-4 animate-pulse bg-surface-700" />
		{/if}
	</div>
	<div class="col-start-2 z-10">
		{#if book}
			<p class="text-lg italic text-gray-800">{book.series ?? ''}</p>
			<h2 class="text-4xl font-bold pb-2">{book.title}</h2>
			<p class="text-lg">{book.authors}</p>
		{:else}
			<div class="h-5 w-72 placeholder bg-surface-700 animate-pulse mb-3" />
			<div class="h-10 w-96 placeholder bg-surface-700 animate-pulse mb-5" />
			<div class="h-5 w-64 placeholder bg-surface-700 animate-pulse" />
		{/if}
	</div>
	<div class="col-start-2 row-start-2 z-10">
		{#if book}
			<p class="leading-5">{book.description}</p>
		{:else}
			<div class="h-64 w-128 placeholder bg-surface-700 animate-pulse" />
		{/if}
	</div>
	<div class="col-start-3 row-start-2 row-span-full space-y-2 z-10">
		{#if book}
			<button
				class="btn bg-black text-white border-2 border-black font-bold space-x-3 py-3 w-full flex justify-end"
			>
				<p>Add to My List</p>
				<div class="w-[1px] h-3 bg-white" />
				<iconify-icon icon="ri:add-line" width="21" />
			</button>
			<a
				href={book?.url}
				class="btn border-black border-2 font-bold space-x-3 py-3 w-full flex justify-end"
				target="_blank"
				rel="noopener noreferrer"
			>
				<div>
					<img src={goodreads} alt="goodreads logo" class="w-5 h-5 inline scale-125 mr-2" />
					<p class="inline">goodreads</p>
				</div>
				<div class="w-[1px] h-3 bg-black" />
				<iconify-icon icon="ri:arrow-right-up-line" width="21" />
			</a>
			<a
				href={`https://app.thestorygraph.com/browse?search_term=${book?.title}`}
				class="btn border-black border-2 font-bold space-x-3 py-3 w-full flex justify-end"
				target="_blank"
				rel="noopener noreferrer"
			>
				<div>
					<img src={storygraph} alt="goodreads logo" class="w-5 h-5 inline mr-2" />
					<p class="inline">StoryGraph</p>
				</div>
				<div class="w-[1px] h-3 bg-black" />
				<iconify-icon icon="ri:arrow-right-up-line" width="21" />
			</a>
		{:else}
			<div class="h-12 w-52 placeholder bg-surface-700 animate-pulse" />
			<div class="h-12 w-52 placeholder bg-surface-700 animate-pulse" />
			<div class="h-12 w-52 placeholder bg-surface-700 animate-pulse" />
		{/if}
	</div>
</div>
