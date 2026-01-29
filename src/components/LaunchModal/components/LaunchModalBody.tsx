import { useEffect, useState } from "react";

export const LaunchModalBody = () => {
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="text-sm box-border caret-transparent leading-5 pt-5 pb-3 px-5 font-ui_monospace">
      <div className="text-zinc-500 box-border caret-transparent animate-text-appear">
        &gt;Ready to Enter Portfolio
      </div>
      <div className="text-zinc-500 text-xs box-border caret-transparent leading-4 mt-1 animate-text-appear-delay">
        Choose how you want to launch
      </div>
      <div className="text-yellow-400 text-xs box-border caret-transparent leading-4 mt-2 animate-text-appear-delay-2 flex items-center">
        &gt; Awaiting user input
        {showCursor && (
          <span className="inline-block w-2 h-3 bg-yellow-400 ml-1"></span>
        )}
      </div>
      <style>{`
        @keyframes text-appear {
          from { opacity: 0; transform: translateX(-10px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-text-appear {
          animation: text-appear 0.6s ease-out;
        }
        .animate-text-appear-delay {
          animation: text-appear 0.6s ease-out 0.2s both;
        }
        .animate-text-appear-delay-2 {
          animation: text-appear 0.6s ease-out 0.4s both;
        }
      `}</style>
    </div>
  );
};
