import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  { url: '/i1.jpeg', id: 1 },
  { url: '/i2.jpeg', id: 2 },
  { url: '/i3.jpeg', id: 3 },
  { url: '/i4.jpeg', id: 4 },
  { url: '/i5.jpeg', id: 5 },
];

/* ── Letter-by-letter flip-up animation ── */
const AnimatedWord = ({ text, delay = 0, className = '', style = {} }) => {
  const letters = Array.from(text);
  return (
    <span className={className} style={{ display: 'inline-block', ...style }} aria-label={text}>
      {letters.map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 48, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            delay: delay + i * 0.045,
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{ display: 'inline-block', whiteSpace: 'pre' }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
};

/* ── Slide-up reveal (mask clip) ── */
const SlideUp = ({ children, delay = 0, className = '' }) => (
  <div className={`overflow-hidden ${className}`}>
    <motion.div
      initial={{ y: '110%', opacity: 0 }}
      animate={{ y: '0%', opacity: 1 }}
      transition={{ delay, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  </div>
);

const ProfessionalHero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* ── Full-Screen Slideshow ── */}
      <AnimatePresence mode='sync'>
      <motion.img
        key={index}
        src={images[index].url}
        initial={{ opacity: 0, scale: 1.07 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        onLoad={() => {
          setIsLoaded(true);
          setPrevIndex(index);
        }}
        transition={{ duration: 3, ease: "easeInOut" }}
        className="absolute inset-0 w-full h-full object-cover"
        alt=""
      />
    </AnimatePresence>


      {/* Light vignette — lets image shine */}
      <div className="absolute inset-0 bg-linear-to-b from-black/30 via-black/10 to-black/65 z-10" />

      {/* ════════════════════════════════════════
          FLOATING CARDS  — all at safe y offsets
          (top-[76px] = below a ~64px navbar)
         ════════════════════════════════════════ */}
      <div className="absolute inset-0 z-20 pointer-events-none">

        {/* ── LEFT MID: Accreditation ── */}
        <motion.div
          initial={{ x: -28, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.7, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-6 top-1/2 -translate-y-1/2
                     flex items-center gap-3 px-5 py-3
                     backdrop-blur-md bg-white/15 border border-white/30
                     rounded-2xl pointer-events-auto shadow-lg"
        >
          <svg className="w-5 h-5 text-amber-300 shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462
                     c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921
                     -.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57
                     -1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783
                     -.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <div>
            <p className="text-white/60 text-[9px] uppercase tracking-[0.18em] leading-none mb-0.5">Recognition</p>
            <p className="text-white font-semibold text-sm leading-tight">NAAC A<sup>+</sup> Accredited</p>
          </div>
        </motion.div>

        {/* ── RIGHT MID: Admissions card ── */}
        <motion.div
          initial={{ x: 28, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.9, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="absolute right-6 top-1/2 -translate-y-1/2
                     px-6 py-4 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl
                     flex flex-col gap-2 min-w-[190px] pointer-events-auto"
        >
          <div>
            <span className="text-black/40 text-[9px] font-bold uppercase tracking-widest block mb-0.5">Status</span>
            <span className="text-black font-extrabold text-lg leading-tight"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
              Admissions Open
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-emerald-600 text-xs font-semibold">Accepting Applications</span>
          </div>
        </motion.div>

        {/* ── BOTTOM LEFT: Campus ── */}
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="absolute bottom-[72px] left-6
                     flex items-center gap-3 px-5 py-3
                     backdrop-blur-md bg-white/15 border border-white/30
                     rounded-2xl pointer-events-auto shadow-lg"
        >
          <svg className="w-5 h-5 text-emerald-300 shrink-0" fill="none" stroke="currentColor"
               strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
          <div>
            <p className="text-white/60 text-[9px] uppercase tracking-[0.18em] leading-none mb-0.5">Campus</p>
            <p className="text-white font-semibold text-sm leading-tight">25+ Acres of Greenery</p>
          </div>
        </motion.div>

        {/* ── BOTTOM RIGHT: Alumni ── */}
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="absolute bottom-[72px] right-6
                     flex items-center gap-3 px-5 py-3
                     backdrop-blur-md bg-white/15 border border-white/30
                     rounded-2xl pointer-events-auto shadow-lg"
        >
          <svg className="w-5 h-5 text-sky-300 shrink-0" fill="none" stroke="currentColor"
               strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m-4-3.268l4 2.268 4-2.268" />
          </svg>
          <div>
            <p className="text-white/60 text-[9px] uppercase tracking-[0.18em] leading-none mb-0.5">Alumni</p>
            <p className="text-white font-semibold text-sm leading-tight">5000+ Proud Alumni</p>
          </div>
        </motion.div>

      </div>

      {/* ════════════════════════════════════
          CENTRE CONTENT — letter animations
         ════════════════════════════════════ */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">

        {/* Establishment label */}
        <SlideUp delay={0.3} className="mb-5">
          <p className="text-white/70 text-[10px] uppercase tracking-[0.4em]"
             style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            Established Institution of Excellence
          </p>
        </SlideUp>

        {/* ── Name: Mulki Sunder Ram ── */}
        <div style={{ perspective: '700px' }}>
          <div style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif" }}>

            <div className="block leading-[1.05] drop-shadow-2xl
                            text-white
                            text-4xl sm:text-5xl md:text-[4rem] lg:text-[5.2rem] font-bold tracking-tight">
              <AnimatedWord text="Mulki " delay={0.5} />
              <AnimatedWord text="Sunder " delay={0.72} />
              <AnimatedWord text="Ram" delay={0.98} />
            </div>

            {/* Shetty — italic amber */}
            <div className="block leading-[1.05] drop-shadow-2xl
                            text-4xl sm:text-5xl md:text-[4rem] lg:text-[5.2rem] font-normal tracking-tight"
                 style={{ fontStyle: 'italic' }}>
              <AnimatedWord text="Shetty" delay={1.28} className="text-amber-300" />
            </div>

            {/* COLLEGE — spaced caps */}
            <div className="block text-lg sm:text-xl md:text-2xl font-light tracking-[0.4em] mt-2">
              <AnimatedWord text="C O L L E G E" delay={1.6} className="text-white/75" />
            </div>

          </div>
        </div>

        {/* Animated gradient rule */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 2.05, duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
          className="w-32 h-px my-6"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(251,191,36,0.8), transparent)' }}
        />

        {/* Tagline */}
        <SlideUp delay={2.1} className="mb-9">
          <p className="text-white/80 text-sm sm:text-base max-w-sm"
             style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300, letterSpacing: '0.12em' }}>
            Nurturing Minds · Shaping Futures · Building Leaders
          </p>
        </SlideUp>

        {/* ── CTA Buttons ── */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.35, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          {/* Enroll Now — amber gold */}
        <a  href="https://forms.gle/wQkYRNg6P1L8jig8A">
        <button
                    className="group relative overflow-hidden px-11 py-3.5 rounded-full
                              text-sm font-bold uppercase tracking-[0.18em]
                              text-black transition-all duration-300
                              hover:scale-105 active:scale-95 hover:cursor-pointer"
                    style={{
                      fontFamily: "'Lato', sans-serif",
                      background: 'linear-gradient(135deg, #fcd34d 0%, #f59e0b 50%, #d97706 100%)',
                      boxShadow: '0 4px 32px rgba(245,158,11,0.55), 0 1px 0 rgba(255,255,255,0.2) inset',
                    }}
                  >
                    {/* shimmer */}
                    <span className="absolute inset-0 translate-x-[-130%] group-hover:translate-x-[130%]
                                    transition-transform duration-700 pointer-events-none"
                          style={{ background: 'linear-gradient(90deg,transparent,rgba(255,255,255,0.35),transparent)' }} />
                    <span className="relative z-10 flex items-center gap-2">
                      <span>✦</span> Enroll Now
                    </span>
                  </button>

        </a>
                

          {/* Explore Campus — sky blue ghost */}
          <button
            className="group relative overflow-hidden px-10 py-3.5 rounded-full
                       text-sm font-medium uppercase tracking-[0.15em]
                       text-white transition-all duration-300
                       hover:scale-105 active:scale-95 hover:cursor-pointer"
            style={{
              fontFamily: "'Lato', sans-serif",
              background: 'linear-gradient(135deg, rgba(56,189,248,0.22) 0%, rgba(14,165,233,0.14) 100%)',
              border: '1.5px solid rgba(125,211,252,0.55)',
              boxShadow: '0 4px 24px rgba(56,189,248,0.25)',
            }}
          >
            <span className="absolute inset-0 translate-x-[-130%] group-hover:translate-x-[130%]
                             transition-transform duration-700 pointer-events-none"
                  style={{ background: 'linear-gradient(90deg,transparent,rgba(255,255,255,0.15),transparent)' }} />
            <span className="relative z-10">Explore Campus →</span>
          </button>
        </motion.div>

      </div>

      {/* ── Slide progress bar ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2 items-center">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className="relative h-[3px] rounded-full overflow-hidden transition-all duration-500 cursor-pointer"
            style={{
              width: index === i ? 36 : 14,
              background: 'rgba(255,255,255,0.28)',
            }}
          >
            {index === i && (
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 6, ease: 'linear' }}
                className="h-full absolute inset-0 rounded-full"
                style={{ background: 'linear-gradient(90deg, #f59e0b, #fff)' }}
              />
            )}
          </button>
        ))}
      </div>

    </section>
  );
};

export default ProfessionalHero;