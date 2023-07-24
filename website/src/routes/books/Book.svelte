<script lang="ts">
	import type { Book } from '$lib/book';
	import { IconifyIconComponent } from 'iconify-icon';

	export let book: Book;
</script>

<div class="grid grid-cols-[20%_auto] grid-rows-[auto_auto_auto] gap-16 max-w-[110ch]">
	<div class="row-span-full justify-self-center self-center">
		<img src={book.image} alt={`Cover of ${book.title}`} class="h-64" />
	</div>
	<div class="col-start-2">
		<h2 class="text-4xl font-bold pb-4">{book.title}</h2>
		<p>{book.authors}</p>
	</div>
	<div class="col-start-2 row-start-2">
		<p class="font-extralight">{book.description}</p>
	</div>
	<div class="col-start-2 row-start-3">
		<button class="btn bg-black text-white font-bold space-x-3 py-4">
			<p>Add to My List</p>
			<div class="w-[1px] h-3 bg-white" />
			<iconify-icon icon="ri:add-line" width="21" />
		</button>
	</div>
</div>
