import { User } from "./User.type";
import prisma from "../config/Prisma";

function User(){

    async function list(){

        const result = await prisma.user.findMany()
        if(result){
            return result
        }
        return []
    }

    async function create(data: User){
        const result = await prisma.user.create({
            data:data
        })
        return result
    }

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