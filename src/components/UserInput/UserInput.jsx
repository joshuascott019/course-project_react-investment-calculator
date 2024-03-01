import { useState } from 'react';

import InputField from './InputField';

export default function UserInput() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    console.log(inputIdentifier, newValue);
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue,
      };
    });
  }

  return (
    <div id="user-input">
      <div className="input-group">
        <InputField
          label="Initial Investment"
          value={userInput.initialInvestment}
          onChange={(event) =>
            handleChange('initialInvestment', event.target.value)
          }
        />
        <InputField
          label="Annual Investment"
          value={userInput.annualInvestment}
          onChange={(event) =>
            handleChange('annualInvestment', event.target.value)
          }
        />
      </div>
      <div className="input-group">
        <InputField
          label="Expected Return"
          value={userInput.expectedReturn}
          onChange={(event) =>
            handleChange('expectedReturn', event.target.value)
          }
        />
        <InputField
          label="Duration"
          value={userInput.duration}
          onChange={(event) => handleChange('duration', event.target.value)}
        />
      </div>
    </div>
  );
}
