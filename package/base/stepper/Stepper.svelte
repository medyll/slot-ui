<script context="module">export {};
</script>

<script>/** Number of steps */
export let steps = [];
/** orientation of the stepper */
export let stepperOrientation = 'horizontal';
/** Actual active step */
export let activeStep = 0;
/** exported actions for component */
export const actions = {
    setActiveStep: function (step) {
        activeStep = step ?? 0;
    }
};
</script>

<div class="stepper">
	{#each steps as step, index}
		<div title={step.text} class="step" />
	{/each}
</div>

<style>.stepper .step {
  padding: 0.5rem;
  background-color: red;
  border-radius: 10px;
  margin-top: 10px;
}
.stepper .step.active {
  color: blue;
}</style>
