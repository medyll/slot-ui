
<div class="bar" >
    <slot></slot>
</div>
<style>
    .bar {
        display: flex;
        grid-gap: 8px;
        background-size: auto;
        background-color: rgba(255,255,255, 0.5);
        backdrop-filter: blur(20px);
        min-height: 32px;
        align-items: center;
        box-sizing: border-box;
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        padding:4px 0;
    }
</style>