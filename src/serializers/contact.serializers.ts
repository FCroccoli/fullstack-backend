import * as yup from "yup";
import {
  IContact,
  IContactRequest,
  IContactUpdate,
} from "../interfaces/contact";

export const contactUpdateSerializer: yup.Schema<IContactUpdate> = yup
  .object()
  .shape({
    first_name: yup.string().notRequired(),
    last_name: yup.string().notRequired(),
    email: yup.string().email().notRequired(),
    telephone: yup.string().notRequired(),
  });

export const contactCreateSerializer: yup.Schema<IContactRequest> = yup
  .object()
  .shape({
    first_name: yup.string().required(),
    last_name: yup.string().required(),
    email: yup.string().email().required(),
    telephone: yup.string().required(),
  });

export const contactSerializer: yup.Schema<IContact> = yup.object().shape({
  id: yup.string().required(),
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  email: yup.string().email().required(),
  telephone: yup.string().required(),
  createdAt: yup.date().required(),
});
