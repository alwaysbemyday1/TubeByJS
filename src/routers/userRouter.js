import express from "express";
import {edit, see, logout, remove, startGithubLogin, finishGithubLogin } from "../Controllers/userController";

const userRouter = express.Router();

userRouter.get("/edit", edit);
userRouter.get("/logout", logout);
userRouter.get("/remove", remove);
userRouter.get("/github/start", startGithubLogin);
userRouter.get("/github/finish", finishGithubLogin);
userRouter.get("/:id(\\d+)", see);

export default userRouter;