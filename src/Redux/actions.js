import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

const addContact = createAction('contacts/addContact', ({ name, number }) => ({
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
}));

const deleteContact = createAction('contacts/deleteContact');

const changeFilter = createAction('contacts/changeFilter');
// eslint-disable-next-line
export default { addContact, deleteContact, changeFilter };
