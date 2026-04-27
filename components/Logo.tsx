export function Logo({ className = 'h-14 w-auto' }: { className?: string }) {
  return (
    <img
      src={require('../assets/logo.png')}
      className={className}
      alt="11th Hour"
    />
  )
}
