<template>
  <div>
    <Frontpage />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Frontpage from '~/components/Frontpage.vue';

export default Vue.extend({
  name: 'IndexPage',
  components: { Frontpage },
})
</script>
