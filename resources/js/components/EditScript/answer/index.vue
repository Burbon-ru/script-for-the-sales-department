<template>
    <g
        class="answer_drag"
        :transform="stylesCoords"
        :id="answer.id"
        ref="box"
    >
        <defs>
            <marker id="arrow"  markerWidth="20" markerHeight="20" refX="10" refY="3" orient="auto" markerUnits="strokeWidth">
                <path d="M0,0 L0,6 L9,3 z" fill="#4294ff"/>
            </marker>
        </defs>

        <path
            :d="pathCoords"
            fill="transparent"
            stroke="#4294ff"
            stroke-width="1"
            marker-end="url(#arrow)"
        />

        <g
            @mousedown="drag"
            @mouseup="drop"
        >
            <text
                x="20" y="24"
                fill="#000"
            >
                {{ answer.name }}
            </text>
            <rect
                class="answer"
                width="200"
                height="40"
                fill="transparent"
                :stroke="blockColor"
                stroke-width="2"
            />
        </g>

        <g
            class="question add-answer"
            @mousedown="bindToNextQuestion"
        >
            <circle
                cy="40" cx="100" r="10"
                stroke="#cfcfcf"
                stroke-width="1"
                fill="#fff"
            />
            <path
                d="M108.66,48.66h2.57a.51.51,0,0,0,.51-.51v-.34a.51.51,0,0,0-.51-.52h-2.57V44.73a.51.51,0,0,0-.51-.52h-.34a.52.52,0,0,0-.52.52v2.56h-2.56a.52.52,0,0,0-.52.52v.34a.51.51,0,0,0,.52.51h2.56v2.57a.51.51,0,0,0,.52.51h.34a.51.51,0,0,0,.51-.51Z"
                y="0" x="280"
                transform="translate(-40 -22) scale(1.3)"
                style="fill: #2f700f"
                width="80"
                height="80"
            />
        </g>

        <g
            class="answer edit-answer"
            @click="editAnswer"
        >
            <circle
                cy="0" cx="200" r="10"
                stroke="#f58d0f"
                stroke-width="2"
                fill="white"
            />
            <path
                d="M206.68,11.07l-2-2,4.83-4.83,2,2Zm-2.19-1.65,1.83,1.83-2.74.92Zm7.63-3.8-.35.35-2-2,.35-.35a.89.89,0,0,1,1.26,0l.74.74A.89.89,0,0,1,212.12,5.62Z"
                width="80" height="80" x="200"
                transform="translate(-70 -10) scale(1.3)"
                fill="#4294ff"
            />
        </g>

        <g
            @click="deleteA"
            class="answer delete"
        >
            <circle
                cy="0" cx="0" r="10"
                stroke="#cfcfcf"
                stroke-width="1"
                fill="#fff"
            />
            <path
                d="M9,8l1.81-1.82a.51.51,0,0,0,0-.72l-.24-.24a.52.52,0,0,0-.73,0L8,7,6.16,5.2a.49.49,0,0,0-.72,0l-.24.24a.49.49,0,0,0,0,.72L7,8,5.2,9.79a.52.52,0,0,0,0,.73l.24.24a.51.51,0,0,0,.72,0L8,9l1.81,1.81a.52.52,0,0,0,.73,0l.24-.24a.52.52,0,0,0,0-.73Z"
                y="0" x="360"
                transform="translate(-16 -16) scale(2)"
                style="fill: #f00;"
                width="80"
                height="80"
            />
        </g>
    </g>
</template>

