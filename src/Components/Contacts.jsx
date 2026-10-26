import { useState } from 'react';
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaRegCopy, FaCheck } from "react-icons/fa";
import { HiOutlineEnvelope, HiOutlinePhone, HiOutlineMapPin, HiArrowUp, HiOutlinePaperAirplane } from "react-icons/hi2";
import { CONTACT } from "../constants";

const Contacts = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="pt-20 lg:pt-28 pb-12 scroll-mt-20">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-mono text-purple-300 mb-3"
        >
          <span>05. GET IN TOUCH</span>
        </motion.div>

        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4"
        >
          {"Let's Build Something "}
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Remarkable
          </span>
        </motion.h2>

        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base text-neutral-400 max-w-xl mx-auto"
        >
          {"Whether you're exploring high-impact engineering hires, discussing distributed systems, or collaborating on a product idea—I'd love to connect."}
        </motion.p>
      </div>

      {/* Contact Cards Grid */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {/* Email Card */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-6 rounded-3xl bg-neutral-900/40 border border-neutral-800/80 hover:border-purple-500/30 transition-all flex flex-col items-center text-center group"
        >
          <div className="p-3.5 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 text-2xl mb-4 group-hover:scale-110 transition-transform">
            <HiOutlineEnvelope />
          </div>
          <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider mb-1">
            Email Me
          </span>
          <a
            href={`mailto:${CONTACT.email}`}
            className="text-sm font-semibold text-white hover:text-purple-400 transition-colors break-all mb-4"
          >
            {CONTACT.email}
          </a>
          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-xs text-neutral-300 transition-all active:scale-95"
          >
            {copied ? (
              <>
                <FaCheck className="text-emerald-400 text-xs" />
                <span className="text-emerald-400 font-medium">Copied!</span>
              </>
            ) : (
              <>
                <FaRegCopy className="text-xs text-neutral-400" />
                <span>Copy Email</span>
              </>
            )}
          </button>
        </motion.div>

        {/* Location Card */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="p-6 rounded-3xl bg-neutral-900/40 border border-neutral-800/80 hover:border-cyan-500/30 transition-all flex flex-col items-center text-center group"
        >
          <div className="p-3.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-2xl mb-4 group-hover:scale-110 transition-transform">
            <HiOutlineMapPin />
          </div>
          <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider mb-1">
            Location
          </span>
          <span className="text-sm font-semibold text-white mb-2">
            {CONTACT.address}
          </span>
        </motion.div>

        {/* Direct Connect / Phone Card */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-6 rounded-3xl bg-neutral-900/40 border border-neutral-800/80 hover:border-indigo-500/30 transition-all flex flex-col items-center text-center group"
        >
          <div className="p-3.5 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-2xl mb-4 group-hover:scale-110 transition-transform">
            <HiOutlinePhone />
          </div>
          <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider mb-1">
            Phone / WhatsApp
          </span>
          <a
            href={`tel:${CONTACT.phoneNo.replace(/[^+\d]/g, '')}`}
            className="text-sm font-semibold text-white hover:text-indigo-400 transition-colors mb-4"
          >
            {CONTACT.phoneNo}
          </a>
          <a
            href={`mailto:${CONTACT.email}?subject=Opportunity%20Discussion%20with%20Shobhit%20Singh`}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-xs text-neutral-300 transition-all active:scale-95"
          >
            <HiOutlinePaperAirplane className="text-xs text-indigo-400" />
            <span>Quick Message</span>
          </a>
        </motion.div>
      </div>

      {/* Social Profiles Center Bar */}
      <div className="flex items-center justify-center gap-4 mb-16">
        <a
          href={CONTACT.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-neutral-900/60 hover:bg-neutral-800 border border-neutral-800 text-neutral-300 hover:text-white transition-all shadow-sm"
        >
          <FaGithub className="text-xl" />
          <span className="text-xs font-semibold">GitHub</span>
        </a>

        <a
          href={CONTACT.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-neutral-900/60 hover:bg-neutral-800 border border-neutral-800 text-neutral-300 hover:text-cyan-400 transition-all shadow-sm"
        >
          <FaLinkedin className="text-xl" />
          <span className="text-xs font-semibold">LinkedIn</span>
        </a>
      </div>

      {/* Bottom Footer Strip */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-mono">
        <div>
          <span>© {new Date().getFullYear()} Shobhit Singh. All rights reserved.</span>
        </div>

        <div className="flex items-center gap-2">
          <span>Engineered with React • Tailwind • Spline • Motion</span>
        </div>

        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white border border-neutral-800 transition-colors"
          aria-label="Back to top"
        >
          <span>TOP</span>
          <HiArrowUp className="text-xs" />
        </button>
      </div>
    </footer>
  );
};

export default Contacts;
