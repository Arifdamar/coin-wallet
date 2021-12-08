import express from "express";
import { UserCryptoController } from "../../controllers/userCrypto";
import { Auth } from "../../middlewares/auth";

const router = express.Router();
const walletController = new UserCryptoController();

router.patch("/:userCryptoId", Auth.authenticate, walletController.Update);
router.delete("/:userCryptoId", Auth.authenticate, walletController.Delete);

export default router;
