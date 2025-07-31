<script lang="ts" setup>
const slug = useRoute().params.slug
const { data: post } = await useAsyncData(`blog-${slug}`, () => {
    return queryCollection('blog').path(`/blog/${slug}`).first()
})
</script>

<!-- <template> -->
<!-- Render the blog post as Prose & Vue components -->
<!-- <ContentRenderer :value="post" /> -->
<!-- </template> -->

<template>
    <div v-if="post" class="prose">
        <ContentRenderer :value="post" />
    </div>
    <div v-else>
        <div class="empty-page">
            <h1>Page Not Found</h1>
            <p>Oops! The content you're looking for doesn't exist.</p>
            <NuxtLink to="/">Go back home</NuxtLink>
        </div>
    </div>
</template>