// ExperienceBackground.tsx
export const ExperienceBackground = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div 
        className="absolute w-60 h-60 sm:w-80 sm:h-80 md:w-96 md:h-96 opacity-20 blur-3xl rounded-full left-0 -top-12 sm:-top-20 md:-top-24"
        style={{
          background: "radial-gradient(closest-side, rgb(255, 126, 0), rgba(0, 0, 0, 0))"
        }}
      />
      <div 
        className="absolute w-64 h-64 sm:w-96 sm:h-96 md:w-[448px] md:h-[448px] opacity-20 blur-3xl rounded-full right-0 bottom-0"
        style={{
          background: "radial-gradient(closest-side, rgb(255, 206, 0), rgba(0, 0, 0, 0))"
        }}
      />
    </div>
  );
};