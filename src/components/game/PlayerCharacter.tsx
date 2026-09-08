import { useEffect, useState } from "react";
import frame1 from "../../assets/characters/andrae-idle/frame-1.png";
import frame2 from "../../assets/characters/andrae-idle/frame-2.png";
import frame3 from "../../assets/characters/andrae-idle/frame-3.png";
import frame4 from "../../assets/characters/andrae-idle/frame-4.png";
import frame5 from "../../assets/characters/andrae-idle/frame-5.png";
import frame6 from "../../assets/characters/andrae-idle/frame-6.png";

const FRAMES = [frame1, frame2, frame3, frame4, frame5, frame6];
const FRAME_DURATION_MS = 120;

export default function PlayerCharacter() {
  const [frameIndex, setFrameIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setFrameIndex((current) => (current + 1) % FRAMES.length);
    }, FRAME_DURATION_MS);
    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <div className="player-character">
      <img
        className="player-character__frame"
        src={FRAMES[frameIndex]}
        alt=""
        aria-hidden="true"
      />
    </div>
  );
}
