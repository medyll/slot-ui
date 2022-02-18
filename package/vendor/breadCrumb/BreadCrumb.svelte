<script >export const breadList = [];
</script>


<nav class="breadCrumb">
    <ul>
        <li class="bread">
            <slot></slot>
        </li>
    </ul>
</nav>

<style >.breadCrumb ul {
  display: flex; }
</style>