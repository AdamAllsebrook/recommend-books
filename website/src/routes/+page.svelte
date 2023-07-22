<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageData } from './$types';
	import Hero from './Hero.svelte';
	import Search from './Search.svelte';

	export let data: PageData;
</script>

<div class="container h-full mx-auto flex justify-center">
	<Hero />
</div>
