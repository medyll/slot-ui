<script lang="ts">
	export let title: string = '';
	export let code: string = '';
	export let component: string  | undefined = undefined;
</script>

<h5>{title}</h5>
<h6 class="border-b w-medium pad ">code</h6>
<div class="pad-2 pad-l-8">
	<slot name="code">{code}</slot>
</div>
<h6  class="border-b pad  dsp-inline">component {component} demo</h6>
<div class="pad-l-8">
	<slot />
</div>
