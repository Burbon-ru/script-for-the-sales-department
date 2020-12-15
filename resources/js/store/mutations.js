export default {
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
};
