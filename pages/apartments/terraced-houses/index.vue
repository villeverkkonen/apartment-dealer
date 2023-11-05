<template>
    <TerracedHouse />
</template>
  
<script lang="ts">
import Vue from 'vue'
import TerracedHouse from '~/components/apartments/TerracedHouse.vue';

export default Vue.extend({
    name: "TerracedHousesPage",
    components: { TerracedHouse }
})
</script>
