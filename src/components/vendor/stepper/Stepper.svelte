<script context="module" lang="ts">
</script>
<script lang="ts">
  export type StepperOrientation = 'horizontal' | 'vertical'
  export type StepType = {
    index: number
    text: string
    action: () => void
  };

  export let steps: StepType[]                      = [];
  export let stepperOrientation: StepperOrientation = 'horizontal';

  export const setActiveStep = function (step: number) {
    activeStep = step ?? 0;
  };

  let activeStep: number = 0;
</script>

<div class="stepper">
    {#each steps as step, index}
        <div title="{step.text}" class="step"></div>
    {/each}
</div>

<style lang="scss">
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