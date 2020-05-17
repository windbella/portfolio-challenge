<template>
    <div v-if="status === 'SUCCESS'">
        <HomeItem
            v-for="item in list"
            :key="item.id"
            :content="item.content"
        />
    </div>
    <div v-else-if="status === 'FAILURE'">
        <div class="notification">
            목록을 불러오는데 실패하였습니다.
        </div>
    </div>
    <div v-else>
        <div class="notification">
            <progress class="progress is-medium is-primary" max="100"></progress>
        </div>
    </div>
</template>

<script>
import HomeItem from './HomeItem.vue';

export default {
    name: 'HomeList',
    props: {
        status: String,
        list: Array,
    },
    components: {
        HomeItem,
    },
};
</script>
