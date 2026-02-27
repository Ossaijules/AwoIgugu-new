const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center pt-28 pb-16 px-4 sm:px-8 lg:px-14 bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: 'url(/images/HeroPicture.png)' }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-[#2a0032]/55"></div>
      <div className="absolute -left-24 top-24 w-64 h-64 rounded-full bg-[#f7d8ff]/30 blur-3xl"></div>
      <div className="absolute right-0 bottom-8 w-72 h-72 rounded-full bg-[#ffd7ea]/20 blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="max-w-3xl text-white">
          <p className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs tracking-[0.2em] uppercase mb-6">
            New Season 2026
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl leading-[0.95] font-semibold">
            Elevated Fashion
            <span className="block text-[#f7e2ff]">For Every Moment</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-white/85 max-w-xl">
            Discover statement pieces, modern essentials, and tailored fits designed for confident everyday style.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="/collection"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-white text-black text-sm tracking-wide uppercase hover:bg-[#f3f0f5] transition-colors duration-300"
            >
              Shop Now
            </a>
            <a
              href="/collection"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-white/45 text-white text-sm tracking-wide uppercase bg-white/5 hover:bg-white/15 transition-colors duration-300"
            >
              Explore Collection
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
