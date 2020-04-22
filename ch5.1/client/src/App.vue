<template>
    <div id="app">
        <Nav />
        <section class="pf-content">
            <router-view/>
        </section>
    </div>
</template>

<script>
import Nav from './components/Nav.vue';

export default {
    name: 'App',
    components: {
        Nav,
    },
};
</script>

<style lang="css">
    @media screen and (min-width: 1024px) {
        .pf-content {
            width: 1024px;
            margin: 0 auto;
        }
    }
</style>
