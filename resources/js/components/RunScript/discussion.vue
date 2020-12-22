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

        <div class="input-group-sm">
            <label
                for="name"
            >
                Введите имя
            </label>

            <input
                id="name"
                type="text"
                v-model="name"
            />
        </div>
    </div>
</template>

<script>
    export default {
        name: "discussion",
        props: ['questions', 'answers'],
        data: () => ({
            name: '',

            /**
             * todo: replaceArray - это массив переменных для скрипта
             */
            replaceArray: ['Имя:']
        }),
        computed: {
            /**
             * Заменяет в массиве this.questions то, что является переменной
             * значением из input
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
