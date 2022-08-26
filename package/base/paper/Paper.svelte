<script>/*  common slotUi exports*/
let className = '';
export { className as class };
export let element = null;
/*  end slotUi exports*/
export let density = 'default';
let densityClass = {
    none: '',
    tight: 'pad-1 marg-1',
    default: 'pad-2 marg-2',
    kind: 'pad-3 marg-3'
};
</script>
<div class="paper shad-8 {densityClass[density]} {className}">
    <slot></slot>
</div>

<style  >.paper {
  color: var(--theme-color-foreground);
  background-color: var(--theme-color-paper);
  border-radius: 6px;
}</style>
