import AppDataSource from "../../data-source";
import { User } from "../../entities/users.entity";
import { IUserRequest } from "../../interfaces/users.interface";

const createUserService = async (userData: IUserRequest) => {
  const userRepository = AppDataSource.getRepository(User);

  const createUser = userRepository.create(userData);
  await userRepository.save(createUser);

  const { password, ...userResponse } = createUser;

  return userResponse;
};

export default createUserService;
