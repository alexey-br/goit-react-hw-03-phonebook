import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import Box from './Box';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  STORAGE_ITEM_NAME = 'contacts';

  componentDidMount() {
    const savedContacts = JSON.parse(
      localStorage.getItem(this.STORAGE_ITEM_NAME)
    );

    if (savedContacts) {
      this.setState({ contacts: savedContacts });
    }
  }

  componentDidUpdate(prevProps, { contacts: prevContacts }) {
    const { contacts } = this.state;

    if (prevContacts !== contacts) {
      localStorage.setItem(this.STORAGE_ITEM_NAME, JSON.stringify(contacts));
    }
  }

  handleAddContact = newContact => {
    if (this.state.contacts.some(({ name }) => name === newContact.name)) {
      alert(`${newContact.name} is alredy in contacts`);

      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), ...newContact }],
    }));
  };

  handleDeleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId
        ),
      };
    });
  };

  filterContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLocaleLowerCase();
    return contacts.filter(({ name }) =>
      name.toLocaleLowerCase().includes(normalizedFilter)
    );
  };

  handleFilterInput = e => {
    this.setState({ filter: e.currentTarget.value });
    this.filteredList = this.filterContacts(this.state.filter);
  };

  render() {
    const filteredContacts = this.filterContacts();

    return (
      <Box m={4}>
        <Box as="h1" mt={0} mb={4} color="accent">
          Phonebook
        </Box>
        <ContactForm addContact={this.handleAddContact} />
        <Box as="h2" mt={5} mb={3} color="accent">
          Contacts:
        </Box>
        <Filter text={this.state.filter} onInput={this.handleFilterInput} />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.handleDeleteContact}
        />
      </Box>
    );
  }
}
