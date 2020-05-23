<template>
    <div class="tabs">
        <ul>
            <TagItem class="is-active" />
            <TagItem />
            <TagItem />
            <TagItem />
            <TagItem />
            <TagItem />
            <TagItem />
        </ul>
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
