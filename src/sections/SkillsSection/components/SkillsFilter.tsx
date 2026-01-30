export const SkillsFilter = () => {
  return (
    <div className="items-center box-border caret-transparent gap-x-3 flex flex-wrap justify-center gap-y-3 mb-8 md:gap-x-4 md:gap-y-4">
      <button className="relative text-black text-xs font-black bg-transparent bg-[linear-gradient(rgb(255,209,102),rgba(255,209,102,0.867))] shadow-[rgba(0,0,0,0.5)_6px_6px_0px_0px] caret-transparent block tracking-[0.6px] leading-4 text-center uppercase px-4 py-3 rounded-xl border-4 border-solid border-[oklab(0_0_0_/_0.5)] md:text-sm md:tracking-[0.7px] md:leading-5 md:px-6 md:py-4">
        <span className="text-xl box-border caret-transparent tracking-[0.6px] leading-7 mr-2 md:text-2xl md:tracking-[0.7px] md:leading-8">
          🏗️
        </span>
        <span className="text-xs box-border caret-transparent hidden tracking-[0.6px] leading-4 md:text-sm md:inline md:tracking-[0.7px] md:leading-5">
          Foundations
        </span>
        <span className="text-xs box-border caret-transparent inline tracking-[0.6px] leading-4 md:text-sm md:hidden md:tracking-[0.7px] md:leading-5">
          Foundations
        </span>
        <div className="absolute text-xs bg-[oklab(0.999994_0.0000455677_0.0000200868_/_0.6)] box-border caret-transparent h-3 tracking-[0.6px] leading-4 w-3 -left-1 -top-1 md:text-sm md:tracking-[0.7px] md:leading-5"></div>
        <div className="absolute text-xs bg-[oklab(0.999994_0.0000455677_0.0000200868_/_0.6)] box-border caret-transparent h-3 tracking-[0.6px] leading-4 w-3 -right-1 -top-1 md:text-sm md:tracking-[0.7px] md:leading-5"></div>
        <div className="absolute text-xs bg-[oklab(0.999994_0.0000455677_0.0000200868_/_0.6)] box-border caret-transparent h-3 tracking-[0.6px] leading-4 w-3 -left-1 -bottom-1 md:text-sm md:tracking-[0.7px] md:leading-5"></div>
        <div className="absolute text-xs bg-[oklab(0.999994_0.0000455677_0.0000200868_/_0.6)] box-border caret-transparent h-3 tracking-[0.6px] leading-4 w-3 -right-1 -bottom-1 md:text-sm md:tracking-[0.7px] md:leading-5"></div>
      </button>
      <button className="relative text-white text-xs font-black bg-white/10 shadow-[rgba(0,0,0,0.3)_4px_4px_0px_0px] caret-transparent block tracking-[0.6px] leading-4 text-center uppercase px-4 py-3 rounded-xl border-4 border-solid border-[oklab(0_0_0_/_0.5)] md:text-sm md:tracking-[0.7px] md:leading-5 md:px-6 md:py-4">
        <span className="text-xl box-border caret-transparent tracking-[0.6px] leading-7 mr-2 md:text-2xl md:tracking-[0.7px] md:leading-8">
          ⚡
        </span>
        <span className="text-xs box-border caret-transparent hidden tracking-[0.6px] leading-4 md:text-sm md:inline md:tracking-[0.7px] md:leading-5">
          Frontend
        </span>
        <span className="text-xs box-border caret-transparent inline tracking-[0.6px] leading-4 md:text-sm md:hidden md:tracking-[0.7px] md:leading-5">
          Frontend
        </span>
      </button>
      <button className="relative text-white text-xs font-black bg-white/10 shadow-[rgba(0,0,0,0.3)_4px_4px_0px_0px] caret-transparent block tracking-[0.6px] leading-4 text-center uppercase px-4 py-3 rounded-xl border-4 border-solid border-[oklab(0_0_0_/_0.5)] md:text-sm md:tracking-[0.7px] md:leading-5 md:px-6 md:py-4">
        <span className="text-xl box-border caret-transparent tracking-[0.6px] leading-7 mr-2 md:text-2xl md:tracking-[0.7px] md:leading-8">
          🎬
        </span>
        <span className="text-xs box-border caret-transparent hidden tracking-[0.6px] leading-4 md:text-sm md:inline md:tracking-[0.7px] md:leading-5">
          Motion &amp; Scroll
        </span>
        <span className="text-xs box-border caret-transparent inline tracking-[0.6px] leading-4 md:text-sm md:hidden md:tracking-[0.7px] md:leading-5">
          Motion
        </span>
      </button>
      <button className="relative text-white text-xs font-black bg-white/10 shadow-[rgba(0,0,0,0.3)_4px_4px_0px_0px] caret-transparent block tracking-[0.6px] leading-4 text-center uppercase px-4 py-3 rounded-xl border-4 border-solid border-[oklab(0_0_0_/_0.5)] md:text-sm md:tracking-[0.7px] md:leading-5 md:px-6 md:py-4">
        <span className="text-xl box-border caret-transparent tracking-[0.6px] leading-7 mr-2 md:text-2xl md:tracking-[0.7px] md:leading-8">
          ⚙️
        </span>
        <span className="text-xs box-border caret-transparent hidden tracking-[0.6px] leading-4 md:text-sm md:inline md:tracking-[0.7px] md:leading-5">
          Build &amp; Backend
        </span>
        <span className="text-xs box-border caret-transparent inline tracking-[0.6px] leading-4 md:text-sm md:hidden md:tracking-[0.7px] md:leading-5">
          Build
        </span>
      </button>
    </div>
  );
};