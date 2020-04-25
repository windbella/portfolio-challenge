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
export default {
    name: 'Work',
    data() {
        return {
            list: [
                { key: 1 },
                { key: 2 },
                { key: 3 },
                { key: 4 },
                { key: 5 },
            ],
        };
    },
}
</script>
