export type AboutBackgroundProps = {
  variant: "variant1" | "variant2";
};

export const AboutBackground = (props: AboutBackgroundProps) => {
  return (
    <div
      className={
        props.variant === "variant1"
          ? "absolute box-border caret-transparent pointer-events-none inset-0 bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.03)_0px,rgba(255,255,255,0.03)_2px,rgba(0,0,0,0)_2px,rgba(0,0,0,0)_4px)] mix-blend-overlay opacity-[0.08]"
          : "absolute box-border caret-transparent pointer-events-none inset-0"
      }
    >
      {props.variant === "variant2" && (
        <>
          <div className="absolute bg-[radial-gradient(circle,rgba(255,209,102,0.4),rgba(0,0,0,0))] box-border caret-transparent blur-3xl h-72 opacity-15 w-72 rounded-[3.35544e+07px] left-10 top-20"></div>
          <div className="absolute bg-[radial-gradient(circle,rgba(6,214,160,0.4),rgba(0,0,0,0))] box-border caret-transparent blur-3xl h-96 opacity-15 w-96 rounded-[3.35544e+07px] right-10 bottom-20"></div>
        </>
      )}
    </div>
  );
};