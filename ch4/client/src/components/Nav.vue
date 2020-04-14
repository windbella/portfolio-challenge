<template>
    <div class="navbar-wrapper">
        <nav class="navbar has-max-width" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
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
                    <router-link to="/" class="navbar-item">
                        Home
                    </router-link>

                    <router-link to="/about" class="navbar-item">
                        About
                    </router-link>
                </div>

                <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="buttons">
                            <a class="button is-primary">
                                <strong>Resume</strong>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'Nav',
};
</script>

<style lang="css">
    .navbar.has-max-width {
        max-width: 1024px;
        margin: 0 auto;
    }

    .navbar-wrapper {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 30;
        background-color: #fff;
    }
</style>
