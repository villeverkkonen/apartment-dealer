<template>
    <BlockOfFlats />
</template>
  
<script lang="ts">
import Vue from 'vue'
import BlockOfFlats from '~/components/apartments/BlockOfFlats.vue';

export default Vue.extend({
    name: "BlockOfFlatsPage",
    components: { BlockOfFlats }
})
</script>
