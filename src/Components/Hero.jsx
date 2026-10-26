import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi2";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import SplineWrapper from './SplineWrapper';
import { HERO_CONTENT, CONTACT } from '../constants';

const fadeInUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }
  }
});

const Hero = () => {
  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 border-b border-neutral-800/80">
      {/* Background radial ambient lights */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Headline, Bio & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Status Badge */}
          <motion.div
            variants={fadeInUp(0.1)}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/80 border border-neutral-800 text-xs text-neutral-300 mb-6 backdrop-blur-md shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-medium text-neutral-300">Software Development Engineer 1</span>
            <span className="text-neutral-500">•</span>
            <span className="text-purple-400 font-semibold">Clappia</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={fadeInUp(0.2)}
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-4"
          >
            {"Hi, I'm "}
            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-300 to-cyan-400 bg-clip-text text-transparent">
              Shobhit Singh
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            variants={fadeInUp(0.3)}
            initial="hidden"
            animate="visible"
            className="text-xl sm:text-2xl font-medium text-neutral-400 tracking-tight mb-6"
          >
            Architecting Scalable Microservices & Modern Full-Stack Applications
          </motion.h2>

          {/* Bio Description */}
          <motion.p
            variants={fadeInUp(0.4)}
            initial="hidden"
            animate="visible"
            className="text-base sm:text-lg text-neutral-300/90 leading-relaxed max-w-2xl mb-8 font-normal"
          >
            {HERO_CONTENT}
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            variants={fadeInUp(0.5)}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-purple-600/25 hover:shadow-purple-600/40 transition-all active:scale-95"
            >
              <span>Explore Projects</span>
              <HiArrowRight className="text-base group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-neutral-900/80 hover:bg-neutral-800 text-neutral-200 hover:text-white font-medium text-sm border border-neutral-700/60 transition-all active:scale-95"
            >
              <span>Get In Touch</span>
            </a>

            <a
              href={CONTACT.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-neutral-900/60 hover:bg-neutral-800 text-neutral-400 hover:text-white border border-neutral-800 transition-all"
              aria-label="GitHub Profile"
            >
              <FaGithub className="text-lg" />
            </a>

            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-neutral-900/60 hover:bg-neutral-800 text-neutral-400 hover:text-cyan-400 border border-neutral-800 transition-all"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="text-lg" />
            </a>
          </motion.div>

          {/* Highlights / Tech Badges */}
          <motion.div
            variants={fadeInUp(0.6)}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-2 border-t border-neutral-800/60 text-xs text-neutral-400 font-mono"
          >
            <span className="text-neutral-500">CORE FOCUS:</span>
            <span className="px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-300">
              AWS Serverless
            </span>
            <span className="px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-300">
              DynamoDB & MySQL
            </span>
            <span className="px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-300">
              TypeScript / Node.js
            </span>
            <span className="px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-300">
              Angular & Capacitor 8
            </span>
            <span className="px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-300">
              WebSockets & WAF
            </span>
          </motion.div>
        </div>

        {/* Right Column: 3D Spline Scene with Non-Blocking Scroll Wrapper */}
        <div className="lg:col-span-5 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full max-w-[480px] h-[360px] sm:h-[420px] lg:h-[480px] rounded-3xl p-1 bg-gradient-to-b from-purple-500/20 via-neutral-900/40 to-transparent border border-white/10 shadow-2xl shadow-purple-950/20 overflow-hidden"
          >
            {/* Ambient inner glow */}
            <div className="absolute inset-0 bg-radial-at-c from-purple-900/10 to-transparent pointer-events-none" />

            {/* Spline 3D Scene with mouse wheel scroll fix */}
            <SplineWrapper
              scene="https://prod.spline.design/PjaLpTFEOcC2oBKs/scene.splinecode"
              className="w-full h-full rounded-[22px]"
            />

            {/* Interactive hint overlay */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
