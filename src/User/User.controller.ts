import { User } from "./User.type";
import UserSerice from "./User.service";
import { Request, Response } from "express";
import Account from "../Accout/Account.controller";
function User(){
    
    const userInstance = UserSerice()
    const account = Account()
    async function list(request: Request, response: Response){
        const user = await userInstance.list()
        return response.json(user)
    }

    async function create(request:Request, response:Response){

        const data:User = request.body

        if(!data.name || !data.email || !data.password || !data.mobileNumber){
            return {
                message: "preencha todos os dados"
            }
        }

        const result = await userInstance.create(data)

        if(result){
            try{
                const iban = 0e0500000+Math.random()
                await account.create({
                    balance: 0,
                    IBAN: iban,
                    userID: result.userID
                })
            }catch(e){
                console.log(e)
            }
        }
        
        return response.json(result)

    }

    function remove(id: string){}

    async function find(req: Request, res:Response){
        const userID = req.params.id
        try{
            const result = await userInstance.find(userID)
            return res.json(result)
        }catch(e){
            return res.json({
                error: e
            })
        }
    }

    function update(id: string, body: User){}

    return {
        list, 
        create,
        remove,
        find,
        update
    }
}
export default User