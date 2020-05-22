<template>
    <div class="container">
        <h1 class="title">About</h1>
        <AboutContent />
    </div>
</template>

<script>
import AboutContent from '../components/AboutContent.vue';

export default {
    name: 'AboutView',
    components: {
        AboutContent,
    },
};
</script>
