<template>
    <div class="variables">
        <button
            @click="selectCreateVariable('creating')"
            class="btn btn-primary"
        >
            Создать переменную
        </button>

        <create-variable
            v-if="CreatingUpdatingState.creating"
            @close-modal="closeAllModal"
        />

        <update-variable
            v-if="CreatingUpdatingState.updating"
            :currentId="editingVariableId"
            @close-modal="closeAllModal"
        />

        <variables-list
            @click-edit-variable="selectEditVariable"
        />
    </div>
</template>

<script>
    import {mapActions} from 'vuex';

    import variablesList from './../components/Variables/list.vue';
    import createVariable from './../components/Variables/create.vue';
    import updateVariable from './../components/Variables/edit.vue';

    export default {
        name: "Variables",
        components: {
            variablesList,
            createVariable,
            updateVariable
        },
        mounted () {
            this.$store.dispatch('setCurrentScriptId', this.$route.params.id);
            //this.$store.dispatch('setVariablesInCurrentScript');
        },
        data: () => ({
            CreatingUpdatingState: {
                creating: false,
                updating: false
            },
            isSaved: false,
            editingVariableId: 0
        }),
        methods: {
            ...mapActions([
                'setCurrentScriptId',
                'setVariablesInCurrentScript'
            ]),

            /**
             * Вызывает модальное окно создания переменной
             */
            selectCreateVariable () {
                this.updateCreatingUpdatingState('creating');
            },

            /**
             * Вызывает модальное окно создания переменной
             *
             * @param id
             */
            selectEditVariable (id) {
                this.editingVariableId = id;
                this.updateCreatingUpdatingState('updating');
            },

            /**
             * Закрывает модальные окна
             */
            closeAllModal () {
                for (let state in this.CreatingUpdatingState) {
                    this.CreatingUpdatingState[state] = false;
                }

                this.editingVariableId = 0;
            },

            /**
             * Изменяет состояние CreatingUpdatingState имеющее 2 поля:
             *
             * creating - сейчас видно модальное окно создания переменной
             * editing - сейчас видно модальное окно изменения переменной
             *
             * @param changingNow
             */
            updateCreatingUpdatingState (changingNow) {
                for (let state in this.CreatingUpdatingState) {
                    if (state == changingNow) {
                        this.CreatingUpdatingState[state] = true;
                    } else {
                        this.CreatingUpdatingState[state] = false;
                    }
                }
            }
        }
    }
</script>
