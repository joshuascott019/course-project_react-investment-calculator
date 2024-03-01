export default function InputField({ label, ...props }) {
  return (
    <p>
      <label>{label}</label>
      <input type="number" required {...props} />
    </p>
  );
}
