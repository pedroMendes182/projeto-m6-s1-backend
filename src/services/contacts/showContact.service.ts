import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contacts.entety";

const showContactService = async (data: string) => {
  const contactsRepository = AppDataSource.getRepository(Contact);

  const findContact = await contactsRepository.findOneBy({
    id: data,
  });

  return findContact;
};

export default showContactService;
