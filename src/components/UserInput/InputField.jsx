export default function InputField({ label }) {
  return (
    <div>
      <label htmlFor="">{label}</label>
      <input type="number" />
    </div>
  );
}
