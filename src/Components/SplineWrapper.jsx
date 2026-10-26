import { useRef, useEffect, useState } from 'react';
import Spline from '@splinetool/react-spline';

/**
 * SplineWrapper fixes the issue where hovering over a Spline 3D canvas
 * consumes mouse wheel events and freezes page scrolling.
 *
 * It intercepts the 'wheel' event during the capture phase, prevents Spline's
 * internal camera zoom/scroll interception, and delegates standard scrolling to the window.
 */
const SplineWrapper = ({ scene, className = "", style = {}, onLoad, ...props }) => {
  const containerRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleWheel = (e) => {
      // Prevent Spline's internal camera dolly/zoom from capturing the wheel event
      e.stopPropagation();
      e.preventDefault();

      // Scroll the window by the exact wheel delta for seamless natural scrolling
      window.scrollBy({
        top: e.deltaY,
        left: e.deltaX,
        behavior: 'auto',
      });
    };

    // Use { capture: true, passive: false } to intercept before Spline's internal canvas listeners
    el.addEventListener('wheel', handleWheel, { capture: true, passive: false });

    return () => {
      el.removeEventListener('wheel', handleWheel, { capture: true });
    };
  }, []);

  const handleSplineLoad = (splineApp) => {
    setIsLoaded(true);
    if (onLoad) {
      onLoad(splineApp);
    }
  };

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`} style={style}>
      {/* Sleek loading placeholder while 3D assets download */}
      {!isLoaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-neutral-950/40 backdrop-blur-sm z-10 rounded-2xl">
          <div className="relative flex items-center justify-center">
            <div className="w-12 h-12 rounded-full border-2 border-purple-500/20 border-t-purple-400 animate-spin" />
            <div className="absolute w-6 h-6 rounded-full bg-purple-500/10 blur-sm" />
          </div>
          <span className="text-xs font-mono text-neutral-400 tracking-wider">
            LOADING 3D SCENE...
          </span>
        </div>
      )}

      <Spline 
        scene={scene} 
        onLoad={handleSplineLoad}
        {...props}
      />
    </div>
  );
};

export default SplineWrapper;
