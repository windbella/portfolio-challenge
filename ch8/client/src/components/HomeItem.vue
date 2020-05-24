<template>
    <div class="notification">
        <div class="content" v-html="content" />
    </div>
</template>

<script>
export default {
    name: 'HomeItem',
    props: {
        content: String,
    },
};
</script>
