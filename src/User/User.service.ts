import { User } from "./User.type";
import prisma from "../config/Prisma";
function User(){

    async function list(){

        const result = await prisma.user.findMany()
        console.log(result)
        if(result){
            return result
        }

        return []
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