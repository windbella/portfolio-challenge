<template>
    <div class="container">
        <div class="notification">
            This is a work page
        </div>
        <div class="notification" v-for="item in list" :key="item.key">
            list {{item.key}}
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'Work',
    computed: {
        ...mapState('work', [
            'list',
        ]),
    },
};
</script>
