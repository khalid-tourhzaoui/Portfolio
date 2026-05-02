import { LaunchModalBackground } from "./components/LaunchModalBackground";
import { LaunchModalContent } from "./components/LaunchModalContent";
export type LaunchModalProps = {
  onEnterWithMusic: () => void;
  onEnterWithoutMusic: () => void;
};

export const LaunchModal = (props: LaunchModalProps) => {
  return (
    <div className="fixed items-center bg-yellow-100 box-border caret-transparent flex justify-center z-[9999] inset-0 animate-fade-in-bg">
      <LaunchModalBackground variant="" />
      <LaunchModalBackground variant="extended" />
      <LaunchModalContent
        onEnterWithMusic={props.onEnterWithMusic}
        onEnterWithoutMusic={props.onEnterWithoutMusic}
      />
      <img
        src="https://c.animaapp.com/mkydohemo8pbIw/assets/icon-1.svg"
        alt="Icon"
        loading="lazy"
        decoding="async"
        className="absolute box-border caret-transparent h-full pointer-events-none w-full z-20 inset-0 animate-fade-in-icon"
      />
      <style>{`
        @keyframes fade-in-bg {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fade-in-icon {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in-bg {
          animation: fade-in-bg 0.3s ease-out;
        }
        .animate-fade-in-icon {
          animation: fade-in-icon 1s ease-out 0.5s both;
        }
      `}</style>
    </div>
  );
};
