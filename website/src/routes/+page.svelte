<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-5">
		<p>{JSON.stringify(data)}</p>
	</div>
</div>
