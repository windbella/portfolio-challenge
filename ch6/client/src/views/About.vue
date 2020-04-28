<template>
    <div class="container">
        <div class="field">
            <div class="control">
                <button class="button" @click="toggle">toggle</button>
            </div>
        </div>
        <div class="notification" v-if="isShow">
            This is an about page
        </div>
    </div>
</template>

<script>
export default {
    name: 'Work',
    data() {
        return {
            isShow: true,
        };
    },
    methods: {
        toggle() {
            this.isShow = !this.isShow;
        },
    },
};
</script>
