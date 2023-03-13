import { Request, Response } from "express";
import AccountType from "./Account.type";
import AccountService from "./Account.service"

export default function Account(){

    const accountInstance =  AccountService()

    async function create(data: AccountType){
       // console.log(data)
        try{
            //const data: AccountType = req.body

            if(data){
                console.log(data)
                const result = await accountInstance.create(data)
                return result
            }

        }catch(e){
            return {
                error: e
            }
        }
    }

    async function find(req: Request, res: Response){
      try{
        
        const accountID = req.params.id
        const account = await accountInstance.find(accountID)
        return res.json(account)
      }catch(e){
        return res.json({
            error: e
        })
      }
    }

    return {create, find}
}