import InputField from './InputField';

export default function UserInput() {
  return (
    <div id="user-input" className="input-group">
      <InputField label="Initial Investment" />
      <InputField label="Annual Investment" />
      <InputField label="Expected Return" />
      <InputField label="Duration" />
    </div>
  );
}
