// ProjectsBackground.tsx
export const ProjectsBackground = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Orange Gradient */}
      <div
        className="absolute w-60 h-60 sm:w-80 sm:h-80 lg:w-96 lg:h-96 opacity-20 blur-3xl rounded-full left-5 sm:left-10 -top-10 sm:-top-20"
        style={{
          background:
            "radial-gradient(closest-side, rgb(255, 126, 0), rgba(0, 0, 0, 0))",
        }}
      />
      {/* Yellow Gradient */}
      <div
        className="absolute w-64 h-64 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem] opacity-20 blur-3xl rounded-full right-5 sm:right-10 bottom-0"
        style={{
          background:
            "radial-gradient(closest-side, rgb(255, 206, 0), rgba(0, 0, 0, 0))",
        }}
      />
    </div>
  );
};