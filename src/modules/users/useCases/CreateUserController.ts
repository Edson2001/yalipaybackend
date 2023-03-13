import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase.1";
import { container } from "tsyringe";


export class CreateUserController {
    async handle(req: Request, res: Response) {
        const { name, email, password, avatar, mobileNumber } = req.body;
        const useCase = container.resolve(CreateUserUseCase);

        const raw = await useCase.execute({ name, email, password, avatar, mobileNumber });

        return res.status(200).json({ success: true, data: raw });
    }
}