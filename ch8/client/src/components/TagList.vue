<template>
    <div v-if="status === 'SUCCESS'">
        <ul class="buttons">
            <TagItem v-for="item in list" :item="item" :key="item.name" :toggleTag="toggleTag" />
        </ul>
        <hr />
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

<style scoped>
    hr {
        margin: 0 0 1.5rem
    }
    ul.buttons {
        display: block;
        padding: 0.15rem;
        margin-bottom: 0.5rem;
        overflow-x: auto;
        white-space: nowrap;
    }
</style>
