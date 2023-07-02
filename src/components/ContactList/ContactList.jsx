import { Li, Btn } from './ContactList.styled';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, onDelete }) => {
  const handleDelete = e => {
    e.currentTarget.textContent = 'loading...';
    e.currentTarget.disabled = true
    onDelete(e);
  };

  return (
    <ul>
      {contacts.map(contact => (
        <Li key={contact.id}>
          {contact.name}: <i>{contact.phone}</i>
          <Btn id={contact.id} onClick={handleDelete}>
            Delete
          </Btn>
        </Li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.node,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};
