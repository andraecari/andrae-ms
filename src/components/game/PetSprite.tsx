import { useEffect, useState } from "react";
import frame1 from "../../assets/pets/nuri-idle/frame-1.png";
import frame2 from "../../assets/pets/nuri-idle/frame-2.png";
import frame3 from "../../assets/pets/nuri-idle/frame-3.png";
import frame4 from "../../assets/pets/nuri-idle/frame-4.png";

const FRAMES = [frame1, frame2, frame3, frame4];
const FRAME_DURATION_MS = 100;

export default function PetSprite() {
  const [frameIndex, setFrameIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setFrameIndex((current) => (current + 1) % FRAMES.length);
    }, FRAME_DURATION_MS);
    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <div className="pet-sprite">
      <img
        className="pet-sprite__frame"
        src={FRAMES[frameIndex]}
        alt=""
        aria-hidden="true"
      />
    </div>
  );
}
