<template>
    <div class="card has-margin-bottom">
        <div class="card-image">
            <figure class="image is-2by1">
                <img :src="content.image" alt="Placeholder image">
            </figure>
        </div>
        <div class="card-content">
            <div class="content">
                <p class="title is-4">{{content.title}}</p>
                <p class="subtitle is-6 has-text-grey">{{content.subtitle}}</p>
                <div v-html="content.content"/>
                <br />
                <div>
                    <span class="has-text-link" v-for="(tag, index) in content.tags" :key="index">
                        #{{tag}}
                    </span>
                </div>
                <time :datetime="content.startDate">
                    {{new Date(content.startDate).toDateString()}}
                </time>
                ~
                <time :datetime="content.endDate">
                    {{new Date(content.startDate).toDateString()}}
                </time>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'WorkItem',
    props: {
        content: Object,
    },
};
</script>
