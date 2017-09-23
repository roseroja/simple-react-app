import React from 'react';
import PropTypes from 'prop-types'; // ES6
const TextBox = ({name, value, onChange}) => {
  return (
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange} />
  );
};

TextBox.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default TextBox;
