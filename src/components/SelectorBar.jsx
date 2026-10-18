const SelectorBar = ({ active, onSelect }) => (
  <div className="selector-bar" role="tablist" aria-label="بخش‌های صفحه اصلی">
    {[
      ['Skill', 'مهارت‌ها'],
      ['Sample', 'نمونه‌کارها'],
      ['Contact', 'ارتباط با من']
    ].map(([value, label]) => (
      <button
        key={value}
        type="button"
        role="tab"
        aria-selected={active === value}
        className={active === value ? 'selector-active' : ''}
        onClick={() => onSelect(value)}
      >
        {label}
      </button>
    ))}
  </div>
)

export default SelectorBar
