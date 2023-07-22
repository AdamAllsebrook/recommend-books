<script>
	import { enhance } from '$app/forms';
</script>

<form method="POST" use:enhance class="flex w-full max-w-[70ch]">
	<label for="search" class="label hidden">Search</label>
	<div class="input-group grid-cols-[1fr_auto] mr-4">
		<input type="text" name="search" class="input w-full" />
		<div>
			<iconify-icon icon="ri:search-line" width="18" />
		</div>
	</div>
	<button type="submit" class="btn variant-filled-primary self-center">Search</button>
</form>
