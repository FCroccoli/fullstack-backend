import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";

export const getContactsService = async (id: string) => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const contacts = await contactRepository
    .createQueryBuilder("contacts")
    .where("contacts.user = :id_user", { id_user: id })
    .getMany();

  return contacts;
};
