# Svelte Accordion
### Demos
https://migueldavideraso.github.io/svelte_accordion/dist/
### Repository
https://github.com/migueldavideraso/svelte_accordion
#### Getting started
```html
<script>
  import { Accordion } from '@migueleraso/accordion-treegrid'
</script>


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
```
