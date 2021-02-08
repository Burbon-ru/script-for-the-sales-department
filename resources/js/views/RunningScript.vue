<template>
    <div>
        <div
            v-for="item in list"
            :key="item.id"
        >
            <router-link
                :to="{path: '/running/' + item.id}"
            >
                {{ item.created }}
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "RunningScript",

        data: () => ({
            list: []
        }),

        async mounted () {
            const { data } = await axios.get('/api/RunningScript/getAll');

            this.list = data;
        }
    }
</script>

<style scoped>

</style>
