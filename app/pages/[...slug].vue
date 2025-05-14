<script setup lang="ts">
const route = useRoute()
const { builtAt, dependencies } = useRuntimeConfig().public

const buildInfo = computed(() => {
  return [
    `Nuxt: ${dependencies['nuxt']}`,
    `Content: ${dependencies['@nuxt/content']}`,
    `Built at ${builtAt}`,
  ].join('\n')
})

const { data: page } = await useAsyncData('page-' + route.path, () => {
  return queryCollection('content').path(route.path).first()
})

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}
</script>

<template>
  <ContentRenderer
    v-if="page"
    :value="page"
  />
  <hr/>
  <pre>description: {{  page?.description }}</pre>
  <hr/>
  <pre>{{ buildInfo }}</pre>
</template>
