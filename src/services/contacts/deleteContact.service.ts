import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contacts.entety";

const deleteContactService = async (data: string) => {
  const contactsRepository = AppDataSource.getRepository(Contact);

  const contact = await contactsRepository.findOneBy({
    id: data,
  });
  contactsRepository.remove(contact);

  return {};
};

export default deleteContactService;
