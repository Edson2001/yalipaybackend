import prisma from "../config/Prisma";
import accountType from "./Account.type"

export default function Account(){
    async function create(data: accountType){

        const result = await prisma.account.create({
            data: data
        })

        return result

    }
    async function find(accountID: string){

        const result = await prisma.account.findUnique({
            where:{
                accountID: accountID
            }
        })

        return result

    }
    return {create, find}
}