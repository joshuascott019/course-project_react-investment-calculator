import InputField from './InputField';

export default function UserInput({ onChange, userInput }) {
  return (
    <div id="user-input">
      <div className="input-group">
        <InputField
          label="Initial Investment"
          value={userInput.initialInvestment}
          onChange={(event) =>
            onChange('initialInvestment', event.target.value)
          }
        />
        <InputField
          label="Annual Investment"
          value={userInput.annualInvestment}
          onChange={(event) => onChange('annualInvestment', event.target.value)}
        />
      </div>
      <div className="input-group">
        <InputField
          label="Expected Return"
          value={userInput.expectedReturn}
          onChange={(event) => onChange('expectedReturn', event.target.value)}
        />
        <InputField
          label="Duration"
          value={userInput.duration}
          onChange={(event) => onChange('duration', event.target.value)}
        />
      </div>
    </div>
  );
}
