import axios from 'axios';

const ROOT_URL = 'http://localhost:3001';

export function signinUser({ email, password }) {
    return function(dispatch) {
        axios.post(`${ROOT_URL}/signin`, {email, password});
    }
}