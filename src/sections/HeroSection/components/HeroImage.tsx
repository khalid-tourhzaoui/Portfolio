import HeroThumbnail from '../../../../public/assets/profile-D8-g5WhZ.png';
export const HeroImage = () => {
  return (
    <div className="flex items-center justify-center lg:justify-end pb-12 md:pb-16 lg:pb-0">
      <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[400px] lg:max-w-[480px] xl:max-w-[550px]">
        <div className="relative aspect-[3/4] w-full">
          <div className="absolute inset-0 bg-zinc-800 rounded-3xl transform translate-x-2 translate-y-2"></div>
          <div className="absolute inset-0 bg-white border-4 border-zinc-800 rounded-3xl overflow-hidden">
            <div className="absolute inset-4 border-4 border-orange-500 rounded-2xl overflow-hidden bg-gradient-to-br from-orange-100 to-yellow-100">
              <img
                alt="profile"
                src={HeroThumbnail}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="absolute top-4 left-4 z-10">
            <span className="inline-flex items-center px-3 py-1.5 text-xs font-bold bg-white border-2 border-zinc-800 rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              RANK S
            </span>
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
            <span className="inline-flex items-center px-3 py-1.5 text-xs font-semibold bg-white border-2 border-zinc-800 rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              HP 100
            </span>
            <span className="inline-flex items-center px-3 py-1.5 text-xs font-semibold bg-white border-2 border-zinc-800 rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              XP 39%
            </span>
          </div>
        </div>

        
      </div>
    </div>
  );
};