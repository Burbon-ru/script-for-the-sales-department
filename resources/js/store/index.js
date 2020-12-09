import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        /**
         * массив всех скриптов
         */
        scripts: [],

        /**
         * id текущего скрипта (из роутинга)
         */
        currentScriptId: 0,

        /**
         * массив из полных объектов вопросов в текущем скрипте
         */
        questionsInCurrentScript: [],

        /**
         * массив всех статусов ответов
         */
        answerStatuses: [],

        /**
         * массив всех переменных
         * todo: он не нужен
         */
        variables: [],

        /**
         * массив переменных в текущем скрипте
         */
        variablesInCurrentScript: [],

        /**
         * массив значений переменных в текущем запущенном скрипте
         */
        variableValuesInRunningScript: []
    },
    getters: {
        /**
         * Массив всех скриптов
         *
         * @param state
         * @returns {[]|*[]|HTMLCollectionOf<HTMLScriptElement>}
         */
        scriptsList (state) {
            return state.scripts;
        },

        /**
         * Id текущего скрипта
         *
         * @param state
         * @returns {number}
         */
        currentScriptId (state) {
            return state.currentScriptId;
        },

        /**
         * Вопросы в текущем скрипте
         *
         * @param state
         * @returns {Array}
         */
        questionsInCurrentScript (state) {
            return state.questionsInCurrentScript;
        },

        /**
         * Статусы ответов
         *
         * @param state
         * @returns {[]|*[]}
         */
        answerStatusesList (state) {
            return state.answerStatuses;
        },

        /**
         * Переменные в текущем скрипте
         *
         * @param state
         * @returns {any}
         */
        variablesInCurrentScript (state) {
            return state.variablesInCurrentScript;
        },

        /**
         * Значения переменных в текущем запущенном скрипте
         *
         * @param state
         * @returns {[]|*[]}
         */
        valuesOfVariableInRunningScript (state) {
            return state.variableValuesInRunningScript;
        }
    },
    mutations: {
        /**
         * Добавить все скрипты
         *
         * @param state
         * @param scripts
         */
        setScriptsList (state, scripts) {
            state.scripts = scripts;
        },

        /**
         * Добавить созданный скрипт
         *
         * @param state
         * @param script
         */
        addItemScripts (state, script) {
            state.scripts.push(script);
        },

        /**
         * Добавить все статусы ответов
         *
         * @param state
         * @param answerStatuses
         */
        setAnswerStatuses (state, answerStatuses) {
            state.answerStatuses = answerStatuses;
        },

        /**
         * Добавить статус ответа
         *
         * @param state
         * @param status
         */
        addAnswerStatus (state, status) {
            state.answerStatuses.push(status);
        },

        /**
         * Установить текущей id скрипта
         *
         * @param state
         * @param id
         */
        setCurrentScriptId (state, id) {
            state.currentScriptId = id;
        },

        /**
         * Установить все вопросы для текущего скрипта
         *
         * @param state
         * @param questions
         */
        setQuestionsInCurrentScriptInState (state, questions) {
            state.questionsInCurrentScript = questions;
        },

        /**
         * Добавить вопрос в список вопросов текущего скрипта
         *
         * @param state
         * @param question
         */
        addQuestionInCurrentScriptInState (state, question) {
            state.questionsInCurrentScript.push(question);
        },

        /**
         * Удалить вопрос из текущего скрипта
         *
         * @param state
         * @param questionId
         */
        deleteQuestionInCurrentScriptInState (state, questionId) {
            state.questionsInCurrentScript = state.questionsInCurrentScript.filter(el => el.id != questionId);
        },

        // setVariablesInCurrentScriptInState (state, variables) {
        //     state.variablesInCurrentScript = variables;
        // },
        // setValueOfVariableInRunningScriptInState (state, variables) {
        //     state.variableValuesInRunningScript = variables;
        // }
    },
    actions: {
        /* creators */
        async createScript (context, payload) {
            try {
                const { status, data } = await axios.post('/api/script/create', payload);

                if (201 == status) {
                    context.commit('addItemScripts', data);

                    return true;
                }

                return false;
            } catch (err) {
                console.error(error);
                return error;
            }
        },
        async createQuestion (context, payload) {
            try {
                const { status, data } = await axios.post('/api/question/create', payload);

                if (201 == status) {
                    context.commit('addItemScripts', data);
                    context.commit('addQuestionInCurrentScriptInState', data);

                    return true;
                }

                return false;
            } catch (err) {
                console.error(error);
                return error;
            }
        },

        /* getters */
        async getScripts (context) {
            try {
                const { data } = await axios.get('/api/script');
                context.commit('setScriptsList', data);
            } catch (error) {
                console.error(error);
                return error;
            }
        },
        async getAnswerStatuses (context) {
            try {
                const { data } = await axios.get('/api/status');
                context.commit('setAnswerStatuses', data);
            } catch (error) {
                console.error(error);
                return error;
            }
        },

        /* updaters */
        // todo: сделать еще и комит
        async updateQuestion (context, { id, data }) {
            return axios.patch('/api/question/update/?id=' + id, data);
        },

        /* delete */
        async deleteQuestion (context, id) {
            const { status } = await axios.delete('/api/question/delete/?id=' + id);

            if (200 == status) {
                context.commit('deleteQuestionInCurrentScriptInState', id);
            }
        },

        /* setters */
        setCurrentScriptId (context, id) {
            context.commit('setCurrentScriptId', id);
        },
        async setQuestionsInCurrentScript (context) {
            const { data } = await axios.get('/api/question/getQuestionsByScriptId/?id=' + this.getters.currentScriptId);
            context.commit('setQuestionsInCurrentScriptInState', data);
        }
    }
});
