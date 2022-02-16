<script lang="ts">

  interface BreadListType {
    action?: () => void;
    breads?: BreadListItemType[];
  }

  interface BreadListItemType<D = Record<string, any>> {
    text: string;
    icon: string;
    link?: string;
    data?: Record<string,any>
  }

  export const breadList: BreadListType[] = [];
</script>


<nav class="breadCrumb">
    <ul>
        <li class="bread">
            <slot></slot>
        </li>
    </ul>
</nav>

<style lang="scss">
  .breadCrumb {
    ul {
      display: flex;

      .bread {

      }
    }
  }
</style>