<script>
    import {mapActions} from "vuex";

    import { bus } from './../../../bus/index.js';

    import { getAnswerById, getAnswerStatusById, getQuestionById } from './../../../functions/getStuffById.js';
    import { updateAnswer } from './../../../functions/updateStuff.js';
    import { deleteAnswer } from './../../../functions/deleteStuff.js';

    export default {
        name: "answer",
        props: ['answerId'],
        data: () => ({
            currentAnswer: 0,
            answer: {},
            question: {},
            stylesCoords: '',
            pathCoords: '',
            square: {
                x: 25,
                y: 25
            },
            dragOffsetX: null,
            dragOffsetY: null,
            blockColor: ''
        }),
        async mounted () {
            const { data } = await getAnswerById(this.answerId);
            this.answer = data;

            if (this.answer.status_id) {
                const { data } = await getAnswerStatusById(this.answer.status_id);
                this.blockColor = data.color;
            }

            if (this.answer.next_question_id) {
                const { data } = await getQuestionById(this.answer.next_question_id);
                this.question = data;
            }

            if (this.question.coords) {
                this.pathCoords = `M 0 0 L ${this.question.coords.x - this.answer.coords.x} ${this.question.coords.y - this.answer.coords.y}`;
            }

            if (this.answer.coords) {
                this.stylesCoords =  `translate(${this.answer.coords.x}, ${this.answer.coords.y})`;
            }

            bus.$on('question-move', this.questionMoveHandler);

            bus.$on('question_is_bind', this.drawBindLine);
        },
        methods: {
            ...mapActions([
                'deleteAnswer'
            ]),

            /**
             * Событие эмитит в родительский компонет зажатую мышку для отрисовки пути
             * и привязывания к следующему вопросу
             */
            async bindToNextQuestion (e) {
                this.$emit('click-answer-bind-to-next-question', e, this.answerId);
            },

            /**
             * эмитит событие в родителя чтобы вызвать модальное окно
             * для редактирования ответа
             */
            editAnswer () {
                this.$emit('click-answer-edit', this.answer.id);
            },

            /**
             * Когда случилась привязка
             * todo: код скопирован из mounted (знаешь что это значит)
             */
            async drawBindLine () {
                const { data } = await getAnswerById(this.answerId);
                this.answer = data;

                if (this.answer.next_question_id) {
                    const { data } = await getQuestionById(this.answer.next_question_id);
                    this.question = data;
                }

                if (this.question.coords) {
                    this.pathCoords = `M 0 0 L ${this.question.coords.x - this.answer.coords.x} ${this.question.coords.y - this.answer.coords.y}`;
                }

                if (this.answer.coords) {
                    this.stylesCoords =  `translate(${this.answer.coords.x}, ${this.answer.coords.y})`;
                }
            },

            /**
             * Удаление ответа
             */
            async deleteA () {
                if (confirm('Ответ будет удален. Продолжить?')) {
                    const { status } = await deleteAnswer(this.answer.id);

                    if (200 == status) {
                        this.$emit('answer-deleted', this.answer.id);
                    }
                }
            },

            /**
             * перерисовывает пути в родительском компоненте (question) от вопроса к ответу
             * вызывается в методах drag and drop
             *
             *
             * @param offsetX
             * @param offsetY
             */
            move ({offsetX, offsetY}) {
                this.$parent.pathsCoords = this.$parent.pathsCoords.map(el => {
                    if (this.answerId == el.id) {
                        el.value = `M ${this.$parent.question.coords.x} ${this.$parent.question.coords.y} L ${offsetX - this.square.x} ${offsetY - this.square.y}`;
                    }

                    return el;
                });

                if (this.question.coords) {
                    this.pathCoords = `M 0 0 L ${this.question.coords.x - offsetX + this.square.x} ${this.question.coords.y - offsetY + this.square.y}`;
                }

                this.stylesCoords = `translate(${offsetX - this.square.x}, ${offsetY - this.square.x})`;
            },

            /**
             * Событие завершения перетаскивания
             * Метод сохраняет значения координат ответа в базу,
             * обновляет данные this.answer,
             * и вызывает событие answer-change в родителе (question)
             * не передает данные какой ответ изменился
             * todo: здесь передать id, в question обновлять не все ответы а только измененные
             *
             * вызывается в событии drop
             */
            async dragEnd ({offsetX, offsetY}) {
                try {
                    const { data } = await updateAnswer({
                        id: this.answer.id,
                        data: {
                            coords: {
                                x: offsetX - this.square.x,
                                y: offsetY - this.square.y
                            }
                        }
                    });

                    this.answer = data;

                    this.$emit('answer-change');
                } catch (e) {
                    console.error(e);
                }
            },

            /**
             * drag на событии mousedown
             *
             * @param offsetX
             * @param offsetY
             */
            drag ({offsetX, offsetY}) {
                this.dragOffsetX = offsetX - this.square.x;
                this.dragOffsetY = offsetY - this.square.y;

                this.$refs.box.addEventListener('mousemove', this.move);
            },

            /**
             * drag на событии mouseup
             */
            drop (e) {
                this.dragOffsetX = this.dragOffsetY = null;
                this.dragEnd(e);
                this.$refs.box.removeEventListener('mousemove', this.move);
            },

            /**
             * Перерисовывает линию от ответа к привязанному к нему вопросу/
             * Вызывается по событию question-move из шины событий
             *
             * @param questionId
             * @param coords
             */
            questionMoveHandler ({questionId, coords}) {
                if (this.answer.next_question_id == questionId) {
                    this.pathCoords = `M 0 0 L ${coords.x - this.answer.coords.x} ${coords.y - this.answer.coords.y}`;
                }
            }
        }
    }
</script>

<style lang="scss">
    .answer_drag {
        display: inline-block;
        cursor: grab;
    }

    .answer {
        border: 1px solid black;
        display: inline-block;
        padding: 10px;

        &.selected {
            background-color: aqua;
        }
    }
</style>
