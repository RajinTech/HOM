import React from 'react';

const RangeField2 = (props) => {
  return (
    <div>
      <label>{props.label}
      <div className="range-slider" data-slider data-options="start: 1; end: 10;">
        <span className="range-slider-handle" role="slider" tabIndex="0"></span>
        <span className="range-slider-active-segment"></span>
        <input type="hidden" value={props.value}/>
      </div>

      </label>
    </div>

    );
}

export default RangeField2;
