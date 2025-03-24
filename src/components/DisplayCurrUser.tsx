import React from 'react'

type DisplayPropsType = {
    currUserData: string;
}

const DisplayCurrUser: React.FC<DisplayPropsType> = (props) => {

    const newObj = props.currUserData;
    console.log(newObj);
    

  return (
    <div className='parent-flex-box' style={{display: 'flex', justifyContent: 'space-between', width: '55em'}}>
        <div className='two-col-box'>
            {Object.entries(newObj).map(([key]) =>(
                <div className='two-col-box-rows'>
                    {key}
                </div>
            ))}
        </div>
        <div className='two-col-box'>
            {Object.entries(newObj).map(([key, value]) =>(
                <div key={key} className='two-col-box-rows'>
                    {value}
                </div>
            ))}
        </div>
    </div>
  )
}

export default DisplayCurrUser