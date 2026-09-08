import { useEffect, useRef, useState } from "react";
import idle1 from "../../assets/characters/andrae-idle/frame-1.png";
import idle2 from "../../assets/characters/andrae-idle/frame-2.png";
import idle3 from "../../assets/characters/andrae-idle/frame-3.png";
import idle4 from "../../assets/characters/andrae-idle/frame-4.png";
import idle5 from "../../assets/characters/andrae-idle/frame-5.png";
import idle6 from "../../assets/characters/andrae-idle/frame-6.png";
import walk1 from "../../assets/characters/andrae-walking/frame-1.png";
import walk2 from "../../assets/characters/andrae-walking/frame-2.png";
import walk3 from "../../assets/characters/andrae-walking/frame-3.png";
import walk4 from "../../assets/characters/andrae-walking/frame-4.png";
import jump1 from "../../assets/characters/andrae-jumping/frame-1.png";
import jump2 from "../../assets/characters/andrae-jumping/frame-2.png";
import jump3 from "../../assets/characters/andrae-jumping/frame-3.png";
import jump4 from "../../assets/characters/andrae-jumping/frame-4.png";
import prone1 from "../../assets/characters/andrae-prone/frame-1.png";
import prone2 from "../../assets/characters/andrae-prone/frame-2.png";
import prone3 from "../../assets/characters/andrae-prone/frame-3.png";
import prone4 from "../../assets/characters/andrae-prone/frame-4.png";

// Keyboard control is desktop-only; 769px keeps it clear of the mobile sprite styling.
const DESKTOP_QUERY = "(min-width: 769px) and (hover: hover) and (pointer: fine)";

const MOVE_SPEED_PX_PER_S = 280;
const PRONE_MOVE_SPEED_PX_PER_S = 110;
const JUMP_VELOCITY_PX_PER_S = 640;
const GRAVITY_PX_PER_S2 = 1900;
// How far the sprite box may overhang the viewport, as a share of its width. It matches
// each sequence's transparent side padding so the visible body reaches the screen edge.
const EDGE_OVERHANG_RATIO = 0.28;
const PRONE_EDGE_OVERHANG_RATIO = 0.03;

const SEQUENCES = {
  idle: { frames: [idle1, idle2, idle3, idle4, idle5, idle6], frameMs: 120, loop: true },
  walk: { frames: [walk1, walk2, walk3, walk4], frameMs: 110, loop: true },
  jump: { frames: [jump1, jump2, jump3, jump4], frameMs: 130, loop: false },
  crawl: { frames: [prone1, prone2, prone3, prone4], frameMs: 170, loop: true },
  prone: { frames: [prone1], frameMs: 1000, loop: false },
} as const;

type Mode = keyof typeof SEQUENCES;

const PRONE_MODES: ReadonlySet<Mode> = new Set<Mode>(["prone", "crawl"]);

function isTypingTarget(target: EventTarget | null) {
  const element = target as HTMLElement | null;
  if (!element) return false;
  const tag = element.tagName;
  return (
    tag === "INPUT" ||
    tag === "TEXTAREA" ||
    tag === "SELECT" ||
    element.isContentEditable
  );
}

