import { Router } from "express";
import { signinUser, signupUser } from "../controller/user.controller.js";
import { getTodos, updateTodos, userTodos } from "../controller/todo.controller.js";

const router = Router()
router.route("/signup").post(signupUser)
router.route("/signin").post(signinUser)
router.route("/todo").post(userTodos)
router.route("/todos").get(getTodos)
router.route("/todos/:todoId").patch(updateTodos)

export default router