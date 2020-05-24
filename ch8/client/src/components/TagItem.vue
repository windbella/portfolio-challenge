<template>
    <li :class="{ ['is-active']: item.isActive }">
        <a @click.prevent="toggleTag(item)">
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
