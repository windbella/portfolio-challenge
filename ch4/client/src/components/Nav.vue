<template>
    <nav class="pf-nav has-background-primary">
        <div class="navbar is-primary" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item" href="/">
                    <img src="../assets/logo.png" width="28" height="28">
                </a>

                <a
                    role="button"
                    class="navbar-burger burger"
                    aria-label="menu"
                    aria-expanded="false"
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div class="navbar-menu">
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
                    <div class="navbar-item">
                        <a class="button is-white is-small is-outlined">
                            Resume
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Nav',
};
</script>

<style lang="css">
    @media screen and (min-width: 1024px) {
        .pf-nav .navbar {
            max-width: 1024px;
            margin: 0 auto;
        }
    }

    .pf-nav {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 30;
        background-color: #fff;
    }
</style>
