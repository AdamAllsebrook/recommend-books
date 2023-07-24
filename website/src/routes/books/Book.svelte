<script lang="ts">
	import type { Book } from '$lib/book';
	import goodreads from '$lib/assets/goodreads.png';
	import storygraph from '$lib/assets/storygraph.png';

	export let book: Book;
</script>

<div class="grid grid-cols-[20%_auto] grid-rows-[auto_auto_auto] gap-12 max-w-[110ch]">
	<div class="row-span-full justify-self-center self-center">
		<img src={book.image} alt={`Cover of ${book.title}`} class="h-64" />
	</div>
	<div class="col-start-2">
		<p class="text-lg italic text-gray-800">{book.series}</p>
		<h2 class="text-4xl font-bold pb-2">{book.title}</h2>
		<p class="text-lg">{book.authors}</p>
	</div>
	<div class="col-start-2 row-start-2">
		<p class="leading-5">{book.description}</p>
	</div>
	<div class="col-start-2 row-start-3 space-x-1">
		<button class="btn bg-black text-white border-2 border-black font-bold space-x-3 py-3">
			<p>Add to My List</p>
			<div class="w-[1px] h-3 bg-white" />
			<iconify-icon icon="ri:add-line" width="21" />
		</button>
		<a
			href={book.url}
			class="btn border-black border-2 font-bold space-x-3 py-3"
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
			href={`https://app.thestorygraph.com/browse?search_term=${book.title}`}
			class="btn border-black border-2 font-bold space-x-3 py-3"
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
	</div>
</div>
