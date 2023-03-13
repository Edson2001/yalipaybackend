import { Router } from "express";
import { CreateUserController } from "../useCases/CreateUserController";

const router = Router();

router.post("/users", new CreateUserController().handle);

export default router;