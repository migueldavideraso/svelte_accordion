<script>

	import { Accordion } from '../package/index.js'

</script>

<main>

	<div class="card">

		<section class="header_container">
			Default Settings
		</section>

		<section class="container">

			<Accordion collapsed={false} >

				<svelte:fragment slot="header">Accordion Title</svelte:fragment>

				<svelte:fragment slot="content">
					Accordion Content
				</svelte:fragment>

			</Accordion>

			<Accordion>

				<svelte:fragment slot="header">Accordion Title</svelte:fragment>

				<svelte:fragment slot="content">
					Accordion Content
				</svelte:fragment>

			</Accordion>

			<Accordion>

				<svelte:fragment slot="header">Accordion Title</svelte:fragment>

				<svelte:fragment slot="content">
					Accordion Content
				</svelte:fragment>

			</Accordion>

		</section>

	</div>

</main>

<style>

	main {
		flex-direction: column;
		display: flex;
		grid-gap: 20px;
		margin: 20px auto;
		width: min(100% - 40px, 800px);
	}

	.card {
		background-color: #fff;
		flex-direction: column;
		display: flex;
		padding: 10px;
		grid-gap: 10px;
		border-radius: 5px;
	}

	.header_container {
		font-size: 1.5rem;
		font-weight: 600;
	}
	
	.container {
		position: relative;
		height: inherit;
		overflow: auto;
		flex: auto;
		/* border: 1px solid black; */
	}

</style>
