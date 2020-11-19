<template>
    <div class="select-answer">
        <v-select
            :options="answersSelect"
            @input="selectAnswer"
        />
    </div>
</template>

<script>
    import { getAnswersOfQuestionById, getAnswerById } from './../../functions/getStuffById.js';

    import vSelect from "vue-select";
    import "vue-select/dist/vue-select.css";

    export default {
        name: "selectAnswer",
        props: ['currentQuestion'],
        components: {
            vSelect
        },
        data: () => ({
            answers: [],
            answersSelect: []
        }),
        async mounted () {
            this.answers = await getAnswersOfQuestionById(this.currentQuestion);

            for (let answer of this.answers) {
                this.answersSelect.push({
                    label: answer.name,
                    id: answer.id,
                    next: answer.next_question_id
                });
            }
        },
        methods: {
            selectAnswer (e) {
                this.$emit('next-answer', e);
            }
        }
    }
</script>

<style>
    .select-answer {
        flex: 0 0 auto;
    }
</style>
