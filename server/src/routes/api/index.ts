import express from "express";
import { SuccessResult } from "../../models/result";

const router = express.Router();

router.get("/", (_req: express.Request, res: express.Response) => {
  return res.status(200).json(new SuccessResult("API is up and running!", null));
});

export default router;
