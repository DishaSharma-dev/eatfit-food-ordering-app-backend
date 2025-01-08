import express from "express";
import { createCurrentUser, getCurrentUser, updateCurrentUser } from "../controllers/MyUserController";
import { jwtCheck, jwtParse } from "../middleware/auth";
import { validateMyUserRequest } from "../middleware/validation";
import { Request, Response } from "express";

const router = express.Router();

router.get('/', jwtCheck, jwtParse, async(req, res) => {
    await getCurrentUser(req, res);
});

router.post('/', jwtCheck, async (req, res) => {
    await createCurrentUser(req, res);
});

router.put('/', jwtCheck, jwtParse, validateMyUserRequest, async (req: Request, res: Response) => {
    await updateCurrentUser(req, res);
});

export default router;