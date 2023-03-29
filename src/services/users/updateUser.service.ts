import AppDataSource from "../../data-source";
import { User } from "../../entities/users.entity";
import AppError from "../../errors/AppError";
import { IUserUpdate } from "../../interfaces/users.interface";

const updateUserService = async (data: IUserUpdate, id: string) => {
  const usersRepository = AppDataSource.getRepository(User);

  if (data.email) {
    const findEmail = usersRepository.findOneBy({
      email: data.email,
    });

    if (findEmail) {
      throw new AppError("This email already used!", 409);
    }
  }

  if (data.phone) {
    const findPhone = usersRepository.findOneBy({
      phone: data.phone,
    });

    if (findPhone) {
      throw new AppError("This phone already used!", 409);
    }
  }

  const findUser = await usersRepository.findOneBy({
    id: id,
  });

  const updateUser = usersRepository.create({
    ...findUser,
    ...data,
  });
  await usersRepository.save(updateUser);

  const { password, ...dataResponse } = updateUser;

  return dataResponse;
};

export default updateUserService;
