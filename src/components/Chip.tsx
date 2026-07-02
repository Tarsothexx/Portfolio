type Props = {
  label: string
  /** Proficiency 0-100. When present, shows a percentage badge + progress line instead of a plain tag. */
  level?: number
}

export default function Chip({ label, level }: Props) {
  if (level === undefined) {
    return (
      <span className="font-mono text-[.78rem] px-3.5 py-1.5 rounded-full border border-border text-text-dim bg-white/[.02] transition-all duration-300 hover:-translate-y-0.5 hover:border-blue hover:text-ice">
        {label}
      </span>
    )
  }

  return (
    <span className="relative font-mono text-[.78rem] pl-3.5 pr-3 pt-1.5 pb-2.5 rounded-full border border-dashed border-border text-text-dim bg-white/[.02] transition-all duration-300 hover:-translate-y-0.5 hover:border-blue overflow-hidden inline-flex items-center gap-2">
      <span>{label}</span>
      <span className="text-cyan font-medium">{level}%</span>
      <span className="absolute left-3 right-3 bottom-1 h-[2px] rounded-full bg-white/10 overflow-hidden">
        <span className="block h-full bg-grad-primary" style={{ width: `${level}%` }} />
      </span>
    </span>
  )
}
