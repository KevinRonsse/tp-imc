import express from "express";
import cors from "cors";
import { BaseService } from "./services/base-service.js";
import { UserService } from "./services/user-service.js";
import { ImcService } from "./services/imc-service.js";

const appImc = express();

appImc.use(express.json());

appImc.use(cors({origin: "*"}));


// services creation
const userService = new UserService();
const imcService = new ImcService();
const baseService = new BaseService();


//EndPoints
// user registration
appImc.post('/register', (req, res) => {
    const { password, firstName, lastName, dob, height, weight } = req.body;
    if (password != undefined && firstName != undefined && lastName != undefined
        && dob != undefined && height != undefined && weight != undefined) {
        const addResult = userService.addUser(password, firstName, lastName, dob, height, weight);
        res.json(addResult);
    }
    else {
        res.json({ message: "missing user informations" });
    }
})


// get User by id
appImc.get('/userid/:id', (req, res) => {
    const user = userService.getUserById(req.params.id)
    if (user != undefined) {
        res.json(user)
    }
    else {
        res.json({ message: "unknown user id" })
    }
})


// user login
appImc.post('/login', (req, res) => {
    const user = userService.findUser(req.body)
    if (user.status) {
        res.json(user.data)
    }
    else {
        res.json(user.message)
    }
})


// get all imc by id User
appImc.get('/imc/:id', (req, res) => {
    const imc = imcService.getImcByUserId(req.params.id)
    if (imc != undefined) {
        res.json(imc)
    }
    else {
        res.json({ message: "no data available" })
    }
})


// Add new imc data
appImc.post('/imc', (req, res) => {
    const {idUser, date, dateWeight} = req.body
    const newImc = imcService.addImc(idUser, date, dateWeight)
    res.json(newImc.message)
})


appImc.listen(5000, () => {
    console.log('Listening on port 5000...');
    userService.readFromJson();
    imcService.readFromJson();
})