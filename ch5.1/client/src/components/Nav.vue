<template>
    <nav class="navbar is-primary is-fixed-top" role="navigation" aria-label="main navigation">
        <div class="container">
            <div class="navbar-brand">
                <a class="navbar-item" href="/">
                    <img src="../assets/logo.png" width="28" height="28">
                </a>

                <a
                    role="button"
                    class="navbar-burger burger"
                    :class="{ 'is-active': isActive }"
                    aria-label="menu"
                    :aria-expanded="isActive.toString()"
                    @click="toggleMenu"
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div class="navbar-menu" :class="{ 'is-active': isActive }">
                <div class="navbar-start">
                    <router-link to="/home" class="navbar-item">
                        Home
                    </router-link>

                    <router-link to="/work" class="navbar-item">
                        Work
                    </router-link>

                    <router-link to="/about" class="navbar-item">
                        About
                    </router-link>
                </div>

                <div class="navbar-end">
                    <a class="navbar-item">
                        Resume
                    </a>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Nav',
    data() {
        return {
            isActive: false,
        };
    },
    methods: {
        toggleMenu(event) {
            event.preventDefault();
            this.isActive = !this.isActive;
        },
    },
};
</script>
