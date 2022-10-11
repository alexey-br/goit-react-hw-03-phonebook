import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import Box from './reusableComponents/Box';
import {
  HeaderH1,
  HeaderH2,
} from './reusableComponents/Headers/Headers.styled';

const LS_KEY = 'contacts';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = JSON.parse(localStorage.getItem(LS_KEY));

    if (savedContacts) {
      this.setState({ contacts: savedContacts });
    }
  }

  componentDidUpdate(_, { contacts: prevContacts }) {
    const { contacts } = this.state;

    if (prevContacts !== contacts) {
      localStorage.setItem(LS_KEY, JSON.stringify(contacts));
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
        <HeaderH1>Phonebook</HeaderH1>
        <ContactForm addContact={this.handleAddContact} />
        <HeaderH2>Contacts:</HeaderH2>
        <Filter text={this.state.filter} onInput={this.handleFilterInput} />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.handleDeleteContact}
        />
      </Box>
    );
  }
}
