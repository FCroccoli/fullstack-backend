import { Request, Response } from "express";
import { getContactsService } from "../../services/contact/getContacts.service";

export const getContactsController = async (req: Request, res: Response) => {
  const posts = await getContactsService(req.id);

  return res.status(200).json(posts);
};
