<template>
  <div>
    <NavbarView />
    <HomePageview />
  </div>
</template>

<script>
import NavbarView from '@/components/navbarView.vue'
import HomePageview from '@/components/homepageView.vue'

export default {
  name: 'IndexPage',
  components: {
    NavbarView,
    HomePageview,
  },
}


</script>
