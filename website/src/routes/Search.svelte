<script>
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	let searchText = '';
</script>

<form
	on:submit|preventDefault={() => goto(`/books?search=${searchText}`)}
	class="flex w-full max-w-[70ch]"
>
	<label for="search" class="label hidden">Search</label>
	<div class="input-group grid-cols-[1fr_auto] mr-4">
		<input type="text" name="search" class="input w-full" bind:value={searchText} />
		<div>
			<iconify-icon icon="ri:search-line" width="18" />
		</div>
	</div>
	<button type="submit" class="btn variant-filled-primary self-center">Search</button>
</form>
