import Box from 'components/Box';
import { Contact, ContactIcon, DeleteBtn } from './ContactsItem.styled';

export default function ContactsItem({
  contact: { id, name, number },
  onDeleteContact,
}) {
  return (
    <Contact>
      <ContactIcon />
      <Box as="span" display="inline-block" minWidth={150} ml={2}>
        {name}:{' '}
      </Box>
      <Box as="span" display="inline-block" minWidth={150} mr={2}>
        {number}
      </Box>
      <DeleteBtn onClick={() => onDeleteContact(id)}>Delete</DeleteBtn>
    </Contact>
  );
}
