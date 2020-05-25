<template>
    <li
        :class="{ ['is-active']: item.isActive, 'has-background-white': true }"
        @click.prevent="toggleTag(item)"
    >
        <a>
            {{item.name}}
        </a>
    </li>
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
