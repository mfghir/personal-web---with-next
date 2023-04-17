import { ArrowUp2 } from "iconsax-react";
import { useEffect, useState } from "react";

const GoTopButton = () => {
  const [showGoTop, setShowGoTop] = useState(false);

  const handleVisibleButton = () => {
    setShowGoTop(window.pageYOffset > 1000);
  };

  const handleScrollUp = () => {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleVisibleButton);
  }, []);

  return (
    <>
      <button
        type="button"
        className={showGoTop ? "goTop" : "goTopHidden"}
        onClick={handleScrollUp}
      >
        <ArrowUp2 />
      </button>

      <style jsx>{`
        .goTopHidden {
          opacity: 0;
          display: none;
          animation: slide-down 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        }

        .goTop {
          display: flex;
          justify-content: center;
          align-items: center;

          position: fixed;
          background: #daa520;
          color: #171717;

          width: 30px;
          height: 30px;
          border-radius: 25px;

          outline: none;
          border: none;
          font-size: 22px;

          right: 24px;
          cursor: pointer;
          animation: slide-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

          transition: 0.4s;
          z-index: 99;
        }

        .goTop:hover {
          color: #daa520;
          background: #171717;
        }

        @keyframes slide-top {
          0% {
            opacity: 0;
            bottom: -2%;
          }

          100% {
            opacity: 1;
            bottom: 5%;
          }
        }

        @keyframes slide-down {
          0% {
            opacity: 1;
            bottom: 5%;
          }

          100% {
            opacity: 0;
            bottom: -2%;
          }
        }
      `}</style>
    </>
  );
};

export default GoTopButton;
