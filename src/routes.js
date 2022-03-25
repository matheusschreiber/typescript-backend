import { Router } from "express"

import UserController from "./controllers/UserController"


const routes = Router()


routes.get("/users", UserController.index)
routes.post("/new/user", UserController.store)

export default routes