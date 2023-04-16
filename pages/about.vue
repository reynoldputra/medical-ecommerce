<template>
  <div>
    <NavbarView />
    <aboutView />
  </div>
</template>

<script>
import NavbarView from '@/components/navbarView.vue'
import aboutView from '~/components/aboutView.vue'

export default {
  name: 'about',
  components: {
    NavbarView,
    aboutView,
  },
}
</script>
