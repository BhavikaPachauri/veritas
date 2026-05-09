import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function LearnMoreButton({ title, bg, text }: { title: string; bg: string; text: string }) {
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const circleRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const btn = btnRef.current;
    const circle = circleRef.current;

    if (!btn || !circle) return;

    const DIAMETER = 240;

    gsap.set(circle, {
      width: DIAMETER,
      height: DIAMETER,
      scale: 0,
      xPercent: -50,
      yPercent: -50,
      transformOrigin: "50% 50%",
      pointerEvents: "none",
    });

    const getScaleToCover = (
      bw: number,
      bh: number,
      cx: number,
      cy: number
    ) => {
      const dist1 = Math.hypot(cx, cy);
      const dist2 = Math.hypot(cx - bw, cy);
      const dist3 = Math.hypot(cx, cy - bh);
      const dist4 = Math.hypot(cx - bw, cy - bh);

      const farthest = Math.max(dist1, dist2, dist3, dist4);

      const requiredRadius = farthest;
      const circleRadius = DIAMETER / 2;

      return (requiredRadius / circleRadius) * 1.05;
    };

    const enter = (e: PointerEvent) => {
      const rect = btn.getBoundingClientRect();

      const cx = e.clientX - rect.left;
      const cy = e.clientY - rect.top;

      gsap.set(circle, {
        left: `${cx}px`,
        top: `${cy}px`,
      });

      const scale = getScaleToCover(
        rect.width,
        rect.height,
        cx,
        cy
      );

      gsap.killTweensOf(circle);

      gsap.to(circle, {
        scale,
        duration: 0.5,
        ease: "power3.out",
      });
    };

    const leave = () => {
      gsap.killTweensOf(circle);

      gsap.to(circle, {
        scale: 0,
        duration: 0.45,
        ease: "power3.inOut",
      });
    };

    const handleFocus = () => {
      const rect = btn.getBoundingClientRect();

      const cx = rect.width / 2;
      const cy = rect.height / 2;

      gsap.set(circle, {
        left: `${cx}px`,
        top: `${cy}px`,
      });

      const scale = getScaleToCover(
        rect.width,
        rect.height,
        cx,
        cy
      );

      gsap.killTweensOf(circle);

      gsap.to(circle, {
        scale,
        duration: 0.45,
        ease: "power3.out",
      });
    };

    btn.addEventListener("pointerenter", enter);
    btn.addEventListener("pointerleave", leave);
    btn.addEventListener("focus", handleFocus);
    btn.addEventListener("blur", leave);

    return () => {
      btn.removeEventListener("pointerenter", enter);
      btn.removeEventListener("pointerleave", leave);
      btn.removeEventListener("focus", handleFocus);
      btn.removeEventListener("blur", leave);
    };
  }, []);

  return (
    <button
      ref={btnRef}
      type="button"
      tabIndex={0}
      className={
        `
         ${bg} ${text} relative overflow-hidden inline-flex items-center gap-2 px-6 py-3   font-medium hover:text-black transition-colors duration-300`
      }


    >
      {/* Animated Circle */}
      <span
        ref={circleRef}
        aria-hidden="true"
        className="absolute  bg-white z-0"
      />

      {/* Button Text */}
      <span className="flex items-center justify-center gap-2  relative z-10">
        {title} <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_216_113)">
            <path d="M10.195 13.8297L15 8.99974L10.195 4.16974C10.1516 4.11275 10.0965 4.06575 10.0333 4.03192C9.9702 3.9981 9.90053 3.97823 9.82904 3.97367C9.75756 3.96911 9.68593 3.97996 9.61901 4.00549C9.55208 4.03102 9.49142 4.07063 9.44114 4.12164C9.39085 4.17265 9.35211 4.23387 9.32754 4.30115C9.30297 4.36843 9.29315 4.44021 9.29873 4.51162C9.30431 4.58303 9.32517 4.65241 9.35989 4.71505C9.39462 4.7777 9.4424 4.83216 9.5 4.87474L13.095 8.49974H3.53C3.39739 8.49974 3.27022 8.55241 3.17645 8.64618C3.08268 8.73995 3.03 8.86713 3.03 8.99974C3.03 9.13234 3.08268 9.25952 3.17645 9.35329C3.27022 9.44706 3.39739 9.49974 3.53 9.49974H13.095L9.5 13.1247C9.40651 13.2189 9.35425 13.3463 9.35472 13.479C9.35519 13.6117 9.40835 13.7387 9.5025 13.8322C9.59665 13.9257 9.72409 13.978 9.85677 13.9775C9.98945 13.977 10.1165 13.9239 10.21 13.8297H10.195Z" fill="#001025" />
          </g>
          <defs>
            <clipPath id="clip0_216_113">
              <rect width="18" height="18" fill="white" transform="matrix(0 1 -1 0 18 0)" />
            </clipPath>
          </defs>
        </svg>

      </span>
    </button>
  );
}