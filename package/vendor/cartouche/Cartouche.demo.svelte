<script>
    import Cartouche from "./Cartouche.svelte";
    import Icon from "../icon/Icon.svelte";
    import Divider from "../divider/Divider.svelte";
</script>

<Cartouche isOpen={true} class="marg-tb-1"    >
    <span slot="cartoucheLabelSlot">This is a cartouche</span>
    <Icon fontSize="small" slot="cartoucheIconSlot" icon="faUser" />
    Cartouche content
    <Divider />
</Cartouche>
<div>
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
</div>
<Cartouche    label="This is another cartouche"  class="marg-tb-1"  >
    <Cartouche  stacked={true}  label="Inner cartouche"  >
        cdcdsds
    </Cartouche>
    <Cartouche  stacked={true}  label="Inner cartouche"  >
        cdcdsds
    </Cartouche>
</Cartouche>