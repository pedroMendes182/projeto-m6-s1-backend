import AppDataSource from "../../data-source";
import { User } from "../../entities/users.entity";

const softDeleteUserService = async (id: string) => {
  const usersRepository = AppDataSource.getRepository(User);

  const finduser = await usersRepository.findOneBy({
    id: id,
  });

  finduser.isActive = false;
  await usersRepository.save(finduser);

  return {};
};

export default softDeleteUserService;
