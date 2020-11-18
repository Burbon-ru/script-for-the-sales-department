import axios from "axios";

export function deleteAnswer (id) {
    return axios.delete('/api/answer/delete/?id=' + id);
}
