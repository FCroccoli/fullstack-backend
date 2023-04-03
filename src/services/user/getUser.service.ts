import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { userSerializer } from "../../serializers/user.serializers";

export const getUserService = async (email: string) => {
  const userRepo = AppDataSource.getRepository(User);

  const userData = await userRepo.findOneBy({ email: email });

  const validatedUser = await userSerializer.validate(userData, {
    stripUnknown: true,
    abortEarly: false,
  });

  return validatedUser;
};
