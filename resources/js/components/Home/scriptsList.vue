<template>
    <div class="scripts_list">
        <h3>Список скриптов</h3>

        <ul class="list-group">
            <script-item
                class="list-group-item"
                v-for="scriptItem in scriptsList"
                :scriptItem="scriptItem"
                :key="scriptItem.id"
            />
        </ul>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';

    import ScriptItem from './scriptItem';

    export default {
        name: "scriptsList",

        components: {
            ScriptItem
        },

        mounted () {
            this.$store.dispatch('getScripts');
        },

        computed: {
            ...mapGetters([
                'scriptsList'
            ])
        },

        methods: {
            ...mapActions([
                'getScripts'
            ])
        }
    }
</script>
