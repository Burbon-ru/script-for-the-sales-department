<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Редактирование вопроса</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true" @click="closeModal">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div v-if="editIsDone">
                                Вопрос успешно отредактирован
                            </div>

                            <form
                                v-if="!editIsDone"
                                id="edit_question_form"
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

                                <editor
                                    v-if="text.length"
                                    :initialValue="text"
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
    import {mapActions, mapGetters} from 'vuex';
    import serializeFormByDomSelector from './../../../functions/serializeFormByDomSelector.js';

    import { getQuestionById } from './../../../functions/getStuffById';

    import { Editor } from '@toast-ui/vue-editor';
    import editorOptions from "./../../../settings/editorOptions";

    export default {
        name: "editQuestion",
        props: ['current'],
        data: () => ({
            name: '',
            text: '',
            editIsDone: false,
            editorOptions: editorOptions
        }),
        components: {
            Editor
        },
        mounted () {
            this.setQuestionData();
        },
        watch: {
            current: function () {
                this.setQuestionData();
            }
        },
        computed: {
            ...mapGetters([
                'questionsInCurrentScript'
            ])
        },
        methods: {
            ...mapActions([
                'updateQuestion'
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
             * Устанавливает начальные данные для редактирования
             *
             * @returns {Promise<void>}
             */
            async setQuestionData () {
                const { data } = await getQuestionById(this.current);

                this.name = data.name;
                this.text = data.text;
            },

            /**
             * Обновить вопрос
             *
             * @returns {Promise<void>}
             */
            async submitQuestion () {
                try {
                    let objFormData = serializeFormByDomSelector('#edit_question_form');
                    objFormData.text = this.getHtml();

                    let { status } = await this.updateQuestion({
                        id: this.current,
                        data: objFormData
                    });

                    if (200 == status) {
                        this.editIsDone = true;
                    }
                } catch (e) {
                    console.error(e);
                }
            }
        }
    }
</script>
