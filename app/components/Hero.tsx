import React, { useState, useEffect, CSSProperties, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

type ImageItem = {
  url: string;
  id: number;
};

type AnimatedWordProps = {
  text: string;
  delay?: number;
  className?: string;
  style?: CSSProperties;
};

type SlideUpProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

const images: ImageItem[] = [
  { url: "/i1.jpeg", id: 1 },
  { url: "/i2.jpeg", id: 2 },
  { url: "/i3.jpeg", id: 3 },
  { url: "/i4.jpeg", id: 4 },
  { url: "/i5.jpeg", id: 5 },
];

/* ── Letter-by-letter flip-up animation ── */
const AnimatedWord = ({
  text,
  delay = 0,
  className = "",
  style = {},
}: AnimatedWordProps) => {
  const letters = Array.from(text);

  return (
    <span
      className={className}
      style={{ display: "inline-block", ...style }}
      aria-label={text}
    >
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
          style={{ display: "inline-block", whiteSpace: "pre" }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
};

/* ── Slide-up reveal ── */
const SlideUp = ({
  children,
  delay = 0,
  className = "",
}: SlideUpProps) => (
  <div className={`overflow-hidden ${className}`}>
    <motion.div
      initial={{ y: "110%", opacity: 0 }}
      animate={{ y: "0%", opacity: 1 }}
      transition={{
        delay,
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  </div>
);

const ProfessionalHero: React.FC = () => {
  const [index, setIndex] = useState<number>(0);
  const [, setIsLoaded] = useState<boolean>(false);
  const [, setPrevIndex] = useState<number>(0);
  const [isKannada, setIsKannada] = React.useState(true);
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  React.useEffect(() => {
  // Sets a timer to toggle the state every 6 seconds
  const interval = setInterval(() => {
    setIsKannada((prev) => !prev);
  }, 6000);

  // Cleans up the timer if the component unmounts
  return () => clearInterval(interval);
}, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Slideshow */}
      <AnimatePresence mode="sync">
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

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/30 via-black/10 to-black/65 z-10" />

      {/* ================= FLOATING CARDS ================= */}
      <div className="absolute inset-0 z-20 pointer-events-none hidden lg:block">
        {/* LEFT CARD */}
        <motion.div
          initial={{ x: -28, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 1.7,
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={{ y: -6, scale: 1.02 }}
          className="absolute left-6 top-1/2 -translate-y-1/2
                     px-5 py-4 rounded-3xl pointer-events-auto
                     border border-white/20 backdrop-blur-xl
                     bg-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.25)]"
        >
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-2xl bg-amber-400/20 border border-amber-300/30 flex items-center justify-center">
              <svg
                className="w-5 h-5 text-amber-300"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>

            <div>
              <p className="text-white/55 text-[10px] uppercase tracking-[0.28em]">
                Recognition
              </p>
              <p className="text-white text-[15px] font-semibold">
                NAAC A<sup>+</sup> Accredited
              </p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT CARD */}
        <motion.div
          initial={{ x: 28, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 1.9,
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={{ y: -6, scale: 1.02 }}
          className="absolute right-6 top-1/2 -translate-y-1/2
                     px-6 py-5 rounded-3xl pointer-events-auto
                     bg-white/95 shadow-[0_12px_40px_rgba(0,0,0,0.18)]"
        >
          <p className="text-black/45 text-[10px] uppercase tracking-[0.28em] mb-1">
            Status
          </p>

          <p
            className="text-black text-[26px] font-bold leading-none"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
            }}
          >
            Admissions Open
          </p>

          <div className="mt-3 flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>

            <span className="text-emerald-600 text-xs font-semibold tracking-wide">
              Accepting Applications
            </span>
          </div>
        </motion.div>

        {/* BOTTOM LEFT */}
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 2.1,
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={{ y: -6 }}
          className="absolute bottom-[72px] left-6
                     px-5 py-4 rounded-3xl pointer-events-auto
                     border border-white/20 backdrop-blur-xl
                     bg-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.25)]"
        >
          <p className="text-white/55 text-[10px] uppercase tracking-[0.28em]">
            Campus
          </p>
          <p className="text-white text-[15px] font-semibold">
            25+ Acres of Greenery
          </p>
        </motion.div>

        {/* BOTTOM RIGHT */}
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 2.2,
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={{ y: -6 }}
          className="absolute bottom-[72px] right-6
                     px-5 py-4 rounded-3xl pointer-events-auto
                     border border-white/20 backdrop-blur-xl
                     bg-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.25)]"
        >
          <p className="text-white/55 text-[10px] uppercase tracking-[0.28em]">
            Alumni
          </p>
          <p className="text-white text-[15px] font-semibold">
            5000+ Proud Alumni
          </p>
        </motion.div>
      </div>

      {/* ================= CENTER CONTENT ================= */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
        <SlideUp delay={0.3} className="mb-5">
          <p className="text-white/70 text-[10px] uppercase tracking-[0.4em]">
            Established Institution of Excellence
          </p>
        </SlideUp>

        {/* COLLEGE NAME */}
                <div style={{ perspective: "1000px" }}>
          <div
            style={{
              fontFamily: isKannada 
                ? "'Noto Sans Kannada', sans-serif" 
                : "'Cormorant Garamond','Playfair Display',Georgia,serif",
            }}
          >
            <motion.div
              key={isKannada ? "kn-1" : "en-1"}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="block leading-[0.95] text-white text-4xl sm:text-5xl md:text-[4rem] lg:text-[5.4rem] font-bold tracking-tight"
              style={{
                textShadow: "0 6px 30px rgba(0,0,0,0.45), 0 2px 10px rgba(0,0,0,0.25)",
              }}
            >
              {/* For Kannada, we pass the whole phrase to avoid splitting characters */}
              {isKannada ? (
                <span>ಮುಲ್ಕಿ ಸುಂದರ್ ರಾಮ್</span>
              ) : (
                <>
                  <AnimatedWord text="Mulki " delay={0.1} />
                  <AnimatedWord text="Sunder " delay={0.2} />
                  <AnimatedWord text="Ram" delay={0.3} />
                </>
              )}
            </motion.div>

            <motion.div
              key={isKannada ? "kn-2" : "en-2"}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="block leading-[0.95] text-4xl sm:text-5xl md:text-[4rem] lg:text-[5.4rem] font-medium tracking-tight"
              style={{
                fontStyle: isKannada ? "normal" : "italic",
                textShadow: "0 0 18px rgba(251,191,36,0.28), 0 6px 24px rgba(0,0,0,0.35)",
              }}
            >
              <span className="text-amber-300">
                {isKannada ? "ಶೆಟ್ಟಿ" : <AnimatedWord text="Shetty" delay={0.1} />}
              </span>
            </motion.div>

            <div className="mt-4">
              <span className="inline-block px-5 py-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-md">
                <motion.div
                  key={isKannada ? "kn-3" : "en-3"}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-white/80 text-sm sm:text-base md:text-lg font-light tracking-[0.55em]"
                >
                  {isKannada ? "ಕಾಲೇಜು" : "C O L L E G E"}
                </motion.div>
              </span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{
            delay: 2.05,
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="w-32 h-px my-6"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(251,191,36,0.8), transparent)",
          }}
        />

        {/* Tagline */}
        <SlideUp delay={2.1} className="mb-9">
          <p className="text-white/80 text-sm sm:text-base max-w-sm tracking-[0.12em]">
            Nurturing Minds · Shaping Futures · Building Leaders
          </p>
        </SlideUp>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 2.35,
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <a href="https://forms.gle/wQkYRNg6P1L8jig8A">
            <button
              className="group relative overflow-hidden px-11 py-3.5 rounded-full
                         text-sm font-bold uppercase tracking-[0.18em]
                         text-black transition-all duration-300
                         hover:scale-105 active:scale-95 hover:cursor-pointer"
              style={{
                background:
                  "linear-gradient(135deg, #fcd34d 0%, #f59e0b 50%, #d97706 100%)",
                boxShadow:
                  "0 4px 32px rgba(245,158,11,0.55), 0 1px 0 rgba(255,255,255,0.2) inset",
              }}
            >
              <span className="relative z-10">✦ Enroll Now</span>
            </button>
          </a>

          <button
            className="px-10 py-3.5 rounded-full text-white border border-white/30
                       backdrop-blur-md hover:bg-white/10 transition-all duration-300"
            
            onClick={()=> router.push("/campus")}
          >
            Explore Campus →
          </button>
        </motion.div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2 items-center">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className="relative h-[3px] rounded-full overflow-hidden transition-all duration-500 cursor-pointer"
            style={{
              width: index === i ? 36 : 14,
              background: "rgba(255,255,255,0.28)",
            }}
          >
            {index === i && (
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 6, ease: "linear" }}
                className="h-full absolute inset-0 rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, #f59e0b, #fff)",
                }}
              />
            )}
          </button>
        ))}
      </div>
    </section>
  );
};

export default ProfessionalHero;