import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contacts.entety";
import { User } from "../../entities/users.entity";
import { IUserLogin } from "../../interfaces/users.interface";

const createContactService = async (user: IUserLogin, contact) => {
  const usersRepository = AppDataSource.getRepository(User);
  const contactsRepository = AppDataSource.getRepository(Contact);

  const findUser = await usersRepository.findOneBy({
    id: user.id,
  });

  const newContact = contactsRepository.create({
    ...contact,
    user: findUser,
  });
  await contactsRepository.save(newContact);

  const { password, isActive, createdAt, updatedAt, ...userWhitoutPass } =
    findUser;

  const dataResponse = {
    ...newContact,
    user: userWhitoutPass,
  };

  return dataResponse;
};

export default createContactService;
