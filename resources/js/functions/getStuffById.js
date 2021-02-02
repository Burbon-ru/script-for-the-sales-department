import axios from "axios";

export function getScriptById (id) {
    return axios.get('/api/script/getScriptById/?id=' + id);
}

export function getQuestionById (id) {
    return axios.get('/api/question/getQuestionById/?id=' + id);
}

export function getAnswerById (id) {
    return axios.get('/api/answer/getAnswerById/?id=' + id);
}

export function getAnswerStatusById (id) {
    return axios.get('/api/status/getStatusById/?id=' + id);
}

export async function getAnswersOfQuestionById (id) {
    try {
        const { data } = await axios.get('/api/answer/getAnswersOfQuestionById/?id=' + id);

        return data;
    } catch (err) {
        console.error(err);
        return err;
    }
}
