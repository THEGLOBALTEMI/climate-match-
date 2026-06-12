export default function MultiChip({ label, selected, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`multi-chip ${selected ? 'selected' : ''}`}
    >
      {label}
    </button>
  );
}
