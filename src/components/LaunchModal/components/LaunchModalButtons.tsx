import { useEffect, useState } from "react";

export type LaunchModalButtonsProps = {
  onEnterWithMusic: () => void;
  onEnterWithoutMusic: () => void;
};

export const LaunchModalButtons = (props: LaunchModalButtonsProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="box-border caret-transparent gap-x-3 grid grid-cols-1 gap-y-3 pb-5 px-5 md:grid-cols-2">
      <button
        onClick={props.onEnterWithMusic}
        disabled={progress < 100}
        className={`text-white font-bold bg-red-400 caret-transparent block text-center text-nowrap border-zinc-800 px-4 py-3 rounded-md border-4 border-solid transition-all duration-300 animate-button-appear ${
          progress >= 100
            ? "hover:bg-red-500 hover:scale-105 hover:shadow-lg active:scale-95"
            : "opacity-50 cursor-not-allowed"
        }`}
      >
        Enter With Music
      </button>
      <button
        onClick={props.onEnterWithoutMusic}
        disabled={progress < 100}
        className={`font-bold bg-white caret-transparent block text-center text-nowrap border-zinc-800 px-4 py-3 rounded-md border-4 border-solid transition-all duration-300 animate-button-appear-delay ${
          progress >= 100
            ? "hover:bg-gray-100 hover:scale-105 hover:shadow-lg active:scale-95"
            : "opacity-50 cursor-not-allowed"
        }`}
      >
        Enter Without Music
      </button>
      <style>{`
        @keyframes button-appear {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-button-appear {
          animation: button-appear 0.6s ease-out 0.6s both;
        }
        .animate-button-appear-delay {
          animation: button-appear 0.6s ease-out 0.7s both;
        }
      `}</style>
    </div>
  );
};
