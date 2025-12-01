import * as React from "react";
import "./Preloader.css";
import {SKILL_MODULES} from "../../data";

const Preloader = () => {
  const [loading, setLoading] = React.useState(true);
  const onComplete = React.useCallback(() => setLoading(false), [setLoading]);
  const [progress, setProgress] = React.useState(0);
  const [textIndex, setTextIndex] = React.useState(0);
  const [mousePos, setMousePos] = React.useState({x: 0, y: 0});
  const [isExiting, setIsExiting] = React.useState(false);

  const loadedRef = React.useRef(false);

  React.useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({x: e.clientX, y: e.clientY});
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  React.useEffect(() => {
    const totalTime = 2500;
    const intervalTime = 30;
    const steps = totalTime / intervalTime;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;

        const percentIndex = Math.floor((next / 100) * SKILL_MODULES.length);
        setTextIndex(Math.min(percentIndex, SKILL_MODULES.length - 1));

        if (next >= 100) {
          clearInterval(timer);
          loadedRef.current = true;
          setTimeout(() => setIsExiting(true), 500);
          setTimeout(() => onComplete(), 1300);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  if (!loading) return null;

  return (
    <div className={`preloader-container ${isExiting ? "fade-out" : ""}`}>
      {/* Background Grid */}
      <div className="preloader-grid"></div>

      {/* Interactive Spotlight */}
      <div
        className="spotlight"
        style={{left: mousePos.x, top: mousePos.y}}
      ></div>

      {/* Main Content */}
      <div className="preloader-content">
        {/* The Boot Sequence Text */}
        <div className="boot-sequence">
          <span>{`> ${SKILL_MODULES[textIndex]}`}</span>
          <div className="percentage">{Math.round(progress)}%</div>
        </div>

        {/* Progress Bar */}
        <div className="progress-wrapper">
          <div className="progress-bar" style={{width: `${progress}%`}}></div>
        </div>

        <div className="status-text">
          <span>System: {progress < 100 ? "Booting" : "Online"}</span>
          <span>{progress < 100 ? "..." : "Ready"}</span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
