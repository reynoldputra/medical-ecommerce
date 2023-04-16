<template>
  <div class="navbar flex justify-between bg-[#FFFFFF] px-28 py-4">
    <div class="flex-1">
      <a class="normal-case text-4xl text-[#031550]"
        ><span class="font-bold">Med</span>Search</a
      >
    </div>
    <div class="flex-none">
      <ul class="flex pt-2 gap-8 menu menu-horizontal px-32">
        <li>
          <NuxtLink to="/" class="text-[#031550] hover:bg-softblue">
            Home
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about" class="text-[#031550] hover:bg-softblue">
            About
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavbarView',
}
</script>
