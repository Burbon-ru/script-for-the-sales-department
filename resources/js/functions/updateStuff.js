import axios from "axios";

export function updateAnswer ({id, data}) {
    return axios.patch('/api/answer/update/?id=' + id, data);
}
