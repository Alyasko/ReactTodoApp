import React from 'react';

import './add-input.scss';

const AddInput = ({
  onAdd
}) => {
  let input;

  return (
    <div id="add-input-component">
      <input ref={node => { input = node }} />
      <button onClick={() => {
        if (input.value !== '') {
          onAdd(input.value);
          input.value = '';
        }
      }}>Add</button>
    </div>
  )
};

export default AddInput;

