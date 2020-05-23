<template>
    <div class="card has-margin-bottom">
        <div class="card-image">
            <figure class="image is-2by1">
                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
            </figure>
        </div>
        <div class="card-content">
            <div class="content">
                <p class="title is-4">Title</p>
                <p class="subtitle is-6">Subtitle</p>
                Content {{content}}
                <br />
                <a href="#">#tag</a> <a href="#">#tag</a> <a href="#">#tag</a>
                <br />
                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'WorkItem',
    props: {
        content: Object,
    },
};
</script>

<style scoped>
    .has-margin-bottom {
        margin-bottom: 1.5em;
    }
</style>
