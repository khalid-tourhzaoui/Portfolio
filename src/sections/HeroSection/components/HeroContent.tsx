import { HeroImage } from "./HeroImage";
import { HeroText } from "./HeroText";


export const HeroContent = () => {
  return (
    <div className="box-border caret-transparent max-w-screen-xl w-full mx-auto px-6 md:px-16">
      <div className="items-center box-border caret-transparent gap-x-8 grid grid-cols-1 min-h-[600px] gap-y-8 mt-0 lg:gap-x-12 lg:grid-cols-2 lg:min-h-[720px] lg:gap-y-12 xl:gap-x-28 xl:mt-2">
        <HeroText />
        <HeroImage />
      </div>
    </div>
  );
};