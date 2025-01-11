<template>
  <div>
    hello Home
  </div>
</template>

<script lang="ts" setup name="Home">
import {useRouter} from "vue-router";
import {onMounted} from "vue";

const router = useRouter();
onMounted(() => {
  setTimeout(() => {
    router.push("/news");
  },3000)
})

</script>



<style scoped>

</style>
