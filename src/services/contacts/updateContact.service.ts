import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contacts.entety";
import { IContactUpdate } from "../../interfaces/contacts.interface";

const updateContactService = async (
  data: IContactUpdate,
  contactId: string
) => {
  const contactsRepository = AppDataSource.getRepository(Contact);

  const findContact = await contactsRepository.findOneBy({
    id: contactId,
  });

  const updateContact = contactsRepository.create({
    ...findContact,
    ...data,
  });
  await contactsRepository.save(updateContact);

  return updateContact;
};

export default updateContactService;
