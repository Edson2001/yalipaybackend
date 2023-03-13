import { PrismaClient, User } from '@prisma/client';
import { IUpdateUsersProps, IUsersProps } from '../../http/types';
import { IUsersRepository } from '../IUsersRepository';


export class IUsersRepositoryImpl implements IUsersRepository {
    private _prisma: PrismaClient; 

    async create(user: IUsersProps): Promise<User> {
        const raw = await this._prisma.user.create({
            data: {
                name: user.name,
                email: user.email,
                password: user.password,
                avatar: user.avatar,
                mobileNumber: user.mobileNumber,
            },
        });
        return raw;
    }
    async index(): Promise<User[]> {
        return this._prisma.user.findMany();
    }
    async show({ userID }: { userID: string; }): Promise<User | null> {
        return this._prisma.user.findUnique({
            where: {
                userID: userID,
            }
        });
    }

    async findByEmail(email: string): Promise<User | null> {
        return this._prisma.user.findUnique({ where: { email: email } });
    }

    update(props: IUpdateUsersProps): Promise<User> {
        return this._prisma.user.update({
            where: { userID: props.userID },
            data: {
                name: props.name,
                email: props.email,
                password: props.password,
                avatar: props.avatar,
                mobileNumber: props.mobileNumber,
            },
        });
    }
    remove(userID: string): Promise<any> {
        return this._prisma.user.delete({ where: { userID: userID } });
    };
}
