<template>
    <div class="container">
        <div class="field">
            <div class="control">
                <button class="button" @click="test">test</button>
            </div>
        </div>
        <div class="notification" v-for="item in list" :key="item.key">
            item {{item.key}}
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
            'test',
        ]),
    },
};
</script>
