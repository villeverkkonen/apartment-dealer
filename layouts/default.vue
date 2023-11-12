<template>
    <div>
        <SideNav />
        <Nuxt />
    </div>
</template>
  
<script>
import SideNav from '~/components/SideNav.vue';

export default {
    components: {
        SideNav,
    },
};
</script>