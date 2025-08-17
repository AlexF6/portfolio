import { useEffect, useRef, useState } from "react";

export default function useActiveSection(ids, pivotRatio = 0.35) {
  const [active, setActive] = useState(ids?.[0] || "");
  const ticking = useRef(false);

  useEffect(() => {
    const compute = () => {
      ticking.current = false;
      const pivotY = window.innerHeight * pivotRatio;

      let found = null;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const { top, bottom } = el.getBoundingClientRect();
        if (top <= pivotY && bottom >= pivotY) { found = id; break; }
      }
      if (found && found !== active) setActive(found);
      else if (!found && ids.length && active !== ids[0]) setActive(ids[0]);
    };

    const onScrollOrResize = () => {
      if (!ticking.current) { ticking.current = true; requestAnimationFrame(compute); }
    };

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    compute();
    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, [ids, pivotRatio, active]);

  const handleAnchorClick = (e) => {
    const href = (e.currentTarget.getAttribute("href") || "").trim();
    if (href.startsWith("#")) {
      e.preventDefault();
      const id = href.slice(1);
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return { active, handleAnchorClick };
}
