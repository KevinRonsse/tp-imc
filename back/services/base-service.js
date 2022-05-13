import {readFileSync, writeFileSync} from "fs"

export class BaseService {
    constructor(file) {
        this.data = []
        this.file = file
    }

    readFromJson() {
        const dataString = readFileSync(this.file).toString()
        this.data = JSON.parse(dataString)
    }

    writeToJson() {
        writeFileSync(this.file, JSON.stringify(this.data))
    }
}