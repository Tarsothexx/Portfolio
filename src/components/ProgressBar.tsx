type Props = {
  progress: number
}

export default function ProgressBar({ progress }: Props) {
  return (
    <div
      className="fixed top-0 left-0 z-[100] h-[2px] bg-grad-primary"
      style={{
        width: `${progress}%`,
        boxShadow: '0 0 12px rgba(61,123,250,.7)',
      }}
    />
  )
}
