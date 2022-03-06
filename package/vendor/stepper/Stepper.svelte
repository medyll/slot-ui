<script >export let steps = [];
export let stepperOrientation = 'horizontal';
export const setActiveStep = function (step) {
    activeStep = step ?? 0;
};
let activeStep = 0;
</script>

<div class="stepper">
    {#each steps as step, index}
        <div title="{step.text}" class="step"></div>
    {/each}
</div>

<style >.stepper .step {
  padding: 0.5rem;
  background-color: red;
  border-radius: 10px;
  margin-top: 10px; }
  .stepper .step.active {
    color: blue; }
</style>