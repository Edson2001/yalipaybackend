interface IUsersProps  {
    name: string;
    email: string;
    password: string;
    avatar: string;
    mobileNumber: number;
}

interface IUpdateUsersProps {
    userID: string;
    name?: string;
    email?: string;
    password?: string;
    avatar?: string;
    mobileNumber?: number;
}

interface IUserProps {
    userID: string;
}

export { IUsersProps, IUpdateUsersProps, IUserProps };