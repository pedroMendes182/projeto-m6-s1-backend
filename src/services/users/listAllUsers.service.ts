import AppDataSource from "../../data-source";
import { User } from "../../entities/users.entity";

const listAllUsersService = async () => {
  const usersRepository = AppDataSource.getRepository(User);
  const users = await usersRepository.find();
  return users;
};

export default listAllUsersService;
