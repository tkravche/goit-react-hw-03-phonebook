import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { StyledWrapper } from './App.styled';

const CONTACTS_KEY = 'contacts_key';
const INITIAL_STATE = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contactsFromLS = localStorage.getItem(CONTACTS_KEY);
    if (JSON.parse(contactsFromLS)?.length) {
      this.setState({ contacts: JSON.parse(contactsFromLS) });
    } else {
      this.setState({ contacts: INITIAL_STATE });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length) {
      localStorage.setItem(CONTACTS_KEY, JSON.stringify(this.state.contacts));
    }
  }

  addContact = data => {
    if (
      this.state.contacts.some(contact =>
        contact.name.toLowerCase().includes(data.name.toLowerCase())
      )
    )
      return alert(`${data.name} is already in contacts`);
    {
      const newContact = { id: nanoid(), ...data };
      this.setState(prevState => {
        return { contacts: [...prevState.contacts, newContact] };
      });
    }
  };

  registerFilter = e => {
    this.setState({ filter: e.target.value });
  };

  handlefilteredContacts = () => {
    return this.state.contacts.filter(contact => {
      return contact.name
        .toLowerCase()
        .includes(this.state.filter.toLowerCase());
    });
  };

  handleDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };
  render() {
    return (
      <StyledWrapper>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter onChangeFilter={this.registerFilter} />
        <ContactList
          contacts={this.handlefilteredContacts()}
          onDeleteContact={this.handleDeleteContact}
        />
      </StyledWrapper>
    );
  }
}
