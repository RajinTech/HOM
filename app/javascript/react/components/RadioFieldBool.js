import React from 'react';

const RadioFieldBool = (props) => {
  return (
    <div>
      <label>{props.label}
        <br></br>
        <input
          type="radio"

          onChange={props.onChange}
          name={props.name}
          value= "true"
        />Yes<br></br>
        <input
          type="radio"

          onChange={props.onChange}
          name={props.name}
          value= "false"
        />No<br></br>
      </label>
    </div>

    );
}

export default RadioFieldBool;
