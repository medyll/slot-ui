<script context="module" lang="ts">
  import {ElementProps} from '../list/types';
</script>

<script lang="ts">

  export let density: ElementProps['density'];

</script>

<hr/>

<style>
    hr {
        margin: 0 8px;
        border: none;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        background-color: rgba(255, 255, 255, 0.1);
    }
</style>