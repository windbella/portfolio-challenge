<template>
    <div class="container">
        <TagListContainer />
        <h1 class="title">Work</h1>
        <WorkList
            :status="status"
            :list="list"
        />
    </div>
</template>

<script>
import { mapState } from 'vuex';
import TagListContainer from '../containers/TagListContainer.vue';
import WorkList from '../components/WorkList.vue';

export default {
    name: 'WorkView',
    computed: {
        ...mapState('work', [
            'status',
            'list',
        ]),
    },
    components: {
        TagListContainer,
        WorkList,
    },
};
</script>
