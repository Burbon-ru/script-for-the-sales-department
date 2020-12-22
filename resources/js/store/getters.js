
export default {

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

};
