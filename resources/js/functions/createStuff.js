import axios from "axios";

export function createAnswer (payload) {
    return axios.post('/api/answer/create', payload);
}
