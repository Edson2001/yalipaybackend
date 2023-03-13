import { Account, PrismaClient } from "@prisma/client";
import { IAccountsRepository } from "../IAccountsRepository";

export class IAccountsRepositoryImpl implements IAccountsRepository {
    private _prisma: PrismaClient;

    async create({ userID, iban, balance }: ICreateAccountProps): Promise<Account> {
        const raw = await this._prisma.account.create({
            data: {
                userID, IBAN: iban, balance
            }
        });
        return raw;
    }
}