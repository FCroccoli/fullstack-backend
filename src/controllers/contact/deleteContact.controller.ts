import { Request, Response } from "express";
import { deleteContactService } from "../../services/contact/deleteContact.service";

export const deleteContactController = async (req: Request, res: Response) => {
  await deleteContactService(req.foundContact);

  return res.status(204).json({ message: "Contato deletado com sucesso" });
};
