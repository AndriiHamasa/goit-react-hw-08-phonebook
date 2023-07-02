import { nanoid } from 'nanoid';
import { Filter } from './Filter';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/contactsSlice';
import { useEffect } from 'react';
import { addContact, deleteContact, fetchContacts } from 'redux/operations';
import {
  selectContactsState,
  selectFilter,
} from 'redux/selectors';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const App = () => {
  const dispatch = useDispatch();
  const {
    items: contacts,
    addLoading,
    error,
  } = useSelector(selectContactsState);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleChange = event => {
    const payload = event.currentTarget.value;
    dispatch(changeFilter(payload));
  };

  const handleDelete = event => {
    const payload = event.currentTarget.id;
    dispatch(deleteContact(payload));
  };

  const handleAddContact = values => {
    const { name, number } = values;
    const payload = { id: nanoid(), name, number };

    if (
      contacts
        .map(contact => contact.name)
        .some(
          collectionName => collectionName.toLowerCase() === name.toLowerCase()
        )
    ) {
      return toast.info(`${name} is already in contacts`, {
        position: toast.POSITION.TOP_RIGHT,
        style: {
          fontSize: 16
        }
      });
    }
    dispatch(addContact(payload));
  };

  const renderContacts = () => {
    if (filter === '') {
      return contacts;
    }

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <div>
        <h1 style={{ textAlign: 'center' }}>Phonebook</h1>
        <ContactForm onAddContact={handleAddContact} />

        <ToastContainer />
        <h2 style={{ textAlign: 'center' }}>Contacts</h2>
        <Filter filter={filter} onChange={handleChange} />
        {addLoading && <h2>Loading...</h2>}
        {error && <h3>Error...</h3>}
        {contacts.length > 0 && !error && (
          <ContactList contacts={renderContacts()} onDelete={handleDelete} />
        )}
      </div>
    </div>
  );
};

export default App;
