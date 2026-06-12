export default function RadioOpt({ label, selected, onClick }) {
  return (
    <button onClick={onClick} className={`radio-opt ${selected ? 'sel' : ''}`}>
      <span>{label}</span>
      <span className={`w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-all ${selected ? 'border-forest bg-forest' : 'border-gray-300'}`}>
        {selected && <span className="w-2 h-2 bg-white rounded-full" />}
      </span>
    </button>
  )
}
