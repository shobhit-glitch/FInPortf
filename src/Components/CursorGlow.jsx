import { useEffect, useRef, useState } from 'react';

/**
 * CursorGlow renders a high-performance ambient cursor glow matching the portfolio's
 * purple/indigo/cyan theme.
 *
 * Uses requestAnimationFrame with linear interpolation (lerp) for smooth trailing
 * and zero React re-render overhead on mouse movement.
 */
const CursorGlow = () => {
  const glowRef = useRef(null);
  const dotRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on devices that support hover (not mobile touch screens)
    if (window.matchMedia('(hover: none)').matches) return;

    let mouseX = -500;
    let mouseY = -500;
    let currentX = -500;
    let currentY = -500;
    let dotX = -500;
    let dotY = -500;
    let animationFrameId = null;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Smooth physics loop
    const animate = () => {
      // Lerp for ambient glow (smooth, slightly delayed trailing effect)
      currentX += (mouseX - currentX) * 0.08;
      currentY += (mouseY - currentY) * 0.08;

      // Faster lerp for inner accent dot
      dotX += (mouseX - dotX) * 0.25;
      dotY += (mouseY - dotY) * 0.25;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${currentX - 250}px, ${currentY - 250}px, 0)`;
      }

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dotX - 16}px, ${dotY - 16}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  return (
    <div 
      className={`pointer-events-none fixed inset-0 z-30 transition-opacity duration-500 overflow-hidden ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      aria-hidden="true"
    >
      {/* Large soft ambient theme glow */}
      <div
        ref={glowRef}
        className="absolute w-[500px] h-[500px] rounded-full [background:radial-gradient(circle,rgba(168,85,247,0.18)_0%,rgba(99,102,241,0.12)_35%,rgba(6,182,212,0.06)_60%,transparent_75%)] blur-[60px] will-change-transform"
        style={{ top: 0, left: 0 }}
      />

      {/* Subtle core accent halo */}
      <div
        ref={dotRef}
        className="absolute w-8 h-8 rounded-full bg-gradient-to-tr from-purple-400/30 to-cyan-400/30 blur-[4px] border border-white/20 will-change-transform shadow-[0_0_20px_rgba(168,85,247,0.4)]"
        style={{ top: 0, left: 0 }}
      />
    </div>
  );
};

export default CursorGlow;
