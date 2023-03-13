import { Account } from "@prisma/client";

export abstract class IAccountsRepository {
    abstract create({ userID, iban, balance}: ICreateAccountProps): Promise<Account>;
}