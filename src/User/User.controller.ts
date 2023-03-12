import { User } from "./User.type";
import UserSerice from "./User.service";
import { Request, Response } from "express";
function User(){
    
    const userInstance = UserSerice()
    
    async function list(req: Request, response: Response){
        const user = await userInstance.list()
        return response.json(user)
    }

    function create(data: User){}

    function remove(id: string){}

    function find(id: string){}

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