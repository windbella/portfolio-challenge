<template>
    <TagList
        :status="status"
        :list="tags"
        :toggleTag="toggleTag"
    />
</template>

<script>
import { mapState, mapActions } from 'vuex';
import TagList from '../components/TagList.vue';

export default {
    name: 'TagListContainer',
    computed: {
        ...mapState('work', {
            status: 'status',
            tags: 'tags',
        }),
    },
    methods: {
        ...mapActions('work', [
            'toggleTag',
        ]),
    },
    components: {
        TagList,
    },
};
</script>
