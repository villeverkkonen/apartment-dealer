<template>
    <TownHouse />
</template>
  
<script lang="ts">
import Vue from 'vue'
import TownHouse from '~/components/apartments/TownHouse.vue';

export default Vue.extend({
    name: "TownHousesPage",
    components: { TownHouse }
})
</script>
