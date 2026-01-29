import { LaunchModalHeader } from "./LaunchModalHeader";
import { LaunchModalBody } from "./LaunchModalBody";
import { LaunchModalProgress } from "./LaunchModalProgress";
import { LaunchModalButtons } from "./LaunchModalButtons";
export type LaunchModalContentProps = {
  onEnterWithMusic: () => void;
  onEnterWithoutMusic: () => void;
};

export const LaunchModalContent = (props: LaunchModalContentProps) => {
  return (
    <div className="relative bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_20px_25px] box-border caret-transparent max-w-xl w-full z-10 border-zinc-800 mx-6 rounded-lg border-4 border-solid animate-modal-appear">
      <LaunchModalHeader />
      <LaunchModalBody />
      <LaunchModalProgress />
      <LaunchModalButtons
        onEnterWithMusic={props.onEnterWithMusic}
        onEnterWithoutMusic={props.onEnterWithoutMusic}
      />
      <style>{`
        @keyframes modal-appear {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(-20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .animate-modal-appear {
          animation: modal-appear 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};
