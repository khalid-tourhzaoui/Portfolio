
export const FooterBottom = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className="text-[11px] items-center box-border flex flex-col sm:flex-row justify-between gap-4 leading-[17.6px] mt-8 font-mono">
      <div className="box-border order-2 sm:order-1">
        © {currentYear} All rights reserved.
      </div>
      <button
        onClick={scrollToTop}
        className="font-black bg-white shadow-[0px_3px_0px_0px_rgb(42,42,42)] text-center uppercase border-zinc-800 px-3 py-2 rounded border-2 border-solid hover:bg-gray-100 hover:shadow-[0px_2px_0px_0px_rgb(42,42,42)] hover:translate-y-[1px] transition-all order-1 sm:order-2"
      >
        BACK TO TOP ↑
      </button>
    </div>
  );
};