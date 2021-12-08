import express from "express";
import { UserCryptoController } from "../../controllers/userCrypto";
import { Auth } from "../../middlewares/auth";

const router = express.Router();
const userCryptoController = new UserCryptoController();

router.post("/", Auth.authenticate, userCryptoController.Add);
router.patch("/:userCryptoId", Auth.authenticate, userCryptoController.Update);
router.delete("/:userCryptoId", Auth.authenticate, userCryptoController.Delete);

export default router;
