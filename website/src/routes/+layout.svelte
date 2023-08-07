<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	// import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import Favicon from '$lib/assets/favicon.png';

	import 'iconify-icon';
</script>

<svelte:head>
	<title>Unnamed Book Search</title>
	<link rel="icon" href={Favicon} />
</svelte:head>

<header class="flex mt-4">
	<div class="flex w-full space-x-4 ml-4">
		<div>
			<a href="/" class="my-auto"><span class="font-bold text-xl">Unnamed Book Search</span> </a>
			<a href="https://github.com/AdamAllsebrook" class="block text-right">by Adam Allsebrook</a>
		</div>
	</div>
</header>
<slot />
