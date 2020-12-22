<template>
    <div class="scripts_list">
        <h3>Список скриптов</h3>

        <ul class="list-group">
            <li
                class="list-group-item"
                v-for="(script) in scriptsList"
                :key="script.id"
            >
                <h4>
                    {{ script.name }}
                </h4>

                <div>
                    <router-link
                        :to="{ path: '/scripts/edit/' + script.id }"
                    >
                        редактирование
                    </router-link>
                </div>

                <div>
                    <router-link
                        :to="{ path: '/scripts/run/' + script.id }"
                    >
                        запуск
                    </router-link>
                </div>

                <div>
                    <router-link
                        :to="{ path: '/scripts/variables/' + script.id }"
                    >
                        переменные
                    </router-link>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';

    export default {
        name: "scriptsList",
        computed: {
            ...mapGetters([
                'scriptsList'
            ])
        },
        methods: {
            ...mapActions([
                'getScripts'
            ])
        },
        mounted () {
            this.$store.dispatch('getScripts');
        }
    }
</script>
