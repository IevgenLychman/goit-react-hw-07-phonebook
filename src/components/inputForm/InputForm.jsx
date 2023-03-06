import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/actions';

import { Input, Form, Button } from './InputForm.styled';

export const InputForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const onHandleSubmit = (values, { resetForm }) => {
    const newName = values.name.toLowerCase();
    const nameExist = contacts
      .map(contact => contact.name.toLowerCase())
      .some(el => el === newName);

    if (nameExist) {
      return alert(`${values.name} is already in contacts`);
    }
    console.log(values);
    dispatch(addContact(values));
    resetForm();
  };

  return (
    <Form onSubmit={onHandleSubmit}>
      <Input
        id="name"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />

      <Input
        id="number"
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <Button type="submit">Add contact</Button>
    </Form>
  );
};
