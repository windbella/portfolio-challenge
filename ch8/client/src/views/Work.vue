<template>
    <div class="container">
        <h1 class="title">Work</h1>
        <WorkList
            :status="status"
            :list="list"
        />
    </div>
</template>

<script>
import { mapState } from 'vuex';
import WorkList from '../components/WorkList.vue';

export default {
    name: 'Work',
    computed: {
        ...mapState('work', [
            'status',
            'list',
        ]),
    },
    components: {
        WorkList,
    },
};
</script>
