import { Request, Response } from "express";
import { database } from "../database";

export class UsersController {
    
    createUser (request: Request, response: Response): Response {

        const { name } = request.body

        if(name.length < 1){
            return response.status(403).json({"message": "Não é possível criar um usuário sem nome"})
        }

        database.push(name)
        return response.status(201).json({"message": `Usuário ${name} criado com sucesso!`})
    }

    showUsers (request: Request, response: Response): Response {
        return response.status(200).json(database)
    }
}