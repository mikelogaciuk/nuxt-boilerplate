<template>
    <div>
        <h1>Posts</h1>
        <ul>
            <li v-for="post in allPosts" :key="post.id">
                <nuxt-link :to="post.path">{{ post.title }}</nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
const allPosts = await queryCollection('blog').order('date', 'DESC').all()
</script>

<style></style>