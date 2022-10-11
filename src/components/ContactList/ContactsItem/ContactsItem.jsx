import {
  Contact,
  ContactIcon,
  ContactName,
  ContactNumber,
  DeleteBtn,
} from './ContactsItem.styled';

export default function ContactsItem({
  contact: { id, name, number },
  onDeleteContact,
}) {
  return (
    <Contact>
      <ContactIcon />
      <ContactName>{name}: </ContactName>
      <ContactNumber>{number}</ContactNumber>
      <DeleteBtn onClick={() => onDeleteContact(id)}>Delete</DeleteBtn>
    </Contact>
  );
}
