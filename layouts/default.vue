<template>
  <main>
    <h1> I am default layout </h1>
    <breadcrumbs />
    <slot />
    <NuxtLink to="/">To Index</NuxtLink>
    <NuxtLink to="/about">To About</NuxtLink>
  </main>
</template>

<script>
import breadcrumbs from '~~/components/layout/breadcrumbs.vue'

export default {
  components: {
    breadcrumbs
  }
}
</script>