import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { User } from "../../entities/user.entity";
import { IContactRequest } from "../../interfaces/contact";
import { contactCreateSerializer } from "../../serializers/contact.serializers";

export const createContactService = async (
  contactData: IContactRequest,
  email: string
) => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const userRepository = AppDataSource.getRepository(User);

  const userData = await userRepository.findOneBy({
    email: email,
  });

  const contact = {
    ...contactData,
    user: userData as User,
  };

  const createContact = contactRepository.create(contact);
  const newContact = await contactRepository.save(createContact);

  const validatedContact = await contactCreateSerializer.validate(newContact, {
    stripUnknown: true,
    abortEarly: true,
  });

  return validatedContact;
};
