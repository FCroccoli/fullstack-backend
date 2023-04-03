import { Request, Response } from "express";
import { createContactService } from "../../services/contact/createContact.service";

export const createContactController = async (req: Request, res: Response) => {
  const newPost = await createContactService(req.body, req.email);

  return res.status(201).json(newPost);
};
