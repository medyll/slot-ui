<script lang="ts">
	import type { StepType, StepperOrientation } from './types.js';

	/** Number of steps */
	export let steps: StepType[] = [];
	/** orientation of the stepper */
	export let stepperOrientation: StepperOrientation = 'horizontal';
	/** Actual active step */
	export let activeStep: number = 0;
	/** exported actions for component */
	export const actions = {
		setActiveStep: function (step: number) {
			activeStep = step ?? 0;
		}
	};
</script>

<div class="stepper">
	{#each steps as step, index}
		<div title={step.text} class="step" />
	{/each}
</div>

<style lang="scss">
	@import '../../styles/slotui-vars.scss';
	@import '../../styles/presets.scss';
	.stepper {
		.step {
			padding: 0.5rem;
			background-color: red;
			border-radius: 10px;
			margin-top: 10px;

			&.active {
				color: blue;
			}
		}
	}
</style>
