<template>
    <div>
        <TagItem/>
    </div>
</template>

<script>
import TagItem from './TagItem.vue';

export default {
    name: 'TagList',
    props: {
        status: String,
        list: Array,
    },
    components: {
        TagItem,
    },
};
</script>
