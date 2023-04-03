import { Request, Response } from "express";
import { updateContactService } from "../../services/contact/updateContact.servce";

export const updateContactController = async (req: Request, res: Response) => {
  const updatedContact = await updateContactService(req.foundContact, req.body);

  return res.status(201).json(updatedContact);
};
