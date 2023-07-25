<script>
	import Search from './Search.svelte';
	import landing_page_book_1 from '$lib/assets/landing-page-book-1.jpg';
	import landing_page_book_2 from '$lib/assets/landing-page-book-2.jpg';
	import landing_page_book_3 from '$lib/assets/landing-page-book-3.jpg';
</script>

<div class="flex justify-between lg:items-center w-full relative mt-24 lg:mt-0">
	<div class="flex flex-col align-middle px-4">
		<h2 class="text-6xl font-black">Find books <i>you</i> want to read</h2>
		<p class="max-w-[70ch] mt-8">
			Tired of being recommended the same books based on what you have already read?
		</p>
		<p>Search for different books using your favourite genres and tropes.</p>
		<a class="mb-16 lg:mb-32 anchor">How does the search work?</a>
		<Search />
	</div>
	<div class="space-x-5 hidden lg:visible lg:flex">
		<div class="-translate-y-40 h-64 z-10">
			<img
				class="absolute top-0 left-0 filter blur-2xl -z-10 scale-125"
				src={landing_page_book_1}
			/>
			<img class="h-full" src={landing_page_book_1} />
		</div>
		<div class="h-64 translate-x-0 z-10">
			<img
				class="absolute top-0 left-0 filter blur-2xl -z-10 scale-125"
				src={landing_page_book_2}
			/>
			<img class="h-full" src={landing_page_book_2} />
		</div>
		<div class="h-64 translate-y-40 z-10">
			<img
				class="absolute top-0 left-0 filter blur-2xl -z-10 scale-125"
				src={landing_page_book_3}
			/>
			<img class="h-full" src={landing_page_book_3} />
		</div>
	</div>
</div>
