import React from 'react';

const AddInput = ({
  onAdd
}) => {
  let input;

  return (
    <div>
      <input ref={node => { input = node }} />
      <button onClick={() => {
        onAdd(input.value);
        input.value = '';
      }}>Add</button>
    </div>
  )
};

export default AddInput;

