export default function MultiChip({ label, selected, onClick }) {
  return (
    <button onClick={onClick} className={`multi-chip ${selected ? 'sel' : ''}`}>
      {label}
    </button>
  )
}
