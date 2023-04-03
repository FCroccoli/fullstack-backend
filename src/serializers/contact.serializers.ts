import * as yup from "yup";
import { IContactRequest, IContactUpdate } from "../interfaces/contact";

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
