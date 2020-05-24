<template>
    <div class="tabs" v-if="status === 'SUCCESS'">
        <ul>
            <TagItem
                v-for="item in list"
                :item="item"
                :key="item.name"
                :toggleTag="toggleTag"
            />
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
        toggleTag: Function,
    },
    components: {
        TagItem,
    },
};
</script>
