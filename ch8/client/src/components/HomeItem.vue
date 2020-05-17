<template>
    <div class="notification">
        Home {{content}}
    </div>
</template>

<script>
export default {
    name: 'HomeItem',
    props: {
        content: Object,
    },
};
</script>
