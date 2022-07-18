import { Request } from "express"
import { makeMockResponse } from "../mocks/mockResponse"
import { UsersController } from "./usersController"

describe('usersController', () => {
    const usersController = new UsersController()
    
    const mockRequest = {} as Request
    const mockResponse = makeMockResponse()
    
    it('Deve listar todos os usuários do database', () => {
        usersController.showUsers(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(200)
        expect(mockResponse.state.json).toHaveLength(3)

    })

    it('Deve adicionar um usuário ao database', () => {
        mockRequest.body = {
            name: "New user"
        }

        usersController.createUser(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(201)
        expect(mockResponse.state.json).toMatchObject({"message": `Usuário New user criado com sucesso!`})
    
    })

    it('Não deve criar um novo usuário com o nome nulo', () => {
        mockRequest.body = {
            "name": ""
        }
        
        usersController.createUser(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(403)
        expect(mockResponse.state.json).toMatchObject({"message": "Não é possível criar um usuário sem nome"})
    
    })
})