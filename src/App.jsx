import React, { useState } from 'react';

function App() {
  const [boxColor, setBoxColor] = useState('');

  const changeColor = (color) => {
    setBoxColor(color);
  };

  const buttonStyle = {
    width: '50px',
    height: '50px',
    margin: '5px',
    display: 'inline-block',
    border: '1px solid black',
  };

  return (
    <div className='container'>
      <div
        className="button red"
        onClick={() => changeColor('red')}

        style={{ ...buttonStyle, backgroundColor: 'red' }}
      ></div>
      <div
        className="button green"
        onClick={() => changeColor('green')}
        style={{ ...buttonStyle, backgroundColor: 'green' }}
      ></div>
      <div
        className="button blue"
        onClick={() => changeColor('blue')}
        style={{ ...buttonStyle, backgroundColor: 'blue' }}
      ></div>
      <div
        className="button yellow"
        onClick={() => changeColor('yellow')}
        style={{ ...buttonStyle, backgroundColor: 'yellow' }}
      ></div>
      <div
        style={{ width: '200px', height: '200px', border: '1px solid black', marginTop: '20px', backgroundColor: boxColor }}
      ></div>
    </div>
  );
}

export default App;
