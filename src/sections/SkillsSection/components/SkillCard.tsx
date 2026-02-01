import { Hammer, Package, Trophy, Circle } from "lucide-react";

export const SkillCard = () => {
  return (
    <div className="relative bg-white/10 shadow-[rgba(0,0,0,0.4)_8px_8px_0px_0px] box-border caret-transparent overflow-hidden rounded-2xl border-[6px] border-solid border-[oklab(0_0_0_/_0.5)] md:rounded-3xl">
      <div className="absolute bg-[repeating-linear-gradient(0deg,rgba(0,0,0,0.5)_0px,rgba(0,0,0,0)_2px,rgba(0,0,0,0)_4px)] box-border caret-transparent mix-blend-overlay opacity-10 pointer-events-none inset-0"></div>
      <div className="relative box-border caret-transparent z-10 p-6 md:p-10">
        <div className="items-center box-border caret-transparent gap-x-4 flex gap-y-4 mb-6 pb-4 border-b-4 border-solid border-[oklab(0.999994_0.0000455678_0.0000200868_/_0.2)]">
          <div className="flex items-center justify-center bg-yellow-100 rounded-2xl border-4 border-zinc-800 p-3 md:p-4">
            <Hammer className="w-8 h-8 md:w-10 md:h-10 text-orange-600" strokeWidth={2.5} />
          </div>
          <div className="box-border caret-transparent">
            <h3 className="text-white text-2xl font-black box-border caret-transparent leading-8 uppercase md:text-4xl md:leading-10">
              Foundations
            </h3>
            <div className="text-[oklab(0.999994_0.0000455677_0.0000200868_/_0.7)] text-xs font-bold box-border caret-transparent leading-4 mt-1 flex items-center gap-1 md:text-sm md:leading-5">
              <Circle className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              Level 1 / 4
            </div>
          </div>
        </div>
        <div className="box-border caret-transparent mb-6">
          <div className="text-[oklab(0.999994_0.0000455677_0.0000200868_/_0.7)] text-sm font-black box-border caret-transparent tracking-[0.7px] leading-5 uppercase mb-3 flex items-center gap-2">
            <Package className="w-4 h-4 md:w-5 md:h-5" />
            Equipment
          </div>
          <div className="box-border caret-transparent gap-x-2 flex flex-wrap gap-y-2 md:gap-x-3 md:gap-y-3">
            <span className="text-black text-xs font-black bg-[linear-gradient(135deg,rgba(255,209,102,0.933),rgba(255,209,102,0.8))] shadow-[rgba(0,0,0,0.3)_3px_3px_0px_0px] box-border caret-transparent block leading-4 uppercase px-3 py-2 rounded-lg border-[3px] border-solid border-[oklab(0_0_0_/_0.5)] md:text-sm md:leading-5 md:px-4 md:py-2.5">
              HTML
            </span>
            <span className="text-black text-xs font-black bg-[linear-gradient(135deg,rgba(255,209,102,0.933),rgba(255,209,102,0.8))] shadow-[rgba(0,0,0,0.3)_3px_3px_0px_0px] box-border caret-transparent block leading-4 uppercase px-3 py-2 rounded-lg border-[3px] border-solid border-[oklab(0_0_0_/_0.5)] md:text-sm md:leading-5 md:px-4 md:py-2.5">
              CSS
            </span>
            <span className="text-black text-xs font-black bg-[linear-gradient(135deg,rgba(255,209,102,0.933),rgba(255,209,102,0.8))] shadow-[rgba(0,0,0,0.3)_3px_3px_0px_0px] box-border caret-transparent block leading-4 uppercase px-3 py-2 rounded-lg border-[3px] border-solid border-[oklab(0_0_0_/_0.5)] md:text-sm md:leading-5 md:px-4 md:py-2.5">
              JavaScript
            </span>
            <span className="text-black text-xs font-black bg-[linear-gradient(135deg,rgba(255,209,102,0.933),rgba(255,209,102,0.8))] shadow-[rgba(0,0,0,0.3)_3px_3px_0px_0px] box-border caret-transparent block leading-4 uppercase px-3 py-2 rounded-lg border-[3px] border-solid border-[oklab(0_0_0_/_0.5)] md:text-sm md:leading-5 md:px-4 md:py-2.5">
              TypeScript
            </span>
            <span className="text-black text-xs font-black bg-[linear-gradient(135deg,rgba(255,209,102,0.933),rgba(255,209,102,0.8))] shadow-[rgba(0,0,0,0.3)_3px_3px_0px_0px] box-border caret-transparent block leading-4 uppercase px-3 py-2 rounded-lg border-[3px] border-solid border-[oklab(0_0_0_/_0.5)] md:text-sm md:leading-5 md:px-4 md:py-2.5">
              A11y
            </span>
            <span className="text-black text-xs font-black bg-[linear-gradient(135deg,rgba(255,209,102,0.933),rgba(255,209,102,0.8))] shadow-[rgba(0,0,0,0.3)_3px_3px_0px_0px] box-border caret-transparent block leading-4 uppercase px-3 py-2 rounded-lg border-[3px] border-solid border-[oklab(0_0_0_/_0.5)] md:text-sm md:leading-5 md:px-4 md:py-2.5">
              Testing
            </span>
          </div>
        </div>
        <div className="box-border caret-transparent">
          <div className="text-[oklab(0.999994_0.0000455677_0.0000200868_/_0.7)] text-sm font-black items-center box-border caret-transparent gap-x-2 flex tracking-[0.7px] leading-5 gap-y-2 uppercase mb-3">
            <Trophy className="w-4 h-4 md:w-5 md:h-5" />
            <span className="box-border caret-transparent block">
              Achievements Unlocked
            </span>
          </div>
          <ul className="box-border caret-transparent list-none pl-0">
            <li className="items-start bg-white/10 shadow-[rgba(0,0,0,0.2)_4px_4px_0px_0px] box-border caret-transparent gap-x-3 flex gap-y-3 mb-3 p-3 rounded-xl border-[3px] border-solid border-[oklab(0.999994_0.0000455678_0.0000200868_/_0.2)] md:p-4">
              <Circle className="w-3 h-3 fill-amber-300 text-amber-300 flex-shrink-0 mt-1.5" />
              <span className="text-[oklab(0.999994_0.0000455678_0.0000200868_/_0.95)] text-sm font-medium box-border caret-transparent block leading-[22.75px] md:text-base md:leading-[26px]">
                Semantic HTML with ARIA patterns and component tokens.
              </span>
            </li>
            <li className="items-start bg-white/10 shadow-[rgba(0,0,0,0.2)_4px_4px_0px_0px] box-border caret-transparent gap-x-3 flex gap-y-3 mb-3 p-3 rounded-xl border-[3px] border-solid border-[oklab(0.999994_0.0000455678_0.0000200868_/_0.2)] md:p-4">
              <Circle className="w-3 h-3 fill-amber-300 text-amber-300 flex-shrink-0 mt-1.5" />
              <span className="text-[oklab(0.999994_0.0000455678_0.0000200868_/_0.95)] text-sm font-medium box-border caret-transparent block leading-[22.75px] md:text-base md:leading-[26px]">
                CSS architecture with utility layering and theming.
              </span>
            </li>
            <li className="items-start bg-white/10 shadow-[rgba(0,0,0,0.2)_4px_4px_0px_0px] box-border caret-transparent gap-x-3 flex gap-y-3 p-3 rounded-xl border-[3px] border-solid border-[oklab(0.999994_0.0000455678_0.0000200868_/_0.2)] md:p-4">
              <Circle className="w-3 h-3 fill-amber-300 text-amber-300 flex-shrink-0 mt-1.5" />
              <span className="text-[oklab(0.999994_0.0000455678_0.0000200868_/_0.95)] text-sm font-medium box-border caret-transparent block leading-[22.75px] md:text-base md:leading-[26px]">
                Typed pipelines with strict lint gates and CI checks.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};