
export default {

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
     * массив переменных в текущем скрипте
     */
    variablesInCurrentScript: [],

    /**
     * массив значений переменных в текущем запущенном скрипте
     */
    variableValuesInRunningScript: []

};
