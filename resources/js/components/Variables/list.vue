<template>
    <div class="variables__list">
        <h3>Список переменных</h3>

        <ul class="list-group">
            <li
                class="list-group-item"
                v-for="variable in variablesInCurrentScript"
                :key="variable.id"
            >
                <h4>
                    {{ variable.name }}
                </h4>

                <div>
                    <button
                        @click="clickEdit(variable.id)"
                        type="button"
                    >
                        edit
                    </button>
                </div>

                <div>
                    <button
                        @click="clickDelete(variable.id)"
                        type="button"
                    >
                        delete
                    </button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';

    export default {
        name: "variablesList",

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
             * Эмитит событие что выбрано редактирование переменной
             * и передает id выбранной переменной
             *
             * @param id
             */
            clickEdit (id) {
                this.$emit('click-edit-variable', id);
            },

            /**
             * Удалить переменную
             *
             * @param id
             */
            async clickDelete (id) {
                if (confirm('Удалить эту переменную?')) {
                    await this.deleteVariable(id);
                }
            }
        }
    }
</script>
