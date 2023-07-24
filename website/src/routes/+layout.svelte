<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	// import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';

	import 'iconify-icon';
	import Search from './Search.svelte';
</script>

<header class="flex mt-4">
	<div class="flex w-full space-x-4 ml-4">
		<a href="/" class="text-lg font-bold my-auto">Cool name here</a>
	</div>
</header>
<slot />
