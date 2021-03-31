import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import actions from '../Redux/actions';
import s from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <div className={s.wrapper}>
    <label className={s.label}>
      Find by Name
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  </div>
);

Filter.defaultProps = {
  filter: '',
};

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = ({ filter }) => ({
  value: filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => {
    return dispatch(actions.changeFilter(e.target.value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
