<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Создание вопроса</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true" @click="closeModal">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div v-if="createIsDone">
                                Вопрос успешно создан
                            </div>

                            <form
                                v-if="!createIsDone"
                                id="create_question_form"
                                @submit.prevent="submitQuestion"
                            >
                                <div class="form-group">
                                    <label for="name">
                                        Название вопроса
                                    </label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="name"
                                        name="name"
                                        v-model="name"
                                    >
                                </div>

                                <div class="form-group form-check">
                                    <input type="checkbox" class="form-check-input" id="is_first" name="is_first">
                                    <label class="form-check-label" for="is_first">Первый вопрос</label>
                                </div>

                                <editor
                                    :language="editorOptions.language"
                                    :initialEditType="editorOptions.initialEditType"
                                    height="350px"
                                    ref="toastuiEditor"
                                />

                                <input
                                    type="submit"
                                    value="Сохранить"
                                    class="btn btn-primary"
                                >
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    import serializeFormByDomSelector from './../../../functions/serializeFormByDomSelector.js';
    import delay from './../../../functions/delay.js';

    import {mapActions, mapGetters} from 'vuex';

    import { Editor } from '@toast-ui/vue-editor';
    import editorOptions from "./../../../settings/editorOptions";

    export default {
        name: "createQuestion",
        data: () => ({
            text: '',
            name: '',
            is_first: false,
            createIsDone: false,
            editorOptions: editorOptions
        }),
        props: ['newQuestionCoords'],
        components: {
            Editor
        },
        computed: {
            ...mapGetters([
                'currentScriptId'
            ])
        },
        methods: {
            ...mapActions([
                'createQuestion'
            ]),

            /**
             * эмитит событие для закрытия модальных окон
             */
            closeModal () {
                this.$emit('close-modal');
            },

            /**
             * Получить html из редактора
             *
             * @returns {*}
             */
            getHtml() {
                return this.$refs.toastuiEditor.invoke('getHtml');
            },

            /**
             * Создать вопрос
             *
             * @returns {Promise<void>}
             */
            async submitQuestion () {
                let objFormData = serializeFormByDomSelector('#create_question_form');

                objFormData.text = this.getHtml();
                objFormData.coords = JSON.parse(JSON.stringify(this.newQuestionCoords));
                objFormData.script_id = this.currentScriptId;

                const { status, data } = await this.createQuestion(objFormData);

                if (data.first_question_name) {
                    alert('нельзя создать еще один первый вопрос. Название существующего первого вопроса: ' + data.first_question_name);
                }

                if (201 == status) {
                    this.$emit('created');

                    this.createIsDone = true;
                    await delay(2);

                    this.closeModal();
                }
            }
        }
    }
</script>
