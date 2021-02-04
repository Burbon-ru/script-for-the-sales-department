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

        <button
            v-if="questions.length > 1"
            @click="back"
            type="button"
            class="btn btn-warning"
        >
            Назад
        </button>

        <favorites-scripts
            @selectNextScript="selectNextScript"
        />
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';

    import discussion from './../components/RunScript/discussion';
    import FavoritesScripts from './../components/RunScript/favorites_scripts';
    import SelectAnswer from './../components/RunScript/selectAnswer';

    import { getAnswerById, getQuestionById } from './../functions/getStuffById';

    export default {
        name: "RunScriptNew",

        components: {
            FavoritesScripts,
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

            const { data } = await this.getFirstQuestion(this.currentScriptId);

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
             * При переключении на другой скрипт из избранных
             */
            async selectNextScript (script) {
                const { data } = await this.getFirstQuestion(script.id);

                if (data.length) {
                    this.questions.push(data[0]);
                    this.answers.push({name: 'Переключение на скрипт с именем "' + script.name + '"'});

                    this.currentQuestionId = data[0].id;
                    this.$store.dispatch('setCurrentScriptId', data[0].id);
                } else {
                    alert('В редактировании скрипта не указан начальный вопрос');
                }
            },

            /**
             * Получить первый вопрос
             *
             * @returns {*}
             */
            getFirstQuestion (id) {
                return axios.get('/api/question/getFirstQuestion/?scriptId=' + id);
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
