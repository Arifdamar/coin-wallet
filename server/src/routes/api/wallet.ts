import express from "express";
import { WalletController } from "../../controllers/wallet";
import { Auth } from "../../middlewares/auth";

const router = express.Router();
const walletController = new WalletController();

router.post("/add", Auth.authenticate, walletController.AddCrypto);
router.get("/", Auth.authenticate, walletController.Get);

export default router;
