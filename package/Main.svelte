<script>

	import Angle from './icons/angle.svelte'

	export let collapsed = true

	const setCollapsed = () => {
		collapsed = !collapsed
	}

</script>

<div class="accodion">

	<header>
		<button
			on:click={setCollapsed}
			class="{collapsed ? 'collapsed' : ''}"
		>
			<Angle />
		</button>

			<slot name="header" />
	</header>

	{#if !collapsed}
		<main>
			<slot name="content" />
		</main>
	{/if}
	
</div>

<style>

	.accodion {

		--border-color: #d8dde3;

		flex-direction: column;
		color: rgb(0, 0, 0);
		position: relative;
		overflow: hidden;
		display: flex;
		letter-spacing: .35px;
	}

	header {
		background: #eceff1;
		align-items: center;
		font-weight: bold;
		display: flex;
		padding: 10px;
		grid-gap: 5px;
		font-size: 14px;
		border-radius: 3px;
		border: 1px solid var(--border-color);
	}

	header button {
		background-color: transparent;
		place-content: center;
		display: grid;
		border: none;
		padding: 0px;
		transform: rotate(45deg);
		transition: transform .3s;
	}

	header button.collapsed {
		transform: rotate(0deg);
	}

	main {
		padding: 10px;
		font-size: 12px;
		margin-left: 10px;
		border-radius: 3px;
		border: 1px solid var(--border-color);
		border-top: none;
	}

</style>