export default function PlayerCharacter() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const keysRef = useRef({ left: false, right: false, down: false });
  const jumpRequestRef = useRef(false);
  const bodyRef = useRef({ x: 0, y: 0, velocityY: 0, airborne: false });

  const [controlsEnabled, setControlsEnabled] = useState(
    () => window.matchMedia(DESKTOP_QUERY).matches,
  );
  const [mode, setMode] = useState<Mode>("idle");
  const [frameIndex, setFrameIndex] = useState(0);
  // Source frames face left, so the default right-facing pose starts flipped.
  const [facingRight, setFacingRight] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia(DESKTOP_QUERY);
    const handleChange = () => setControlsEnabled(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (!controlsEnabled) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (isTypingTarget(event.target)) return;
      const key = event.key.toLowerCase();
      if (key === "a") {
        keysRef.current.left = true;
      } else if (key === "d") {
        keysRef.current.right = true;
      } else if (key === "s") {
        keysRef.current.down = true;
      } else if (key === "w" || event.code === "Space") {
        event.preventDefault();
        if (!event.repeat) jumpRequestRef.current = true;
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      if (key === "a") keysRef.current.left = false;
      else if (key === "d") keysRef.current.right = false;
      else if (key === "s") keysRef.current.down = false;
    };

    const handleBlur = () => {
      keysRef.current.left = false;
      keysRef.current.right = false;
      keysRef.current.down = false;
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    window.addEventListener("blur", handleBlur);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      window.removeEventListener("blur", handleBlur);
      handleBlur();
    };
  }, [controlsEnabled]);

  useEffect(() => {
    const body = bodyRef.current;
    if (!controlsEnabled) {
      body.x = 0;
      body.y = 0;
      body.velocityY = 0;
      body.airborne = false;
      if (containerRef.current) containerRef.current.style.transform = "";
    }

    let frameId = 0;
    let lastTime = performance.now();
    let sequenceStart = lastTime;
    let currentMode: Mode = "idle";
    let currentFrame = 0;
    let currentFacingRight = true;
    let appliedX = 0;

    const step = (now: number) => {
      frameId = window.requestAnimationFrame(step);
      const delta = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;

      let direction = 0;
      let prone = false;
      if (controlsEnabled) {
        direction =
          (keysRef.current.right ? 1 : 0) - (keysRef.current.left ? 1 : 0);
        prone = keysRef.current.down && !body.airborne;

        if (jumpRequestRef.current) {
          jumpRequestRef.current = false;
          if (!body.airborne && !prone) {
            body.velocityY = JUMP_VELOCITY_PX_PER_S;
            body.airborne = true;
          }
        }

        if (body.airborne) {
          body.velocityY -= GRAVITY_PX_PER_S2 * delta;
          body.y += body.velocityY * delta;
          if (body.y <= 0) {
            body.y = 0;
            body.velocityY = 0;
            body.airborne = false;
          }
        }

        const node = containerRef.current;
        if (node) {
          const speed = prone ? PRONE_MOVE_SPEED_PX_PER_S : MOVE_SPEED_PX_PER_S;
          body.x += direction * speed * delta;

          const rect = node.getBoundingClientRect();
          const overhang =
            rect.width *
            (prone ? PRONE_EDGE_OVERHANG_RATIO : EDGE_OVERHANG_RATIO);
          const baseLeft = rect.left - appliedX;
          const minX = -overhang - baseLeft;
          const maxX = window.innerWidth + overhang - rect.width - baseLeft;
          body.x = Math.min(Math.max(body.x, minX), Math.max(minX, maxX));

          appliedX = body.x;
          node.style.transform = `translate3d(${body.x}px, ${-body.y}px, 0)`;
        }

        if (direction !== 0 && (direction > 0) !== currentFacingRight) {
          currentFacingRight = direction > 0;
          setFacingRight(currentFacingRight);
        }
      }

      const nextMode: Mode = !controlsEnabled
        ? "idle"
        : body.airborne
          ? "jump"
          : prone
            ? direction !== 0
              ? "crawl"
              : "prone"
            : direction !== 0
              ? "walk"
              : "idle";

      if (nextMode !== currentMode) {
        currentMode = nextMode;
        sequenceStart = now;
        currentFrame = 0;
        setMode(nextMode);
        setFrameIndex(0);
      }

      const sequence = SEQUENCES[currentMode];
      const rawIndex = Math.floor((now - sequenceStart) / sequence.frameMs);
      const nextFrame = sequence.loop
        ? rawIndex % sequence.frames.length
        : Math.min(rawIndex, sequence.frames.length - 1);
      if (nextFrame !== currentFrame) {
        currentFrame = nextFrame;
        setFrameIndex(nextFrame);
      }
    };

    frameId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(frameId);
  }, [controlsEnabled]);

  const frames = SEQUENCES[mode].frames;
  const frameClass = [
    "player-character__frame",
    PRONE_MODES.has(mode) ? "player-character__frame--prone" : "",
    facingRight ? "player-character__frame--flipped" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="player-character" ref={containerRef}>
      <img
        className={frameClass}
        src={frames[Math.min(frameIndex, frames.length - 1)]}
        alt=""
        aria-hidden="true"
      />
    </div>
  );
}
