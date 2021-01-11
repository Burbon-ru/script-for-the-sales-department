<template>
    <div>
        <div
            class="discussion"
            v-for="(question, key) in QuestionWithReplace"
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
                    @input="inputTest(variable.code, $event.target.value)"
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
            name: '',

            /**
             * массив названий переменных для скрипта
             */
            replaceArray: []
        }),

        async mounted () {
            this.$store.dispatch('setCurrentScriptId', this.$route.params.id);
            await this.$store.dispatch('setVariablesInCurrentScript');
            this.replaceArray = this.createAndGetReplaceArray();
        },

        computed: {
            ...mapGetters([
                'currentScriptId',
                'variablesInCurrentScript'
            ]),

            /**
             * Заменяет в массиве this.questions то, что является переменной значением из input
             *
             * @returns {*[]}
             * @constructor
             */
            QuestionWithReplace () {
                const newAr = [];
                let comp = {};

                for (const question of this.questions) {
                    for (let i = 0; i < this.replaceArray.length; i++) {
                        comp.text = question.text.replace(
                            new RegExp('{' + this.replaceArray[i] + '}', 'gi'),
                            '{' + this.replaceArray[i] + '}' + this.name
                        );
                    }

                    newAr.push(comp);
                }

                return newAr;
            }
        },

        methods: {
            ...mapActions([
                'setVariablesInCurrentScript'
            ]),

            /**
             * тестирую @инпут
             *
             * буду брать значение и менять
             */
            inputTest (code, eventVal) {
                console.log(code);
                console.log(eventVal);
            },

            /**
             * создает и возвращает массив с именами переменных
             */
            createAndGetReplaceArray () {
                const replaceArray = [];

                for (const question of this.variablesInCurrentScript) {
                    replaceArray.push(question.name);
                }

                return replaceArray;
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
