import { User } from "../classes/user.js"
import { BaseService } from "./base-service.js"

export class UserService extends BaseService {
    constructor() {
        super("data/user.json")

    }

    checkNewUser(firstName, lastName, password) {
        const existLastName = this.data.filter(d => d.lastName === lastName);
        if (existLastName.length > 0) {
            if (existLastName.find(f => f.firstName === firstName))
                return { message: 'user already exists', status: false };
            if (existLastName.find(f => f.password === password))
                return { message: 'password already in use', status: false };
        }
        return { message: 'new user OK', status: true }
    }

    addUser(password, firstName, lastName, dob, height, weight) {
        const userCreation = this.checkNewUser(firstName, lastName,password);
        if (userCreation.status) {
            const user = new User(++this.count, password, firstName, lastName, dob, height, weight)
            this.data.push(user)
            this.writeToJson()
        }
        return userCreation
    }

    getUserById(id) {
        return this.data.find(u => u.id == id)
    }

    findUser(login) {
        let message = "user unknown";
        let status = false;
        let user = []
        const foundUsers = this.data.filter(u => u.lastName == login.lastName)
        if (foundUsers.length != 0) {
            foundUsers.forEach(u => {
                if (u.password === login.password) {
                    user.push(u);
                    status = true;
                    message = "password check OK"
                    return
                }
            });
            message = "incorrect password"
        }
        return { status: status, message: message, data: user }
    }
}