<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Создание ответа</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true" @click="closeModal">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div v-if="createIsDone">
                                Ответ успешно создан
                            </div>

                            <form
                                v-if="!createIsDone"
                                id="create_answer_form"
                                @submit.prevent="submitAnswer"
                            >
                                <div class="form-group">
                                    <label for="name">
                                        Название ответа
                                    </label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="name"
                                        name="name"
                                        v-model="name"
                                    >
                                </div>

                                <div class="form-group">
                                    <label for="status">
                                        Статус
                                    </label>

                                    <select
                                        v-model="status_id"
                                        id="status"
                                        name="status_id"
                                        class="form-control"
                                    >
                                        <option
                                            v-for="status in answerStatusesList"
                                            :value="status.id"
                                            :key="status.id"
                                        >
                                            {{ status.text }}
                                        </option>
                                    </select>
                                </div>

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
    import { createAnswer } from './../../../functions/createStuff.js';
    import delay from "../../../functions/delay";

    export default {
        name: "createAnswer",
        props: ['currentQuestion', 'newAnswerCoords'],
        data: () => ({
            status_id: 0,
            name: '',
            createIsDone: false
        }),
        computed: {
            ...mapGetters([
                'answerStatusesList'
            ])
        },
        mounted () {
            this.$store.dispatch('getAnswerStatuses');
        },
        methods: {
            ...mapActions([
                'getAnswerStatuses'
            ]),
            closeModal () {
                this.$emit('close-modal');
            },
            async submitAnswer () {
                let objFormData = serializeFormByDomSelector('#create_answer_form');
                objFormData.coords = JSON.parse(JSON.stringify(this.newAnswerCoords));
                objFormData.question_id = this.currentQuestion;

                let { status } = await createAnswer(objFormData);

                if (201 == status) {
                    this.createIsDone = true;
                    await delay(2);
                    this.closeModal();
                }
            }
        }
    }
</script>
