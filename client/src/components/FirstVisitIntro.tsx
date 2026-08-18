/* Electric Editorial intro: a short, accessible spark-mark activation shown only on a visitor's first arrival. */
import { useEffect, useState } from "react";
import "./FirstVisitIntro.css";

const INTRO_KEY = "shocking-ai-systems-intro-seen";

export default function FirstVisitIntro() {
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") return false;
    const hasSeenIntro = window.localStorage.getItem(INTRO_KEY) === "true";
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    return !hasSeenIntro && !reducedMotion;
  });
  const [resolving, setResolving] = useState(false);

  const finish = () => {
    window.localStorage.setItem(INTRO_KEY, "true");
    setVisible(false);
  };

  useEffect(() => {
    if (!visible) return;
    const resolveTimer = window.setTimeout(() => setResolving(true), 760);
    const finishTimer = window.setTimeout(finish, 1250);
    return () => {
      window.clearTimeout(resolveTimer);
      window.clearTimeout(finishTimer);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div className={`first-visit-intro ${resolving ? "is-resolving" : ""}`} role="status" aria-live="polite" aria-label="Opening Shocking AI Systems portfolio">
      <div className="intro-index">SHOCKING / 00</div>
      <div className="intro-core">
        <div className="intro-mark"><img src="/manus-storage/shocking-mark_c8e9ac58.png" alt="" /></div>
        <p>AI SYSTEMS / INITIALIZING</p>
        <div className="intro-progress"><span /></div>
      </div>
      <button className="intro-skip" onClick={finish} type="button">Skip intro</button>
    </div>
  );
}
