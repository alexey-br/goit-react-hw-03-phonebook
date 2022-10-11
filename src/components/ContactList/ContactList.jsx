import PropTypes from 'prop-types';
import Box from 'components/reusableComponents/Box';
import ContactsItem from './ContactsItem';

export default function ContactList({ contacts, onDeleteContact }) {
  return (
    <Box as="ul" pl={0}>
      {contacts.map(contact => {
        return (
          <ContactsItem
            key={contact.id}
            contact={contact}
            onDeleteContact={onDeleteContact}
          />
        );
      })}
    </Box>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
