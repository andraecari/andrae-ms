import { useEffect, useLayoutEffect, useRef } from "react";
import type { CSSProperties, PointerEvent as ReactPointerEvent, ReactNode } from "react";
import { playSound } from "../../utils/sound";

// Passed by App only on desktop; its absence means the legacy static/centered mobile layout.
export interface WindowDesktopProps {
  x: number | null;
  y: number | null;
  zIndex: number;
  onPositionChange: (x: number, y: number) => void;
  onFocus: () => void;
}

interface GameWindowProps {
  title: string;
  icon: string;
  onClose: () => void;
  children: ReactNode;
  titleId: string;
  size?: "default" | "large" | "map" | "compact";
  desktop?: WindowDesktopProps;
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), Math.max(min, max));
}

export default function GameWindow({
  title,
  icon,
  onClose,
  children,
  titleId,
  size = "default",
  desktop,
}: GameWindowProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const dragOffsetRef = useRef({ x: 0, y: 0 });

  // Every time this desktop window opens, center it in the viewport.
  useLayoutEffect(() => {
    if (!desktop || desktop.x !== null || desktop.y !== null) return;
    const node = sectionRef.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const left = clamp(
      (window.innerWidth - rect.width) / 2,
      0,
      Math.max(window.innerWidth - rect.width, 0),
    );
    // The map opens a bit higher than dead-center for better visual balance.
    const verticalBias = size === "map" ? window.innerHeight * 0.05 : 0;
    const top = clamp(
      (window.innerHeight - rect.height) / 2 - verticalBias,
      0,
      Math.max(window.innerHeight - rect.height, 0),
    );
    desktop.onPositionChange(left, top);
    // Only re-run when the position resets to "unpositioned" (window reopened).
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [desktop?.x, desktop?.y]);

  // Re-clamp into the viewport whenever the browser is resized.
  useEffect(() => {
    if (!desktop) return;
    const handleResize = () => {
      const node = sectionRef.current;
      if (!node || desktop.x === null || desktop.y === null) return;
      const rect = node.getBoundingClientRect();
      const left = clamp(
        desktop.x,
        0,
        Math.max(window.innerWidth - rect.width, 0),
      );
      const top = clamp(
        desktop.y,
        0,
        Math.max(window.innerHeight - rect.height, 0),
      );
      if (left !== desktop.x || top !== desktop.y) {
        desktop.onPositionChange(left, top);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [desktop]);

  const handleTitlePointerDown = (event: ReactPointerEvent<HTMLElement>) => {
    if (!desktop || event.button !== 0) return;
    // Let the close button behave normally; never start a drag from it.
    if ((event.target as HTMLElement).closest(".game-window__close")) return;
    const node = sectionRef.current;
    if (!node) return;
    desktop.onFocus();
    const rect = node.getBoundingClientRect();
    dragOffsetRef.current = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handleTitlePointerMove = (event: ReactPointerEvent<HTMLElement>) => {
    if (!desktop || !event.currentTarget.hasPointerCapture(event.pointerId)) {
      return;
    }
    const node = sectionRef.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const left = clamp(
      event.clientX - dragOffsetRef.current.x,
      0,
      Math.max(window.innerWidth - rect.width, 0),
    );
    const top = clamp(
      event.clientY - dragOffsetRef.current.y,
      0,
      Math.max(window.innerHeight - rect.height, 0),
    );
    desktop.onPositionChange(left, top);
  };

  const handleTitlePointerUp = (event: ReactPointerEvent<HTMLElement>) => {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  const handleWindowPointerDownCapture = () => {
    desktop?.onFocus();
  };

  const desktopStyle: CSSProperties | undefined = desktop
    ? desktop.x !== null && desktop.y !== null
      ? { position: "fixed", left: desktop.x, top: desktop.y, margin: 0, zIndex: desktop.zIndex }
      : { zIndex: desktop.zIndex }
    : undefined;

  return (
    <div className="game-window-overlay">
      <section
        ref={sectionRef}
        className={`game-window${size !== "default" ? ` game-window--${size}` : ""}`}
        style={desktopStyle}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onPointerDownCapture={handleWindowPointerDownCapture}
      >
        <header
          className="game-window__titlebar"
          onPointerDown={handleTitlePointerDown}
          onPointerMove={handleTitlePointerMove}
          onPointerUp={handleTitlePointerUp}
          onPointerCancel={handleTitlePointerUp}
        >
          <div className="game-window__title-group">
            <img
              className="game-window__title-icon"
              src={icon}
              alt=""
              aria-hidden="true"
            />
            <span id={titleId} className="game-window__title">
              {title}
            </span>
          </div>
          <button
            type="button"
            className="game-window__close"
            aria-label="Close"
            onClick={() => {
              playSound("closeMenu");
              onClose();
            }}
          >
            ✕
          </button>
        </header>
        <div className="game-window__body">{children}</div>
      </section>
    </div>
  );
}
