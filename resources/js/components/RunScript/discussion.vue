<template>
    <div>
        <div
            class="discussion"
            v-for="(question, key) in questionWithReplace"
            :key="key"
        >
            <div
                class="bubble sender first"
                v-html="question.text"
            ></div>

            <div
                v-if="answers[key]"
                class="bubble recipient first"
                v-html="answers[key].name"
            ></div>
        </div>

        <div
            class="variables"
            v-for="variable in variablesInCurrentScript"
            :key="variable.id"
        >
            <div class="input-group-sm">
                <label
                    :for="variable.code"
                >
                    {{ variable.name }}
                </label>

                <input
                    :id="variable.code"
                    type="text"
                    @input="changeVariableValue(variable.code, $event.target.value)"
                />
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';

    export default {
        name: "discussion",

        props: ['questions', 'answers'],

        data: () => ({

            /**
             * Map: код => значение переменных для скрипта
             */
            replaceMap: new Map(),

            questionWithReplace: []
        }),

        async mounted () {
            this.$store.dispatch('setCurrentScriptId', this.$route.params.id);
            await this.$store.dispatch('setVariablesInCurrentScript');

            for (const variable of this.variablesInCurrentScript) {
                this.replaceMap.set(variable.code, '');
            }
        },

        watch: {

            /**
             * Это когда из родителя придут данные о вопросах
             * (это почти как вызов в mounted)
             */
            questions (val) {
                this.questionWithReplace = this.getQuestionWithReplace();
            }
        },

        computed: {
            ...mapGetters([
                'currentScriptId',
                'variablesInCurrentScript'
            ])
        },

        methods: {
            ...mapActions([
                'setVariablesInCurrentScript'
            ]),

            /**
             * Событие изменения значения переменной.
             */
            changeVariableValue (code, inputVal) {
                for (let [key, val] of this.replaceMap) {
                    if (key == code) {
                        this.replaceMap.set(code, inputVal);
                    }
                }

                this.questionWithReplace = this.getQuestionWithReplace();
            },

            /**
             * Заменяет в массиве this.questions то, что является переменной значением из input
             *
             * @returns {[]}
             */
            getQuestionWithReplace () {
                const newAr = [];
                let comp = {};

                for (const question of this.questions) {
                    for (let [code, val] of this.replaceMap) {
                        if (val) {
                            comp.text = question.text.replace(
                                new RegExp('{' + code + '}', 'gi'),
                                '{' + code + '}' + val
                            );
                        } else {
                            comp.text = question.text;
                        }
                    }

                    newAr.push(comp);
                }

                return newAr;
            }
        }
    }
</script>

<style scoped>
    .discussion {
        display: flex;
        flex-direction: column;
    }

    .discussion > .bubble {
        border-radius: 1em;
        padding: 0.25em 0.75em;
        margin: 1.0625em;
        max-width: 470px;
        min-width: 470px;
    }

    .discussion > .bubble.sender {
        align-self: flex-start;
        background-color: cornflowerblue;
        color: #fff;
    }

    .sender ol {
        text-align: left;
    }

    .discussion > .bubble.recipient {
        align-self: flex-end;
        background-color: #efefef;
    }

    .discussion > .bubble.sender.first { border-bottom-left-radius: 0.1em; }
    .discussion > .bubble.sender.last { border-top-left-radius: 0.1em; }
    .discussion > .bubble.sender.middle {
        border-bottom-left-radius: 0.1em;
        border-top-left-radius: 0.1em;
    }

    .discussion > .bubble.recipient.first { border-bottom-right-radius: 0.1em; }
    .discussion > .bubble.recipient.last { border-top-right-radius: 0.1em; }
    .discussion > .bubble.recipient.middle {
        border-bottom-right-radius: 0.1em;
        border-top-right-radius: 0.1em;
    }
</style>
