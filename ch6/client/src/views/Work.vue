<template>
    <div class="container">
        <div class="notification">
            <button class="button" @click="add">add</button>
        </div>
        <div class="notification" v-for="item in list" :key="item.key">
            list {{item.key}}
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
    name: 'Work',
    computed: {
        ...mapState('work', [
            'list',
        ]),
    },
    methods: {
        ...mapActions('work', [
            'add',
        ]),
    },
};
</script>
