import axios from 'axios'

const urlLogin = "http://127.0.0.1:5000/login/"

export const userLogin = async () => {
    return await axios.post(urlLogin);
}
