import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { IContactRequest } from "../../interfaces/contact";

export const updateContactService = async (
  contactData: Contact,
  updateData: IContactRequest
) => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const updatedPost = contactRepository.create({
    ...contactData,
    ...updateData,
  });

  const updatedContact = await contactRepository.save(updatedPost);

  return updatedContact;
};
