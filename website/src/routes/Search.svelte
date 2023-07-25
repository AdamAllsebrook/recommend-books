<script>
	import { goto } from '$app/navigation';

	export let searchText = '';
</script>

<form on:submit|preventDefault={() => goto(`/books?search=${searchText}`)} class="flex w-full">
	<label for="search" class="label hidden">Search</label>
	<div class="flex bg-transparent border-black border-2 w-full">
		<iconify-icon icon="ri:search-line" width="21" class="my-auto ml-2" />
		<input
			type="text"
			name="search"
			placeholder="Search for books..."
			class="input bg-transparent"
			bind:value={searchText}
		/>
		<button
			type="submit"
			class="btn variant-filled-primary self-center border-black border-2 h-full"
		>
			<p class="font-bold">Search</p>
		</button>
	</div>
</form>

<style>
	::placeholder {
		color: #444;
	}
</style>
