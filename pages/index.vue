<template>
  <div>
    <NavbarView />
    <HomePageview />
    <productnameView />
  </div>
</template>

<script>
import NavbarView from '@/components/navbarView.vue'
import HomePageview from '@/components/homepageView.vue'
import productnameView from '~/components/productnameView.vue'

export default {
  name: 'IndexPage',
  components: {
    NavbarView,
    HomePageview,
    productnameView,
  },
}
</script>
