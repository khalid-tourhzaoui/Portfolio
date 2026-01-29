export const LaunchModalHeader = () => {
  return (
    <div className="items-center bg-yellow-100 box-border caret-transparent flex justify-between border-zinc-800 px-4 py-3 border-b border-solid animate-slide-down">
      <div className="items-center box-border caret-transparent gap-x-2 flex gap-y-2">
        <div className="text-[10px] font-bold bg-white box-border caret-transparent tracking-[0.5px] leading-4 border-zinc-800 px-3 py-1 rounded-bl rounded-br rounded-tl rounded-tr border-2 border-solid animate-pulse-slow">
          LAUNCHER
        </div>
        <div className="text-zinc-500 text-[10px] box-border caret-transparent leading-4 animate-typing">
          // Boot sequence
        </div>
      </div>
      <div className="items-center box-border caret-transparent gap-x-2 flex gap-y-2">
        <div className="bg-orange-500 box-border caret-transparent h-3 w-3 border-zinc-800 rounded-bl rounded-br rounded-tl rounded-tr border-2 border-solid animate-blink"></div>
        <div className="bg-zinc-500 box-border caret-transparent h-3 w-3 border-zinc-800 rounded-bl rounded-br rounded-tl rounded-tr border-2 border-solid"></div>
      </div>
      <style>{`
        @keyframes slide-down {
          from { transform: translateY(-20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(0.98); }
        }
        @keyframes typing {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0.3; }
        }
        .animate-slide-down { animation: slide-down 0.5s ease-out; }
        .animate-pulse-slow { animation: pulse-slow 2s ease-in-out infinite; }
        .animate-typing { animation: typing 0.8s ease-out; }
        .animate-blink { animation: blink 1.5s ease-in-out infinite; }
      `}</style>
    </div>
  );
};
