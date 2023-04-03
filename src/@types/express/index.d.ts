import { Contact } from "../../entities/contact.entity";

declare global {
  namespace Express {
    interface Request {
      email: email;
      id: string;
      foundContact: Contact;
    }
  }
}

export {};
