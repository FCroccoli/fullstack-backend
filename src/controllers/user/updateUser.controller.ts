import { Request, Response } from "express";
import { updateUserService } from "../../services/user/updateUser.service";

export const updateUserController = async (req: Request, res: Response) => {
  const updatedUser = await updateUserService(req.email, req.body);

  return res.status(200).json(updatedUser);
};
