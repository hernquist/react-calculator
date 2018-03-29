import React from 'react';

const DisplayResult = (props) => {
    return <div>
      {props.result}
      <button onClick={props.handleResult}>enter</button>
    </div>
}

export default DisplayResult;