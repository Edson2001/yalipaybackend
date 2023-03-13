import { container } from 'tsyringe';
import { IUsersRepository } from '../../modules/users/repositories/IUsersRepository';
import { IUsersRepositoryImpl } from '../../modules/users/repositories/implementations/IUsersRepositoryImpl.1';
import { IAccountsRepository } from '../../modules/accounts/repositories/IAccountsRepository';
import { IAccountsRepositoryImpl } from '../../modules/accounts/repositories/implementations/IAccountsRepositoryImpl';

container.registerSingleton<IUsersRepository>(
    'IUsersRepositoryImpl',
    IUsersRepositoryImpl,
);

container.registerSingleton<IAccountsRepository>(
    'IAccountsRepositoryImpl',
    IAccountsRepositoryImpl,
);