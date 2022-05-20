import { Imc } from "../classes/imc.js"
import { BaseService } from "./base-service.js"

export class ImcService extends BaseService {
    constructor() {
        super("data/imc.json")
    }

    addImc(idUser, date, dateWeight) {
        let message = 'imc data error'
        const newImc = new Imc(idUser, date, dateWeight)
        if (newImc != undefined){
            this.data.push(newImc)
            this.writeToJson()
            message = 'imc data successfully entered'
        }
        return { message: message}
    }

    getImcByUserId(idUser) {
        return this.data.filter(d => d.idUser == idUser)
    }
}