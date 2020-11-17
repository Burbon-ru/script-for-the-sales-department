import axios from "axios";

export function getQuestionById (id) {
    return axios.get('/api/question/getQuestionById/?id=' + id);
}
