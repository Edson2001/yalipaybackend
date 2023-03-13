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

    function remove(userID: string){}

    async function find(userID: string){

        const result = await prisma.user.findUnique({
            where:{
                userID
            }
        })

        return result

    }

    function update(userID: string, body: User){}

    return {
        list, 
        create,
        remove,
        find,
        update
    }
}
export default User