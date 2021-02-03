<template>
    <div>
        <div
            v-for="item in list"
            :key="item.id"
        >
            <router-link
                :to="{path: '/running/' + item.id}"
            >
                {{ item.created_at }}
            </router-link>
        </div>
    </div>
</template>

<script>
    //import runningScriptItem from './../components/RunningScript/item';

    import axios from "axios";

    export default {
        name: "RunningScript",

        data: () => ({
            list: []
        }),

        // components: {
        //     runningScriptItem
        // },

        async mounted () {
            const { data, status } = await axios.get('/api/RunningScript/getAll');

            this.list = data;
        }
    }
</script>

<style scoped>

</style>
