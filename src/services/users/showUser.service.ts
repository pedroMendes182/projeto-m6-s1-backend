import AppDataSource from "../../data-source";
import { User } from "../../entities/users.entity";
import { IUserLogin } from "../../interfaces/users.interface";

const showUserService = async (data: IUserLogin) => {
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({
    id: data.id,
  });

  const { password, ...dataRespose } = findUser;

  return dataRespose;
};

export default showUserService;
