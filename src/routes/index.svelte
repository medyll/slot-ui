<script lang="ts">
  import {WindowStoreListType, windowsStore} from '/src/stores/windowStore';

  let countValue;


  windowsStore.subscribe((value: WindowStoreListType) => {
    countValue = value;
  });


</script>



