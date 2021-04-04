import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import actions from '../Redux/actions';
import s from './InputForm.module.css';

class InputForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const { contacts, onSubmit } = this.props;
    const sameContact = contacts.some(
      item => item.name.toLowerCase() === name.toLowerCase(),
    );
    const validNumber = number => {
      return !/^\d[\d\(\)\ -]{4,14}\d$/.test(number);
    };

    if (sameContact) {
      alert(`${name} Already exists!!!`);
      this.reset();
      return;
    }

    if (validNumber(number)) {
      alert('Enter the correct number phone!');

      return;
    }

    onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <label className={s.label} htmlFor="name">
          Name
        </label>
        <input
          id="name"
          type="text"
          onChange={this.handleChange}
          className={s.input}
          name="name"
          value={name}
          placeholder="Name"
        />

        <label className={s.label} htmlFor="number">
          Number
        </label>
        <input
          id="number"
          type="text"
          onChange={this.handleChange}
          className={s.input}
          name="number"
          value={number}
          placeholder="Phone number"
        />
        <button type="submit" className={s.btn}>
          Add contact
        </button>
      </form>
    );
  }
}
const mapStateToProps = ({ contacts: { contacts } }) => ({
  contacts,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: ({ name, number }) =>
    dispatch(actions.addContact({ name, number })),
});

export default connect(mapStateToProps, mapDispatchToProps)(InputForm);
