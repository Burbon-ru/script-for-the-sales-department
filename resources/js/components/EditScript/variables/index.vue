<template>
    <div class="variables">
        <div>
            Список переменных (кликнуть чтобы добавить в редактор)
        </div>

        <ul>
            <li
                class="variable__item"
                v-for="variable in variablesInCurrentScript"
                :key="variable.id"
            >
                <span
                    @click="selectVariable(variable.code)"
                >
                    {{ variable.name }}
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';

    export default {
        name: "variables",

        mounted () {
            this.$store.dispatch('setCurrentScriptId', this.$route.params.id);
            this.$store.dispatch('setVariablesInCurrentScript');
        },

        computed: {
            ...mapGetters([
                'currentScriptId',
                'variablesInCurrentScript'
            ])
        },

        methods: {
            ...mapActions([
                'setVariablesInCurrentScript',
                'deleteVariable'
            ]),

            /**
             * Вызывается при клике на переменную, чтобы добавить переменную в markdown
             */
            selectVariable (code) {
                this.$emit('addToMarkdown', code);
            }
        }
    }
</script>

<style scoped>
    .variables .variable__item {
        display: inline-block;
        cursor: pointer;
    }
</style>
