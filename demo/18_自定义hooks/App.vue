<template>
 <div class="app">
<Person v-if="flag"></Person>
 </div>
</template>

<script lang="ts" setup name="App">

import Person from './components/Person.vue'
import {ref} from "vue";

const flag = ref(true)

</script>



<style scoped>


</style>
