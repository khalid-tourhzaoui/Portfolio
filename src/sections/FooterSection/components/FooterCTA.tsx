export const FooterCTA = () => {
  return (
    <div className="relative box-border">
      <div className="absolute bg-[linear-gradient(90deg,rgba(0,0,0,0)_0%,rgba(255,255,255,0.45)_50%,rgba(0,0,0,0)_100%)] bg-[length:200%_100%] box-border mix-blend-overlay opacity-[0.18] pointer-events-none bg-[position:-71.3143%_top] inset-0 md:bg-[position:167.771%_top]"></div>
      
      <h2 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-gray-600 box-border tracking-[-1.92px] leading-[43.2px] text-center uppercase md:text-9xl md:tracking-[-5.12px] md:leading-[115.2px]">
        LET'S BUILD SOMETHING EPIC
      </h2>
      
      <div className="box-border text-center mt-6 flex gap-4 justify-center flex-wrap">
        <a
          href="mailto:khalidtourhzaoui@gmail.com"
          className="text-xs font-black items-center bg-white shadow-[0px_4px_0px_0px_rgb(42,42,42)] box-border gap-x-2 inline-flex leading-4 gap-y-2 uppercase border-zinc-800 px-4 py-2 rounded border-2 border-solid hover:bg-gray-100 hover:shadow-[0px_3px_0px_0px_rgb(42,42,42)] hover:translate-y-[1px] transition-all"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          KHALIDTOURHZAOUI@GMAIL.COM
        </a>
        <a
          href="/contact"
          className="text-xs font-black items-center bg-orange-500 text-white shadow-[0px_4px_0px_0px_rgb(42,42,42)] box-border gap-x-2 inline-flex leading-4 gap-y-2 uppercase border-zinc-800 px-4 py-2 rounded border-2 border-solid hover:bg-orange-600 hover:shadow-[0px_3px_0px_0px_rgb(42,42,42)] hover:translate-y-[1px] transition-all"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          Contact Form
        </a>
      </div>
    </div>
  );
};