<script lang="ts">
  import type {ElementProps} from '../list/types';

  export let density: ElementProps['density'];
  export let direction: 'vertical' | 'horizontal' = 'horizontal';
  export let extension: ElementProps['expansion'] = 'centered';

  let extensionClass = {
    full  : 'marg-tb-1 ',
    padded: 'marg-tb-1 marg-ii-2',
    centered   : 'marg-tb-1 marg-ii-4'
  };

</script>

<hr class="{extensionClass[extension]}"/>

<style>
    hr {
        border: none;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        background-color: rgba(255, 255, 255, 0.1);
        display: block;
    }
</style>
