<template>
    <div id="app">
        <Nav />
        <section class="section">
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
