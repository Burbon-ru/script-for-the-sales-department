<template>
    <div class="edit-script__wrapper">
        <svg
            id="svg"
            class="edit-script"
            width="100%"
            height="100%"
            @dblclick="createQuestion"
            ref="dynamicLine"
        >
            <g id="transform-wrapper" transform="scale(1 1)" >
                <question
                    v-for="question in questionsInCurrentScript"
                    :questionId="question.id"
                    :key="question.id"
                    @click-question-edit="selectEditQuestion(question.id)"
                    @click-answer-edit="selectEditAnswer"
                    @click-answer-add-mousedown="drag"
                    @click-answer-bind-to-next-question="dragForBind"
                />
            </g>

            <path
                :d="pathCoords"
                :transform="stylesCoords"
                fill="transparent"
                stroke="#4294ff"
                stroke-width="1"
                marker-end="url(#arrow)"
            />
        </svg>

        <!-- Компонент-модальное окно создания вопроса -->
        <create-question
            v-if="CreatingUpdatingState.creatingQuestion"
            :newQuestionCoords="newQuestionCoords"
            @close-modal="closeAllModal"
        />

        <!-- Компонент-модальное окно редактирования вопроса -->
        <edit-question
            v-if="CreatingUpdatingState.editingQuestion"
            :current="currentEditQuestionId"
            @close-modal="closeAllModal"
        />

        <!-- Компонент-модальное окно создания ответа -->
        <create-answer
            v-if="CreatingUpdatingState.creatingAnswer"
            :currentQuestion="currentEditQuestionId"
            :newAnswerCoords="newAnswerCoords"
            @close-modal="closeAllModal"
        />

        <!-- Компонент-модальное окно редактирования ответа -->
        <edit-answer
            v-if="CreatingUpdatingState.editingAnswer"
            :currentQuestion="currentEditQuestionId"
            :current="currentEditAnswerId"
            @close-modal="closeAllModal"
        />
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';

    import Question from './../components/EditScript/question/index.vue';
    import createQuestion from './../components/EditScript/question/create.vue';
    import EditQuestion from './../components/EditScript/question/edit.vue';
    import createAnswer from './../components/EditScript/answer/create.vue';
    import editAnswer from './../components/EditScript/answer/edit.vue';

    import { updateAnswer } from './../functions/updateStuff.js';

    // стили для текстового редактора
    import 'tui-editor/dist/tui-editor.css'
    import 'tui-editor/dist/tui-editor-contents.css'
    import {bus} from "../bus";

    export default {
        name: "EditScript",
        components: {
            Question,
            EditQuestion,
            createAnswer,
            editAnswer,
            createQuestion
        },
        data: () => ({
            currentEditQuestionId: 0,
            currentEditAnswerId: 0,
            currentQuestionBindId: 0,
            CreatingUpdatingState: {
                creatingAnswer: false,
                creatingQuestion: false,
                editingQuestion: false,
                editingAnswer: false
            },
            square: {
                x: 25,
                y: 25,
            },
            newQuestionCoords: {},
            newAnswerCoords: {},
            dragOffsetX: null,
            dragOffsetY: null,
            pathCoords: '',
            stylesCoords: ''
        }),
        mounted () {
            this.$store.dispatch('setCurrentScriptId', this.$route.params.id);
            this.$store.dispatch('setQuestionsInCurrentScript');

            bus.$on('add-answer', () => this.currentEditQuestionId = 0);
        },
        computed: {
            ...mapGetters([
                'currentScriptId',
                'questionsInCurrentScript'
            ])
        },
        methods: {
            ...mapActions([
                'setCurrentScriptId',
                'setQuestionsInCurrentScript'
            ]),

            /**
             * эмитится из компонента answer при перетаскивании линии
             * для привязки к вопросу
             */
            dragForBind ({offsetX, offsetY}, answerId) {
                this.currentEditAnswerId = answerId;

                this.dragOffsetX = offsetX - this.square.x;
                this.dragOffsetY = offsetY - this.square.y;

                this.$refs.dynamicLine.addEventListener('mousemove', this.moveForBind);
                this.$refs.dynamicLine.addEventListener('mouseup', this.dropForBind);
            },

            /**
             * вешается на событие mousemove на элемент $refs.dynamicLine
             * в методе dragForBind
             */
            moveForBind ({offsetX, offsetY}) {
                this.pathCoords = `M ${this.dragOffsetX - offsetX} ${this.dragOffsetY - offsetY} L 0 0`;
                this.stylesCoords = `translate(${offsetX}, ${offsetY})`;

                // todo: высчитать размер шапки и заменить магическое число
                const test = document.elementFromPoint(offsetX, offsetY + 152);

                if (test.classList.contains('for_bind')) {
                    this.currentEditQuestionId = test.id;
                } else {
                    this.currentEditQuestionId = 0;
                }
            },

            /**
             * конец драга
             */
            dropForBind () {
                this.dragOffsetX = this.dragOffsetY = null;
                this.dragEndForBind();
                this.$refs.dynamicLine.removeEventListener('mousemove', this.moveForBind);
            },

            /**
             * вызывается в методе dropForBind (там где заканчивается перетаскивание)
             * и если мышь с концом линии попала на вопрос обновить вопрос (создать привязку)
             * todo: перерисовать линии
             */
            async dragEndForBind () {
                if (this.currentEditQuestionId) {
                    if (confirm('Привязать к этому элементу?')) {
                        const { status } = await updateAnswer({
                            id: this.currentEditAnswerId,
                            data: {
                                next_question_id: this.currentEditQuestionId
                            }
                        });

                        if (200 == status) {
                            this.currentEditQuestionId = 0;
                            this.currentEditAnswerId = 0;
                        }
                    }
                }
            },

            /**
             * эмитится из компонента question
             */
            drag ({offsetX, offsetY}, questionId) {
                this.currentEditQuestionId = questionId;

                this.dragOffsetX = offsetX - this.square.x;
                this.dragOffsetY = offsetY - this.square.y;

                this.$refs.dynamicLine.addEventListener('mousemove', this.move);
                this.$refs.dynamicLine.addEventListener('mouseup', this.drop);
            },

            /**
             * вызывается в методе drag
             */
            move ({offsetX, offsetY}) {
                this.pathCoords = `M ${this.dragOffsetX - offsetX} ${this.dragOffsetY - offsetY} L 0 0`;
                this.stylesCoords = `translate(${offsetX}, ${offsetY})`;
            },

            /**
             * метод вызывается на событии mouseup
             * которое повешено на элемент this.$refs.dynamicLine
             * в методе drag
             */
            drop ({offsetX, offsetY}) {
                this.newAnswerCoords = {
                    x: offsetX - this.square.x,
                    y: offsetY - this.square.y
                };

                this.dragOffsetX = this.dragOffsetY = null;
                this.$refs.dynamicLine.removeEventListener('mousemove', this.move);
                this.$refs.dynamicLine.removeEventListener('mouseup', this.drop);

                this.dragEnd();
            },

            /**
             * вызовет модалку для создания ответа
             * в событии drop
             */
            dragEnd () {
                this.selectCreateAnswer();
            },

            /**
             * Вызывает модальное окно создания ответа
             */
            selectCreateAnswer () {
                this.updateCreatingUpdatingState('creatingAnswer');
            },

            /**
             * Вызывает модальное окно создания вопроса
             *
             * @param id
             */
            selectCreateQuestion (id) {
                this.currentEditQuestionId = id;
                this.updateCreatingUpdatingState('creatingAnswer');
            },

            /**
             * Вызывает модальное окно изменения вопроса
             *
             * @param id
             */
            selectEditQuestion (id) {
                this.currentEditQuestionId = id;
                this.updateCreatingUpdatingState('editingQuestion');
            },

            /**
             * Вызывает модальное окно изменения ответа
             *
             * @param id
             */
            selectEditAnswer (id) {
                this.currentEditAnswerId = id;
                this.updateCreatingUpdatingState('editingAnswer');
            },

            /**
             * Закрывает модальные окна
             */
            closeAllModal () {
                for (let state in this.CreatingUpdatingState) {
                    this.CreatingUpdatingState[state] = false;
                }

                this.currentEditQuestionId = 0;
                this.pathCoords = '';
            },

            /**
             * Сохраняет координаты двойного клика в this.newQuestionCoords
             * и передает их в компонент создания вопроса
             * вызывает модальное окно создания вопроса
             *
             * @param e {MouseEvent}
             */
            createQuestion ({offsetX, offsetY}) {
                this.newQuestionCoords = {
                    x: offsetX - this.square.x,
                    y: offsetY - this.square.y,
                };

                this.updateCreatingUpdatingState('creatingQuestion');
            },

            /**
             * Изменяет состояние CreatingUpdatingState имеющее 4 поля:
             *
             * creatingQuestion - сейчас видно модальное окно создания вопроса
             * creatingAnswer - сейчас видно модальное окно создания ответа
             *
             * editingQuestion - сейчас видно модальное окно изменения вопроса
             * editingAnswer - сейчас видно модальное окно изменения ответа
             *
             * @param activePopup
             */
            updateCreatingUpdatingState (activePopup) {
                for (let state in this.CreatingUpdatingState) {
                    if (state == activePopup) {
                        this.CreatingUpdatingState[state] = true;
                    } else {
                        this.CreatingUpdatingState[state] = false;
                    }
                }
            }
        }
    }
</script>

<style>
    .edit-script {
        position: fixed;
        top: 150px;
        left: 0;
        width: 100%;
        height: 100%;
    }
</style>
