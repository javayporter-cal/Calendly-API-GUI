import React, { useState, ChangeEvent, useEffect } from 'react';



interface InputFieldProps {
  label: string;
  type?: 'text' | 'number' | 'email' | 'password';
  placeholder?: string;
  onChange: (value: string) => void;
}

const InputField: React.FC<InputFieldProps> = ({ label, type = 'text', placeholder, onChange }) => {
  const [value, setValue] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    onChange(event.target.value);
  };

  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        id={label}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button onClick={onClick}>{label}</button>
  );
};

interface InputAndButtonProps {
  inputLabel: string;
  inputType?: 'text' | 'number' | 'email' | 'password';
  inputPlaceholder?: string;
  buttonLabel: string;
  onButtonClick: (inputValue: string) => void;
}




const InputAndButton: React.FC<InputAndButtonProps> = ({ inputLabel, inputType, inputPlaceholder, buttonLabel, onButtonClick }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (value: string) => {
    setInputValue(value);
    //console.log('the value here too', inputValue);
    
  };

 const handleClick = () => {
        onButtonClick(inputValue);
        return inputValue
      };



  return (
    <div>
      <InputField
        label={inputLabel}
        type={inputType}
        placeholder={inputPlaceholder}
        onChange={handleInputChange}
      />
      <Button label={buttonLabel} onClick={handleClick} />
    </div>
  );
};

export default InputAndButton;