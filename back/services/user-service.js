import { User } from "../classes/user.js"
import { BaseService } from "./baseService.js"

export class UserService extends BaseService {
    constructor() {
        super("data/user.json")
        
    }

    

    addCustomer(firstName, lastName, phone) {
        const customer = new Customer(++this.count, firstName, lastName, phone)
        this.data.push(customer)
        this.writeToJson()
    }

    getCustomerById(id) {
        
        return this.data.find(c =>c.id == id)
    }

}