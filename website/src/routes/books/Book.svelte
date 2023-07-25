<script lang="ts">
	import type { Book } from '$lib/book';
	import goodreads from '$lib/assets/goodreads.png';
	import storygraph from '$lib/assets/storygraph.png';

	export let book: Book | null;
</script>

<div
	class="grid grid-cols-[30%_auto] lg:grid-cols-[auto_70ch_auto] grid-rows-[auto_auto_auto] lg:grid-rows-[auto_auto] gap-8 relative"
>
	<!-- style={`background-image: url(${book.image})`} -->
	{#if book}
		<img
			src={book.image}
			alt="Blurred cover"
			class="filter absolute z-0 w-full h-full lg:h-2/3 lg:translate-y-1/3 opacity-50 gradient-soft-opacity"
		/>
	{/if}
	<div class="w-full h-full z-0 absolute backdrop-blur-3xl scale-125 lg:scale-150" />
	<div class="lg:row-span-full justify-self-left self-center flex relative">
		{#if book}
			<img
				src={book.image}
				alt="Blurred cover"
				class="w-full lg:w-auto lg:h-64 scale-125 lg:scale-110 filter blur-2xl absolute z-0"
			/>
			<img
				src={book.image}
				alt={`Cover of ${book.title}`}
				class="w-full lg:w-auto lg:h-64 z-10 lg:pr-4"
			/>
		{:else}
			<div class="placeholder h-40 w-36 lg:h-64 lg:w-48 z-10 pr-4 animate-pulse bg-surface-700" />
		{/if}
	</div>
	<div class="col-start-2 z-10">
		{#if book}
			<p class="text-lg italic text-gray-800">{book.series ?? ''}</p>
			<h2 class="text-3xl lg:text-4xl font-bold pb-2">{book.title}</h2>
			<p class="text-lg">{book.authors}</p>
		{:else}
			<div class="h-5 w-32 lg:w-72 placeholder bg-surface-700 animate-pulse mb-3" />
			<div class="h-10 w-48 lg:w-96 placeholder bg-surface-700 animate-pulse mb-5" />
			<div class="h-5 w-28 lg:w-64 placeholder bg-surface-700 animate-pulse" />
		{/if}
	</div>
	<div class="col-span-full lg:col-span-1 lg:col-start-2 row-start-2 z-10">
		{#if book}
			<p class="leading-5">{book.description}</p>
		{:else}
			<div class="h-64 w-5/6 lg:w-128 placeholder bg-surface-700 animate-pulse" />
		{/if}
	</div>
	<div
		class="lg:col-start-3 row-start-3 lg:row-start-2 col-span-full lg:row-span-full space-y-2 z-10"
	>
		{#if book}
			<!-- <button -->
			<!-- 	class="btn bg-black text-white border-2 border-black font-bold space-x-3 py-3 w-full flex justify-end" -->
			<!-- > -->
			<!-- 	<p>Add to My List</p> -->
			<!-- 	<div class="w-[1px] h-3 bg-white" /> -->
			<!-- 	<iconify-icon icon="ri:add-line" width="21" /> -->
			<!-- </button> -->
			<a
				href={book?.url}
				class="btn border-black border-2 font-bold space-x-3 py-3 w-[22ch] lg:w-full flex justify-end"
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
				class="btn border-black border-2 font-bold space-x-3 py-3 w-[22ch] lg:w-full flex justify-end"
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
			<!-- <div class="h-12 w-52 placeholder bg-surface-700 animate-pulse" /> -->
			<div class="h-12 w-40 lg:w-52 placeholder bg-surface-700 animate-pulse" />
			<div class="h-12 w-40 lg:w-52 placeholder bg-surface-700 animate-pulse" />
		{/if}
	</div>
</div>
