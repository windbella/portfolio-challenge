<template>
    <button
        :class="{ button: true, ['is-primary is-light is-active']: item.isActive }"
        @click.prevent="toggleTag(item)"
    >
        #{{item.name}}
    </button>
</template>

<script>
export default {
    name: 'TagItem',
    props: {
        item: Object,
        toggleTag: Function,
    },
};
</script>
