import React from "react";

const LiveAgentButton = () => {
  return (
    <>
      <button className="glow-btn-orange">
        Live Agent Tracker <span className="star">✦</span>
      </button>

      <style>{`
        .glow-btn-orange {
          position: relative;
          padding: 14px 32px;
          font-size: 15px;
          font-weight: 600;
          color: #ff8a1f;
          background: #fff6ed;
          border: none;
          border-radius: 999px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
          overflow: hidden;
          z-index: 1;
        }

        /* Glowy animated border */
        .glow-btn-orange::before {
          content: "";
          position: absolute;
          inset: -2px;
          border-radius: inherit;
          background: conic-gradient(
            from 270deg,
            transparent 0deg,
            rgba(255,138,31,0.2) 40deg,
            rgba(255,138,31,0.8) 80deg,
            rgba(255,138,31,1) 110deg,
            rgba(255,138,31,0.4) 140deg,
            transparent 170deg
          );
          animation: spin 2.5s linear infinite;
          filter: blur(2px);
          z-index: -2;
        }

        /* Inner mask */
        .glow-btn-orange::after {
          content: "";
          position: absolute;
          inset: 2px;
          background: #fff6ed;
          border-radius: inherit;
          z-index: -1;
        }

        .star {
          font-size: 16px;
          animation: starPulse 1.5s ease-in-out infinite;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes starPulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.3);
          }
        }
      `}</style>
    </>
  );
};

export default LiveAgentButton;
