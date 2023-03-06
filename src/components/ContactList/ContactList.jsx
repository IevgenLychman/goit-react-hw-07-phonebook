import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/actions';
import { deleteContact } from 'redux/actions';
import { getFilteredContacts } from 'redux/selectors';
import { List, ListContent, Content, Button } from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(getFilteredContacts);

  function onDelete(id) {
    dispatch(deleteContact(id));
  }

  return (
    <List>
      {contacts.map(contact => (
        <ListContent key={contact.id}>
          <div>
            <Content>{contact.name}:</Content>
            <Content> {contact.number}</Content>
          </div>
          <Button type="button" onClick={() => onDelete(contact.id)}>
            Delete
          </Button>
        </ListContent>
      ))}
    </List>
  );
};
