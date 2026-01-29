
export type LaunchModalBackgroundProps = {
  variant: string;
};

const decorativeElements = [
  {
    bg: "bg-white",
    size: "h-[22px] w-[22px]",
    opacity: "opacity-[0.115]",
    position: "left-[0%] top-[0%]",
    animation: "animate-float-1",
  },
  {
    bg: "bg-yellow-100",
    size: "h-[26px] w-[26px]",
    opacity: "opacity-15",
    position: "left-[47%] top-[29%]",
    animation: "animate-float-2",
  },
  {
    bg: "bg-white",
    size: "h-[30px] w-[30px]",
    opacity: "opacity-[0.185]",
    position: "left-[94%] top-[58%]",
    animation: "animate-float-3",
  },
  {
    bg: "bg-yellow-100",
    size: "h-[34px] w-[34px]",
    opacity: "opacity-[0.22]",
    position: "left-[41%] top-[87%]",
    animation: "animate-float-4",
  },
  {
    bg: "bg-white",
    size: "h-[38px] w-[38px]",
    opacity: "opacity-[0.115]",
    position: "left-[88%] top-[16%]",
    animation: "animate-float-5",
  },
  {
    bg: "bg-yellow-100",
    size: "h-[22px] w-[22px]",
    opacity: "opacity-15",
    position: "left-[35%] top-[45%]",
    animation: "animate-float-1",
  },
  {
    bg: "bg-white",
    size: "h-[26px] w-[26px]",
    opacity: "opacity-[0.185]",
    position: "left-[82%] top-[74%]",
    animation: "animate-float-2",
  },
  {
    bg: "bg-yellow-100",
    size: "h-[30px] w-[30px]",
    opacity: "opacity-[0.22]",
    position: "left-[29%] top-[3%]",
    animation: "animate-float-3",
  },
  {
    bg: "bg-white",
    size: "h-[34px] w-[34px]",
    opacity: "opacity-[0.115]",
    position: "left-[76%] top-[32%]",
    animation: "animate-float-4",
  },
  {
    bg: "bg-yellow-100",
    size: "h-[38px] w-[38px]",
    opacity: "opacity-15",
    position: "left-[23%] top-[61%]",
    animation: "animate-float-5",
  },
  {
    bg: "bg-white",
    size: "h-[22px] w-[22px]",
    opacity: "opacity-[0.185]",
    position: "left-[70%] top-[90%]",
    animation: "animate-float-1",
  },
  {
    bg: "bg-yellow-100",
    size: "h-[26px] w-[26px]",
    opacity: "opacity-[0.22]",
    position: "left-[17%] top-[19%]",
    animation: "animate-float-2",
  },
  {
    bg: "bg-white",
    size: "h-[30px] w-[30px]",
    opacity: "opacity-[0.115]",
    position: "left-[64%] top-[48%]",
    animation: "animate-float-3",
  },
  {
    bg: "bg-yellow-100",
    size: "h-[34px] w-[34px]",
    opacity: "opacity-15",
    position: "left-[11%] top-[77%]",
    animation: "animate-float-4",
  },
  {
    bg: "bg-white",
    size: "h-[38px] w-[38px]",
    opacity: "opacity-[0.185]",
    position: "left-[58%] top-[6%]",
    animation: "animate-float-5",
  },
  {
    bg: "bg-yellow-100",
    size: "h-[22px] w-[22px]",
    opacity: "opacity-[0.22]",
    position: "left-[5%] top-[35%]",
    animation: "animate-float-1",
  },
];

const baseElementClasses = "absolute shadow-[rgb(42,42,42)_0px_0px_0px_1px_inset] box-border caret-transparent border-zinc-800 rounded-lg border-2 border-solid transition-all duration-300";

export const LaunchModalBackground = (props: LaunchModalBackgroundProps) => {
  const isExtended = props.variant === "extended";

  return (
    <div className={`absolute box-border caret-transparent pointer-events-none inset-0${isExtended ? " z-0" : ""}`}>
      <style>{`
        @keyframes float-1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(10px, -15px) rotate(5deg); }
          50% { transform: translate(-5px, -25px) rotate(-3deg); }
          75% { transform: translate(-15px, -10px) rotate(7deg); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(-12px, 18px) rotate(-6deg); }
          66% { transform: translate(8px, 12px) rotate(4deg); }
        }
        @keyframes float-3 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(15px, 10px) rotate(-8deg); }
          50% { transform: translate(5px, 20px) rotate(5deg); }
          75% { transform: translate(-10px, 15px) rotate(-4deg); }
        }
        @keyframes float-4 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-8px, -20px) rotate(6deg); }
        }
        @keyframes float-5 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(12px, -12px) rotate(-5deg); }
          66% { transform: translate(-8px, -18px) rotate(8deg); }
        }
        .animate-float-1 { animation: float-1 8s ease-in-out infinite; }
        .animate-float-2 { animation: float-2 10s ease-in-out infinite; }
        .animate-float-3 { animation: float-3 12s ease-in-out infinite; }
        .animate-float-4 { animation: float-4 9s ease-in-out infinite; }
        .animate-float-5 { animation: float-5 11s ease-in-out infinite; }
      `}</style>

      {!isExtended ? (
        <>
          <div className="absolute box-border caret-transparent bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.12)_1px,rgba(0,0,0,0)_1px)] bg-size-[18px_18px] opacity-10 inset-0" />
          <div className="absolute box-border caret-transparent bg-[repeating-linear-gradient(0deg,rgba(0,0,0,0)_0px,rgba(0,0,0,0.04)_2px,rgba(0,0,0,0)_3px)] mix-blend-multiply opacity-5 inset-0" />
        </>
      ) : (
        decorativeElements.map((element, index) => (
          <div
            key={index}
            className={`${baseElementClasses} ${element.bg} ${element.size} ${element.opacity} ${element.position} ${element.animation}`}
            style={{ animationDelay: `${index * 0.2}s` }}
          />
        ))
      )}
    </div>
  );
};

