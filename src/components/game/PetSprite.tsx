import { useEffect, useState } from "react";
import petIdle1 from "../../assets/pets/pet-idle-1.png";
import petIdle2 from "../../assets/pets/pet-idle-2.png";
import petIdle3 from "../../assets/pets/pet-idle-3.png";

const FRAMES = [petIdle1, petIdle2, petIdle3];
const HOLD_MIN_MS = 5000;
const HOLD_MAX_MS = 10000;
// Hold frame 2 for a random duration, then ping-pong 2 -> 3 -> 2 with 500ms between each step.
const FRAME_STEPS = [
  { frame: 1, durationMs: null },
  { frame: 2, durationMs: 500 },
  { frame: 1, durationMs: 500 },
];

function getStepDuration(step: (typeof FRAME_STEPS)[number]) {
  if (step.durationMs !== null) return step.durationMs;
  return HOLD_MIN_MS + Math.random() * (HOLD_MAX_MS - HOLD_MIN_MS);
}

export default function PetSprite() {
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setStepIndex((current) => (current + 1) % FRAME_STEPS.length);
    }, getStepDuration(FRAME_STEPS[stepIndex]));
    return () => window.clearTimeout(timeoutId);
  }, [stepIndex]);

  const frameIndex = FRAME_STEPS[stepIndex].frame;

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
