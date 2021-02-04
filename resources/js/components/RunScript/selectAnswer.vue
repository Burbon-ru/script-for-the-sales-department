<template>
    <div class="select-answer">
        <v-select
            v-if="answersSelect.length"
            :options="answersSelect"
            @input="selectAnswer"
        />
    </div>
</template>

<script>
    import { getAnswersOfQuestionById } from './../../functions/getStuffById.js';

    import vSelect from "vue-select";
    import "vue-select/dist/vue-select.css";

    export default {
        name: "selectAnswer",

        props: ['currentQuestionId'],

        components: {
            vSelect
        },

        data: () => ({
            answers: [],
            answersSelect: []
        }),

        watch: {
            async currentQuestionId (val) {
                this.answersSelect = [];
                this.answers = await getAnswersOfQuestionById(val);

                for (let answer of this.answers) {
                    this.answersSelect.push({
                        label: answer.name,
                        id: answer.id,
                        next: answer.next_question_id
                    });
                }
            }
        },

        methods: {
            selectAnswer (e) {
                this.$emit('next-answer', e.id);
            }
        }
    }
</script>

<style>
    .select-answer {
        flex: 0 0 auto;
    }
</style>
