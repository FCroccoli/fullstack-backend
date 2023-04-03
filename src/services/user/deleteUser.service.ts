import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";

export const deleteUserService = async (email: string) => {
  const userRepo = AppDataSource.getRepository(User);

  const userData = await userRepo.findOneBy({ email: email });

  const deletedUser = userRepo.create({
    ...userData,
    isActive: false,
  });

  await userRepo.save(deletedUser);

  return;
};
