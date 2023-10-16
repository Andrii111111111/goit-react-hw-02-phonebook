import { Filter } from 'components/Filter/Filter';
import { ContactsWraper } from './ContactList.styles';

export const ContactList = ({
  contacts,
  filter,
  onChengeFilter,
  deleteCon,
}) => {
  return (
    <ContactsWraper>
      <h2>Contacts</h2>
      <Filter filters={filter} onChengeFilter={onChengeFilter} />
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            {contact.name}:{contact.number}
            <button type="button" onClick={() => deleteCon(contact.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </ContactsWraper>
  );
};