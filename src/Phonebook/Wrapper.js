import { connect } from 'react-redux';
import actions from '../Redux/actions';
import Phonebook from './Phonebook';

const getVisibleContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  const filtered = contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
  return filtered;
};

const mapStateToProps = ({ contacts: { contacts, filter } }) => {
  return {
    contacts: getVisibleContacts(contacts, filter),
  };
};

const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(actions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Phonebook);
