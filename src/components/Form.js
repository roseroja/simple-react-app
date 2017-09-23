import React from 'react';
import PropTypes from 'prop-types'; // ES6
import TextBox from './TextBox';
const Form = ({name, comment, onSave, onHandle}) => {
  return (
    <div>
      <TextBox name={name} value={comment} onChange={onHandle}/>
      <button onClick={onSave} className="button-success">Save</button>
    </div>
  );
};

Form.propTypes = {
  name: PropTypes.string,
  comment: PropTypes.string,
  onSave: PropTypes.func.isRequired,
  onHandle: PropTypes.func.isRequired
};

export default Form;
