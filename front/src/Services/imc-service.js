import axios from 'axios'

const urlImc = "http://127.0.0.1:5000/imc/"

export const getImcUser = async (id) => {
    console.log("getImcUser", urlImc+(parseInt(id)));
    return await axios.get(urlImc+(parseInt(id)));
}
