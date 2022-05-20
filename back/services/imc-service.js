import { Imc } from "../classes/imc.js"
import { BaseService } from "./baseService.js"

export class ImcService extends BaseService {
    constructor() {
        super("data/imc.json")
    }

    addImc(idUser, date, dateWeight) {
        const newImc = new Imc(idUser, date, dateWeight)
        this.data.push(newImc)
        this.writeToJson()
    }

    getImcByUserId(idUser) {
        return this.data.find(i => i.idUser == idUser)
    }
}