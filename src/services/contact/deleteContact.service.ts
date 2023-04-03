import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";

export const deleteContactService = async (contactData: Contact) => {
  const contactRepository = AppDataSource.getRepository(Contact);

  await contactRepository.remove(contactData);

  return [];
};
