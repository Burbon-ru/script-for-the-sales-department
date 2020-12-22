import axios from "axios";

export default {

    /**
     * Установить текущий id скрипта
     *
     * @param context
     * @param id
     */
    setCurrentScriptId (context, id) {
        context.commit('setCurrentScriptId', id);
    },

    /**
     * Получить все скрипты
     *
     * @param context
     * @returns {Promise<*>}
     */
    async getScripts (context) {
        try {
            const { data } = await axios.get('/api/script');
            context.commit('setScriptsList', data);
        } catch (error) {
            console.error(error);
            return error;
        }
    },

    /**
     * Создать скрипт
     *
     * @param context
     * @param payload
     * @returns {Promise<boolean|*>}
     */
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

    /**
     * Установить все вопросы для текущего скрипта
     *
     * @param context
     * @returns {Promise<boolean>}
     */
    async setQuestionsInCurrentScript (context) {
        const { data } = await axios.get('/api/question/getQuestionsByScriptId/?id=' + this.getters.currentScriptId);

        context.commit('setQuestionsInCurrentScriptInState', data);

        return true;
    },

    /**
     * Создать вопрос
     *
     * @param context
     * @param payload
     * @returns {Promise<{data: T, status: number}|*>}
     */
    async createQuestion (context, payload) {
        try {
            const { status, data } = await axios.post('/api/question/create', payload);

            if (201 == status) {
                context.commit('addQuestionInCurrentScriptInState', data);
            }

            return { status, data };
        } catch (err) {
            console.error(error);
            return error;
        }
    },

    /**
     * Обновить вопрос
     *
     * @param context
     * @param id
     * @param data
     * @returns {Promise<AxiosResponse<T>>}
     */
    // todo: сделать еще и комит
    async updateQuestion (context, { id, data }) {
        return axios.patch('/api/question/update/?id=' + id, data);
    },

    /**
     * Удалить вопрос
     *
     * @param context
     * @param id
     * @returns {Promise<void>}
     */
    async deleteQuestion (context, id) {
        const { status } = await axios.delete('/api/question/delete/?id=' + id);

        if (200 == status) {
            context.commit('deleteQuestionInCurrentScriptInState', id);
        }
    },

    /**
     * Получить все статусы ответов
     *
     * @param context
     * @returns {Promise<*>}
     */
    async getAnswerStatuses (context) {
        try {
            const { data } = await axios.get('/api/status');
            context.commit('setAnswerStatuses', data);
        } catch (error) {
            console.error(error);
            return error;
        }
    },

    /**
     * Установить все переменные для текущего скрипта
     *
     * @param context
     * @returns {Promise<boolean>}
     */
    async setVariablesInCurrentScript (context) {
        const { data } = await axios.get('/api/variable/getVariablesByScriptId/?id=' + this.getters.currentScriptId);

        context.commit('setVariablesInCurrentScriptInState', data);

        return true;
    },

    /**
     * Создать переменную
     *
     * @param context
     * @param payload
     * @returns {Promise<{data: T, status: number}|*>}
     */
    async createVariable (context, payload) {
        try {
            const { status, data } = await axios.post('/api/variable/create', payload);

            if (201 == status) {
                context.commit('addVariableInCurrentScriptInState', data);
            }

            return { status, data };
        } catch (err) {
            console.error(err);
            return err;
        }
    },

    /**
     * Обновить переменную
     *
     * @param context
     * @param id
     * @param data
     * @returns {Promise<boolean|*>}
     */
    async updateVariable (context, { id, variable }) {
        try {
            const { status, data } = await axios.patch('/api/variable/update/?id=' + id, variable);

            if (200 == status) {
                context.commit('updateVariableInCurrentScriptInState', data);

                return true;
            }

            return false;
        } catch (err) {
            console.error(err);
            return err;
        }
    },

    /**
     * Удалить переменную
     *
     * @param context
     * @param id
     * @returns {Promise<void>}
     */
    async deleteVariable (context, id) {
        const { status } = await axios.delete('/api/variable/delete/?id=' + id);

        if (200 == status) {
            context.commit('deleteVariableInCurrentScriptInState', id);
        }
    },

};
