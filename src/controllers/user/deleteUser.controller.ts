import { deleteUserService } from "../../services/user/deleteUser.service";
import { Request, Response } from "express";

export const deleteUserController = async (req: Request, res: Response) => {
  await deleteUserService(req.email);

  return res.status(204).json({ message: "Usuario deletado com sucesso" });
};
