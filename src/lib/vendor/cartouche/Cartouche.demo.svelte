<script>
    import Cartouche from "$lib/vendor/cartouche/Cartouche.svelte";
    import Icon from "$lib/vendor/icon/Icon.svelte";
    import Divider from "$lib/vendor/divider/Divider.svelte";
</script>

<Cartouche isOpen={true} class="marg-tb-1"    >
    <span slot="cartoucheLabelSlot">This is a cartouche</span>
    <Icon fontSize="small" slot="cartoucheIconSlot" icon="faUser" />
    Cartouche content
    <Divider />
</Cartouche>
<Cartouche  stacked={true} label="This is a stacked cartouche"    >
    Cartouche content
</Cartouche>
<Cartouche  stacked={true}  label="This is another cartouche"  >
    <button slot="cartoucheActionSlot">here</button>
    cdcdsds
</Cartouche>
<Cartouche  stacked={true}     >
    <Icon fontSize="small" slot="cartoucheIconSlot" icon="faUser" />
</Cartouche>

<Cartouche    label="This is another cartouche"  class="marg-tb-1"  >
    <Cartouche  stacked={true}  label="Inner cartouche"  >
        cdcdsds
    </Cartouche>
    <Cartouche  stacked={true}  label="Inner cartouche"  >
        cdcdsds
    </Cartouche>
</Cartouche>