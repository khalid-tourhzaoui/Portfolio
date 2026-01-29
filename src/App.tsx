import { useState, useRef, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { LaunchModal } from "./components/LaunchModal";
import { Header } from "./sections/Header";
import { Main } from "./components/Main";
export const App = () => {
  const [showModal, setShowModal] = useState(true);
  const [playMusic, setPlayMusic] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (playMusic && audioRef.current) {
      // Ajouter une gestion d'erreur pour l'autoplay
      audioRef.current.play().catch(error => {
        console.error("Erreur lors de la lecture audio:", error);
      });
    } else if (audioRef.current) {
      audioRef.current.pause();
    }
  }, [playMusic]);

  const handleEnterWithMusic = () => {
    setPlayMusic(true);
    setShowModal(false);
  };

  const handleEnterWithoutMusic = () => {
    setPlayMusic(false);
    setShowModal(false);
  };

  return (
    <BrowserRouter>
      <body className="text-zinc-800 text-base not-italic normal-nums font-normal accent-auto bg-yellow-100 box-border caret-transparent block h-full tracking-[normal] leading-[25.6px] list-outside list-disc pointer-events-auto scroll-smooth text-start indent-[0px] normal-case visible overflow-hidden border-separate font-press_start_2p">
        <div className="bg-yellow-100 box-border caret-transparent h-full scroll-smooth">
          <div className="relative box-border caret-transparent font-ui_sans_serif">
            {showModal && (
              <LaunchModal
                onEnterWithMusic={handleEnterWithMusic}
                onEnterWithoutMusic={handleEnterWithoutMusic}
              />
            )}
            <audio
              ref={audioRef}
              src="/src/assets/FACE_TO_FACE.mp3"
              preload="auto"
              loop
              className="box-border caret-transparent hidden"
            ></audio>
            <Header />
            <Main/>
          </div>
        </div>
      </body>
    </BrowserRouter>
  );
};