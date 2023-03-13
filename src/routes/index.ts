import { Router } from "express";
import usersRoutes from '../modules/users/http/users.routes';
import baseRoute from './baseRoute';

const routes = Router()

//route.post("/account", account.create)
routes.use(baseRoute);
routes.use(usersRoutes);

export default routes;