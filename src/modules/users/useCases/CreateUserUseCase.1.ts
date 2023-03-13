import { inject, injectable } from "tsyringe";
import bcrypt from 'bcrypt';
import { IUsersProps } from "../http/types";
import { AppErrors } from "../../../shared/errors/AppError";
import { messages } from "../../../shared/errors/errorsMessages";
import { EmailValidator, createIban } from "../../../helpers/functions";
import { IAccountsRepository } from "../../accounts/repositories/IAccountsRepository";
import { IUsersRepository } from "../repositories/IUsersRepository";


@injectable()
export class CreateUserUseCase {
    constructor(
        @inject("IUsersRepositoryImpl")
        private _repository: IUsersRepository,
        @inject('IAccountsRepositoryImpl')
        private _aRepository: IAccountsRepository
    ) { }
    async execute({ name, email, password, avatar, mobileNumber }: IUsersProps) {
        const usersExists = await this._repository.findByEmail(email);
        if (usersExists) {
            throw new AppErrors(messages.usersAlreadyRegistered, 400);
        };

        if (!EmailValidator(email)) {
            throw new AppErrors(messages.invalidEmail, 400);
        };

        const salt = await bcrypt.genSalt(12);
        const hash = await bcrypt.hash(password, salt);

        const user = await this._repository.create({
            name, email, password: hash, avatar, mobileNumber
        });

        if (!user) {
            throw new AppErrors(messages.createUserFailed, 400);
        };

        // creating a account
        const account = await this._aRepository.create({
            userID: user.userID,
            iban: createIban(),
            balance: 0,
        });

        return {
            user,
            defaultAcount: account,
        };

    }
}
