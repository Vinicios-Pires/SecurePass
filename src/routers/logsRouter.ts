import { Router } from "express";

const logsRouter = Router();

logsRouter.post("/notes");
logsRouter.get("/notes");

logsRouter.post("/card");
logsRouter.get("/card");

logsRouter.post("/wifi");
logsRouter.get("/wifi");

logsRouter.get("/logs");

export default logsRouter;
