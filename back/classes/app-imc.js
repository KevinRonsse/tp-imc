import {readFileSync} from "fs"

export class AppImc {
    constructor() {
        this.users = []
        this.imcList = []
        this.userfile = "./data/user.json"
        this.imcfile = "./data/imc.json"
    }

//     // Création d'une nouvelle annonce
//     createAdd(title, content, pictures) {
//         const newAdd = new Classified(++this.count, title, content,pictures)
//         this.adds.push(newAdd)
//         this.write()
//     }

//     // Méthode pour récupérer une annonce par id
//     findAddById(id) {
//         return this.adds.find(a => a.id == id)
//     }

//     //Methode pour rechercher des annonces par titre
//     searchAddsByTitle(search) {
//         return this.adds.filter(a => a.title.includes(search))
//     }
}
