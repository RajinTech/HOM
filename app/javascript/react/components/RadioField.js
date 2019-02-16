import React from 'react';

const RadioField = (props) => {
  return (
    <div>
      <label>{props.label}
        <br></br>
        <input
          type="radio"

          onChange={props.onChange}
          name={props.name}
          value= {props.option1}
        />{props.option1}<br></br>
        <input
          type="radio"

          onChange={props.onChange}
          name={props.name}
          value= {props.option2}
        />{props.option2}<br></br>
      </label>
    </div>
    );
}

export default RadioField;
