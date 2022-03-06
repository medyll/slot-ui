<script lang="ts">
  import Card from '$lib/vendor/card/Card.svelte';
  import Icon from '$lib/vendor/icon/Icon.svelte';
</script>

<div class="gridDemo">
    <Card>
        <div slot="cardHeroSlot">
            <Icon icon="faInfo"/>
        </div>
        <h5 slot="title">Title of the box</h5>
        content <br/>
        content <br/>
        content <br/>
        content <br/>
        content <br/>
        <span slot="footer">Footer of the box</span>
    </Card>

    <Card>
        <div slot="cardHeroSlot">
            <Icon icon="faQuestion"/><br />
            <Icon icon="faQuestion"/><br />
            <Icon icon="faQuestion"/><br />
            <Icon icon="faQuestion"/>
        </div>
        <h5 slot="title">Title of the box</h5>
        content <br/>
        <span slot="footer">Footer of the box</span>
    </Card>

</div>

<style lang="scss">
  .gridDemo {
    flex:1;
    width: 100%;
    display: grid;
    align-items: stretch;
    grid-gap: 32px;
    grid-template-columns: repeat(auto-fill, minmax(150px, auto));
  }
</style>