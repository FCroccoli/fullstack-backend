import * as yup from "yup";
import { IUserRequest, IUser, IUserUpdate } from "../interfaces/user";

export const userCreateSerializer: yup.Schema<IUserRequest> = yup
  .object()
  .shape({
    name: yup.string().required(),
    last_name: yup.string().required(),
    email: yup.string().email().required(),
    telephone: yup.string().required(),
    password: yup.string().required(),
  });

export const userSerializer: yup.Schema<IUser> = yup.object().shape({
  id: yup.string().required(),
  name: yup.string().required(),
  last_name: yup.string().required(),
  email: yup.string().email().required(),
  telephone: yup.string().required(),
  createdAt: yup.date().required(),
});

export const userUpdateSerializer: yup.Schema<IUserUpdate> = yup
  .object()
  .shape({
    name: yup.string().notRequired(),
    last_name: yup.string().notRequired(),
    email: yup.string().email().notRequired(),
    telephone: yup.string().notRequired(),
    password: yup.string().notRequired(),
  });
