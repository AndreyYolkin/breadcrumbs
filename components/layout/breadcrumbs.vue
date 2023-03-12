<template>
  <article>
    <ul>
      <li v-for="breadcrumb in state.breadcrumbs" :key="breadcrumb.text">
        <nuxt-link :to="breadcrumb.href" :disabled="breadcrumb.disabled">
          {{ breadcrumb.text }}
        </nuxt-link>
      </li>
    </ul>
  </article>
</template>

<script>
export default {
  setup() {
    const { state } = useBreadcrumbs()
    return {
      state
    }
  }
}
</script>