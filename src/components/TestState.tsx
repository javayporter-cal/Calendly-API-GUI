import React, { useState } from 'react';
import '../App.css';

type MyComponentPropsType = {
    data1: string;
    data2: string;
    data3: string;
    buttonLabel1: string;
    buttonLabel2: string;
    buttonLabel3: string;
    onClick?: () => void; // Optional prop
    onClick2?: () => void; // Optional prop
  };

const MyComponent: React.FC<MyComponentPropsType> = (props) => {
  const [activeDiv, setActiveDiv] = useState<'div1' | 'div2'| 
  'div3'>('div1');

  const handleButtonClick = (divId: 'div1' | 'div2' | 'div3') => {
    setActiveDiv(divId);

  };

//   const handleCombinedClick1 = () => {
//     handleButtonClick('div1');
//     //props.onClick;
//   }

//   const handleCombinedClick2 = () => {
//     handleButtonClick('div2');
//     //props.onClick2;
//   }

  return (
    <div>
      <button onClick={() => handleButtonClick('div1')}>{props.buttonLabel1}</button>
      <button onClick={() => handleButtonClick('div2')}>{props.buttonLabel2}</button>
      <button onClick={() => handleButtonClick('div3')}>{props.buttonLabel3}</button>

      {activeDiv === 'div1' && (
        <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
          {/* {props.data1} */}
        <div>
            {Object.entries(props.data1).map(([key, value]) => (
            <div className='data-row2' key={key}>
                {Object.entries(value).map(([key, newValue]) => (
            <div key={key}>
            {key}: {JSON.stringify(newValue)}
        </div>
             ))}
        </div>
                ))}
            </div>
        </div>
      )}

      {activeDiv === 'div2' && (
        <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
          {/* {props.data2} */}
          <div>
            {Object.entries(props.data2).map(([key, value]) => (
            <div className='data-row2' key={key}>
                {Object.entries(value).map(([key, newValue]) => (
            <div key={key}>
            {key}: {JSON.stringify(newValue)}
        </div>
             ))}
        </div>
                ))}
            </div>
        </div>
      )}

        {activeDiv === 'div3' && (
        <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
          {/* {props.data2} */}
          <div>
            {Object.entries(props.data3).map(([key, value]) => (
            <div className='data-row2' key={key}>
                {Object.entries(value).map(([key, newValue]) => (
            <div key={key}>
            {key}: {JSON.stringify(newValue)}
        </div>
             ))}
        </div>
                ))}
            </div>
        </div>
      )}
    </div>
  );
};

export default MyComponent;

{/* <div>
      {Object.entries(apiResponse4).map(([key, value]) => (
        <div key={key}>
          {Object.entries(value).map(([key, newValue]) => (
        <div key={key}>
          <table>
            <tbody>
            <tr>
              <td>{key}</td>
              <td>{JSON.stringify(newValue)}</td>
            </tr>
            </tbody>
          </table>
          {key}: {JSON.stringify(newValue)}
        </div>
      ))}
        </div>
      ))}
    </div> */}