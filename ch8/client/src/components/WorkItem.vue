<template>
    <div class="notification">
        Work {{content}}
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
