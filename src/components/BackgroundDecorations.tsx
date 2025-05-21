export function BackgroundDecorations() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute inset-0 grid grid-cols-12 opacity-5">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="border-r border-highlight/10"></div>
        ))}
      </div>
      <div className="absolute inset-0 grid grid-rows-12 opacity-5">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="border-b border-highlight/10"></div>
        ))}
      </div>
    </div>
  );
}
