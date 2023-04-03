import { Router } from "express";
import { createUserController } from "../controllers/user/createUser.controller";
import { getUserController } from "../controllers/user/getUser.controller";
import { deleteUserController } from "../controllers/user/deleteUser.controller";
import { validateAuthMiddleware } from "../middlewares/validateAuth.middleware";
import { validateSchemaMiddleware } from "../middlewares/validateSchema.middleware";
import {
  userCreateSerializer,
  userUpdateSerializer,
} from "../serializers/user.serializers";
import { updateUserController } from "../controllers/user/updateUser.controller";
import { verifyUserIsActiveMiddleware } from "../middlewares/verifyUserIsActive.middleware";

const userRoutes = Router();

userRoutes.post(
  "",
  validateSchemaMiddleware(userCreateSerializer),
  createUserController
);

userRoutes.get("", validateAuthMiddleware, getUserController);

userRoutes.delete(
  "",
  validateAuthMiddleware,
  verifyUserIsActiveMiddleware,
  deleteUserController
);

userRoutes.patch(
  "",
  validateAuthMiddleware,
  verifyUserIsActiveMiddleware,
  validateSchemaMiddleware(userUpdateSerializer),
  updateUserController
);

export default userRoutes;
