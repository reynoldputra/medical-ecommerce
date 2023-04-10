<template>
  <div>
    <NavbarView />
    <HomePageview />
  </div>
</template>

<script>
import NavbarView from '@/components/NavbarView.vue'
import HomePageview from '@/components/HomePageView.vue'
export default {
  name: 'IndexPage',
  components: {
    NavbarView,
    HomePageview,
  },
}
</script>
