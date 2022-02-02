import express from "express";
import authRoutes from "./auth";
import walletRoutes from "./wallet";
import exchangeRoutes from "./exchange";
import userCryptoRoutes from "./userCrypto";
import { SuccessResult } from "../../models/result";

const router = express.Router();
let i: number = 0;

router.get("/", (_req: express.Request, res: express.Response) => {
  return res.status(200).json(new SuccessResult("API is up and running!", null));
});

router.get("/test", (req: express.Request, res: express.Response) => {
  console.log(req.body);
  i++;
  const response = i % 2 === 0 ? 400 : 200;
  console.log(response);
  return res.status(response).json(new SuccessResult("API is up and running!", null));
});

router.get("/redirect", async (req: express.Request, res: express.Response) => {
  console.log("redirect");

  return res.redirect("redirectA");
});

router.get("/redirectA", async (req: express.Request, res: express.Response) => {
  console.log("redirectA");

  return res.redirect("redirectB");
});

router.get("/redirectB", async (req: express.Request, res: express.Response) => {
  console.log("redirectB");

  return res.redirect("redirectC");
});

router.get("/redirectC", async (req: express.Request, res: express.Response) => {
  console.log("redirectC");

  await sleep(10000);

  return res.redirect("redirectD");
});

router.get("/redirectD", async (req: express.Request, res: express.Response) => {
  console.log("redirectD");

  return res.status(200).send();
});

function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

router.use("/auth", authRoutes);
router.use("/wallet", walletRoutes);
router.use("/exchange", exchangeRoutes);
router.use("/userCrypto", userCryptoRoutes);

export default router;
