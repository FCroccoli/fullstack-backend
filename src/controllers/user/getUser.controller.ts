import { Request, Response } from "express";
import { getUserService } from "../../services/user/getUser.service";

export const getUserController = async (req: Request, res: Response) => {
  const userData = await getUserService(req.email);

  res.status(200).json(userData);
};
