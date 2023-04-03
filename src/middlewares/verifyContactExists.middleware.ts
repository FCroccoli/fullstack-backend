import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { Contact } from "../entities/contact.entity";
import { AppError } from "../error/errors";

export const verifyContactExistsMiddleware = async (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const contactQueryBuilder = contactRepository.createQueryBuilder("contact");

  const contact = await contactQueryBuilder
    .leftJoinAndSelect("contact.user", "user")
    .where("contact.id = :id", { id: req.params.id })
    .getOne();

  if (!contact) {
    throw new AppError("Invalid ID", 404);
  }

  req.foundContact = contact;

  return next();
};
