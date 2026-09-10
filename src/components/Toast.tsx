interface ToastProps {
  message: string
  show: boolean
}

/** Fixed notification in the bottom-right corner. Stays mounted so it can animate out. */
export function Toast({ message, show }: ToastProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={
        'fixed right-4 bottom-4 z-50 flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--card-bg)] px-4 py-2.5 text-sm font-medium text-[var(--heading)] shadow-lg transition-all duration-300 ' +
        (show
          ? 'translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-2 opacity-0')
      }
    >
      <svg
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4 text-[var(--accent)]"
        aria-hidden="true"
      >
        <path d="m5 10 4 4 6-8" />
      </svg>
      {message}
    </div>
  )
}
