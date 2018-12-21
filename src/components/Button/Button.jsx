import React from 'react';

const Button = ({
  active,
  onButtonClick,
  children
}) => (
    <button disabled={active} onClick={() => onButtonClick()}>
      {children}
    </button>
  );

export default Button;