import express from "express"
import { BaseService } from "./services/base-service.js"
import { UserService, UserService } from "./services/user-service.js"
import { ImcService } from "./services/imc-service.js"

const appImc = express();

appImc.use(express.json());

// services creation
const userService = new UserService();
const imcService = new ImcService();
const baseService = new BaseService();


//EndPoints

// user registration
appImc.post('/register', (req, res) => {
    const {password, firstName, lastName, dob, height, weight} = req.body
    userService.addUser(title, price, stock)
    res.json({message: "produit ajouté"})
})

// user login




// get User by name
app.get('/produits/:id', (req, res) => {
    const product = productService.getProductById(req.params.id)
    if(product != undefined) {
        res.json(product)
    }
    else {
        res.json({message: "aucun produit avec cet id"})
    }
})

//1-Création d'un client
app.post('/clients', (req, res) => {
    const {firstName, lastName, phone} = req.body
    customerService.addCustomer(firstName, lastName, phone)
    res.json({message: "client ajouté"})
})

//2- Récupération de la liste des clients
app.get('/clients', (req, res) => {
    res.json(customerService.getAllCustomers())
})

//3- Récupération d'un client
app.get('/clients/:id', (req, res) => {
    const customer = customerService.getCustomerById(req.params.id)
    if(customer != undefined) {
        res.json(customer)
    }
    else {
        res.json({mesasge:"aucun client avec cet id"})
    }
})

//1- Création d'un commande 
app.post('/commandes', (req, res) => {
    const {customerId, products} = req.body
    if(orderService.addOrder(customerId, products)) {
        res.json({message: "commande ajoutée"})
    }
    else {
        res.json({message: "erreur création de commande"})
    }
})

//2- Récupération de la liste des commandes
app.get('/commandes', (req, res) => {
    res.json(orderService.getAllOrders())
})

//3- Récupération d'un commande par son id
app.get('/commandes/:id', (req, res) => {
    const order = orderService.getOrderById(req.params.id)
    if(order != undefined) {
        res.json(order)
    }else {
        res.json({message: "aucune commande avec cet id"})
    }
})



app.listen(2000,() => {
    productService.readFromJson()
    customerService.readFromJson()
    orderService.readFromJson()
})