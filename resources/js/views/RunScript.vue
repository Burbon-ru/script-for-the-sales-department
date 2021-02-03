<template>
    <div class="run_script">
        <button
            v-if="!startScript"
            @click="runScript"
            class="btn btn-primary"
        >
            Запустить скрипт
        </button>

        <discussion
            :startScript="startScript"
            :clickEnd="clickEnd"
            :questions="questions"
            :answers="answers"
            @isPrepareDialogResultData="isPrepareDialogResultData"
        />

        <select-answer
            :startScript="startScript"
            :currentQuestionId="currentQuestionId"
            @next-answer="nextAnswer"
        />

        <button
            v-if="questions.length > 1 && startScript"
            @click="back"
            type="button"
            class="btn btn-warning"
        >
            Назад
        </button>

        <button
            v-if="startScript"
            @click="end"
            type="button"
            class="btn btn-danger"
        >
            Закончить разговор
        </button>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';

    import discussion from './../components/RunScript/discussion.vue';
    import SelectAnswer from './../components/RunScript/selectAnswer.vue';

    import { getAnswerById, getQuestionById } from './../functions/getStuffById';
    import axios from "axios";

    export default {
        name: "RunScriptNew",

        components: {
            discussion,
            SelectAnswer
        },

        data: () => ({
            questions: [],
            answers: [],
            currentQuestionId: 0,
            startScript: false,
            clickEnd: false
        }),

        computed: {
            ...mapGetters([
                'currentScriptId'
            ])
        },

        async mounted () {
            this.$store.dispatch('setCurrentScriptId', this.$route.params.id);

            const { data } = await this.getFirstQuestion();

            if (data.length) {
                this.questions = data;
                this.currentQuestionId = this.questions[0].id;
            } else {
                alert('В редактировании скрипта не указан начальный вопрос');
            }
        },

        methods: {
            ...mapActions([
                'setCurrentScriptId',
            ]),

            /**
             * Нажатие на завершить разговор, "сходить" в компонент discussion,
             * забрать последовательность и в методе isPrepareDialogResultData
             * сохранить разговор в БД
             */
            end () {
                this.clickEnd = true;
            },

            /**
             * сохранить разговор в БД
             */
            async isPrepareDialogResultData ({questions, answers}) {
                const { data, status } = await axios.post('/api/RunningScript/saveSequence', {questions, answers});
            },

            /**
             * Поехали!
             */
            runScript () {
                this.startScript = true;
            },

            /**
             * Получить первый вопрос
             *
             * @returns {*}
             */
            getFirstQuestion () {
                return axios.get('/api/question/getFirstQuestion/?scriptId=' + this.currentScriptId);
            },

            /**
             * Эмитится из компонента SelectAnswer
             * добавляет выбранный ответ в массив answers
             *
             * @param id
             * @returns {Promise<void>}
             */
            async nextAnswer (id) {
                const { data } = await getAnswerById(id);
                this.answers.push(data);

                if (data.next_question_id) {
                    const nextQuestion = await getQuestionById(data.next_question_id);
                    this.currentQuestionId = nextQuestion.data.id;
                    this.questions.push(nextQuestion.data);
                }
            },

            /**
             * шаг назад в диалоге
             */
            back () {
                this.answers.pop();
                this.questions.pop();
                this.currentQuestionId = this.questions[this.questions.length - 1].id
            }
        }
    }
</script>
