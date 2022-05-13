import { User } from "../classes/user.js"
import { BaseService } from "./baseService.js"

export class UserService extends BaseService {
    constructor() {
        super("data/user.json")
        
    }

    addUser() {
        const user = new User()
        this.data.push(user)
        this.writeToJson()
    }

    getUserByName(name) {
        return this.data.find(u =>u.name == name)
    }

}