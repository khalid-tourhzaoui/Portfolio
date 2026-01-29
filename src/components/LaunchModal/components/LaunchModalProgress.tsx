import { useEffect, useState } from "react";

export const LaunchModalProgress = () => {
  const [progress, setProgress] = useState(0);
  const [assetsProgress, setAssetsProgress] = useState(0);
  const [shadersProgress, setShadersProgress] = useState(0);

  useEffect(() => {
    // Animation du progrès principal
    const mainInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(mainInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    // Animation des assets
    const assetsInterval = setInterval(() => {
      setAssetsProgress((prev) => {
        if (prev >= 100) {
          clearInterval(assetsInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 28);

    // Animation des shaders (plus lent, s'arrête à 85%)
    const shadersInterval = setInterval(() => {
      setShadersProgress((prev) => {
        if (prev >= 85) {
          clearInterval(shadersInterval);
          return 85;
        }
        return prev + 1;
      });
    }, 35);

    return () => {
      clearInterval(mainInterval);
      clearInterval(assetsInterval);
      clearInterval(shadersInterval);
    };
  }, []);

  return (
    <div className="box-border caret-transparent pb-5 px-5">
      <div className="text-zinc-500 text-xs items-center box-border caret-transparent flex justify-between leading-4 mb-1 animate-fade-in">
        <span className="box-border caret-transparent block">
          Installation Progress
        </span>
        <span className="box-border caret-transparent block font-ui_monospace font-bold">
          {progress}%
        </span>
      </div>
      <div className="bg-yellow-100 box-border caret-transparent h-3 w-full border-zinc-800 overflow-hidden rounded-bl rounded-br rounded-tl rounded-tr border-2 border-solid">
        <div
          className="bg-[linear-gradient(90deg,rgb(255,126,0),rgb(106,115,119))] box-border caret-transparent h-full transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="text-zinc-500 text-[10px] box-border caret-transparent flex justify-between leading-4 mt-2 animate-fade-in">
        <span className="box-border caret-transparent block">
          Assets: {assetsProgress}%
        </span>
        <span className="box-border caret-transparent block">
          Shaders: {shadersProgress}%
        </span>
        <span className="box-border caret-transparent block animate-pulse">
          Network: Online
        </span>
      </div>
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};
