import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { getContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/actions';

import { Input, Form, Button } from './InputForm.styled';

export const InputForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();

  const handleChangeName = event => {
    const { value } = event.currentTarget;
    setName(value);
  };

  const handleChangeNumber = event => {
    const { value } = event.currentTarget;
    setNumber(value);
  };

  const onHandleSubmit = event => {
    event.preventDefault();
    const duplicate = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (duplicate) return console.error('666');
    dispatch(addContact({ name, number }));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={onHandleSubmit}>
      <Input
        type="text"
        value={name}
        onChange={handleChangeName}
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        placeholder="Name"
      />

      <Input
        type="tel"
        value={number}
        onChange={handleChangeNumber}
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        placeholder="Number"
      />
      <Button type="submit">Add contact</Button>
    </Form>
  );
};
