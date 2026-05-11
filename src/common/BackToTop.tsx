import { useEffect, useState } from "react";

function BackToTop() {
  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!backToTop) return null;

  return (
    <>
      <button
        onClick={scrollToTop}
        className="button"
        aria-label="Back to top"
      >
        <svg className="svgIcon" viewBox="0 0 384 512">
          <path
            d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
          />
        </svg>
      </button>

      <style>{`
        .button {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background-color: #667C99;
          border: none;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0px 0px 0px 4px rgba(180, 160, 255, 0.253);
          cursor: pointer;
          transition: all 0.3s ease;
          overflow: hidden;
          position: fixed;
          bottom: 100px;
          right: 30px;
          z-index: 999;
        }

        .svgIcon {
          width: 12px;
          transition: all 0.3s ease;
        }

        .svgIcon path {
          fill: white;
        }

        .button:hover {
          width: 140px;
          border-radius: 50px;
          background-color: #ABC4E4;
        }

        .button:hover .svgIcon {
          transform: translateY(-200%);
        }

        .button::before {
          position: absolute;
          content: "Back to Top";
          color: white;
          font-size: 0px;
          transition: all 0.3s ease;
        }

        .button:hover::before {
          font-size: 13px;
        }
      `}</style>
    </>
  );
}

export default BackToTop;