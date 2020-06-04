<template>
    <div class="container">
        <h1 class="title">Home</h1>
        <HomeList
            :status="homeStatus"
            :list="homeList"
        />
        <hr />
        <h1 class="title">Work</h1>
        <WorkList
            :status="workStatus"
            :list="workList"
        />
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import HomeList from '../components/HomeList.vue';
import WorkList from '../components/WorkList.vue';

export default {
    name: 'HomeView',
    computed: {
        ...mapState('home', {
            homeStatus: 'status',
            homeList: 'list',
        }),
        ...mapState('work', {
            workStatus: 'status',
            workList: 'list',
        }),
        ...mapGetters('work', {
            workList: 'mainList',
        }),
    },
    components: {
        HomeList,
        WorkList,
    },
};
</script>
