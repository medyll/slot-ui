<script lang="ts">
	export let title: undefined = undefined;
	export let code: string = '';
	export let subTitle: undefined = undefined;
	export let component: string | undefined = undefined;

    let codeT = subTitle ? subTitle : `component ${component} demo ${title?.toLowerCase()}`
</script>

{#if title}<h5>{title}</h5>{/if}
{#if code || $$slots.code}
	<h6 class="border-b w-medium pad ">code</h6>
	<div class="pad-2 pad-l-8">
		<slot name="code">{code}</slot>
	</div>
{/if}
<h6 class="border-b pad  dsp-inline">{codeT}</h6>
<div class="pad-l-8">
	<slot />
</div>
