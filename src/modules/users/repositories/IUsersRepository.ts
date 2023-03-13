import { User } from "@prisma/client";
import { IUpdateUsersProps, IUsersProps } from "../http/types";

export abstract class IUsersRepository {
    abstract create(user: IUsersProps): Promise<User>;
    abstract index(): Promise<User[]>;
    abstract show({ userID }: { userID: string}): Promise<User | null>;
    abstract findByEmail(email: string): Promise<User | null>;
    abstract update(props: IUpdateUsersProps): Promise<User>;
    abstract remove(userID: string): Promise<void>;
}