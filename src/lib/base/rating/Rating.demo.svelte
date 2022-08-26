<script lang="ts">
	import Icon from '../icon/Icon.svelte';
	import Rating from './Rating.svelte';

    const ww = `<Rating scored={2}>
			<Icon icon="star" />
			<Icon slot="scoredSlot" icon="minus" />
		</Rating>`
    const ww2 = `<Rating defaultIcon="minus" scoredIcon="plus" scored={3} />`
</script>

<div class="flex-v gap-large">
	<h5>{'<Rating />'}</h5>
	<cite
		><p>
			You'll never know that you've got a score, unless come the day when you see the other's ones.<br
			/> S. Roch, 1824
		</p></cite
	>
	<div class="flex-v gap-medium">
        <h5>Using slots</h5>
        {ww}

		<Rating scored={2}>
			<Icon icon="star" />
			<Icon slot="scoredSlot" icon="minus" />
		</Rating>
        <h5>Using props</h5>
        {ww2}
		<Rating defaultIcon="minus" scoredIcon="plus" scored={3} /> 
	</div>
</div>
