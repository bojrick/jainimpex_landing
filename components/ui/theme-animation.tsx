export function ThemeAnimation() {
  return (
    <div className="fixed inset-0 -z-1 pointer-events-none overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/30 to-white" />
      
      {/* Very subtle animated orbs - smaller on mobile */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute top-1/4 -left-1/2 w-1/2 sm:w-1/3 h-1/2 sm:h-1/3 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-1/2 w-1/2 sm:w-1/3 h-1/2 sm:h-1/3 bg-secondary/5 rounded-full blur-3xl animate-float-delayed" />
      </div>
    </div>
  )
} 