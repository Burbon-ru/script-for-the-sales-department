<template>
    <div class="run_script">
        <discussion
            :questions="questions"
            :answers="answers"
        />

        <select-answer
            :currentQuestionId="currentQuestionId"
            @next-answer="nextAnswer"
        />
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';

    import discussion from './../components/RunScriptNew/discussion.vue';
    import SelectAnswer from './../components/RunScript/selectAnswer.vue';

    import { getAnswerById, getQuestionById } from './../functions/getStuffById';

    export default {
        name: "RunScriptNew",
        components: {
            discussion,
            SelectAnswer
        },
        data: () => ({
            questions: [],
            answers: [],
            currentQuestionId: 0
        }),
        computed: {
            ...mapGetters([
                'currentScriptId'
            ])
        },
        async mounted () {
            this.$store.dispatch('setCurrentScriptId', this.$route.params.id);

            const { data } = await this.getFirstQuestion();
            this.questions = data;

            this.currentQuestionId = this.questions[0].id;
        },
        methods: {
            ...mapActions([
                'setCurrentScriptId',
            ]),

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
                let { data } = await getAnswerById(id);
                this.answers.push(data);
                this.currentQuestionId = data.id;

                const nextQuestion = await getQuestionById(data.next_question_id);
                this.questions.push(nextQuestion.data);
            }
        }
    }
</script>
