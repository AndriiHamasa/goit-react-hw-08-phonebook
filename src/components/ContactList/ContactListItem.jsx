import { useSelector } from 'react-redux';
import { selectContactsState } from 'redux/selectors';
import { Btn } from './ContactList.styled';

export const ContactListItem = ({ contactID, onDelete }) => {
  const { deleteLoading } = useSelector(selectContactsState);

  return (
    <Btn id={contactID} onClick={onDelete}>
      {deleteLoading ? 'loading...' : 'Delete'}
    </Btn>
  );
};
