import React from 'react';

const Button = (props) => {
  return (
    <div>
        <button className={props.classes} type={props.type}>{props.value}</button>
    </div>
  )
}

export default Button;
