import { Container } from './App.styled';
import { getError, getIsLoading } from 'redux/selectors';
import { useSelector } from 'react-redux';

import { InputForm } from './inputForm/InputForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export function App() {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  return (
    <Container>
      <h1>Phonebook</h1>
      <InputForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <p>Is loading</p>}
      <ContactList />
    </Container>
  );
}
