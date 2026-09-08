import torontoWorldBackground from "../../assets/backgrounds/toronto-world.png";
import torontoWorldBackgroundMobile from "../../assets/backgrounds/toronto-world-mobile.png";
import torontoWorldBackgroundTabletLandscape from "../../assets/backgrounds/toronto-world-tablet-landscape.png";
import torontoWorldBackgroundTabletPortrait from "../../assets/backgrounds/toronto-world-tablet-portrait.png";
import PlayerCharacter from "./PlayerCharacter";
import PetSprite from "./PetSprite";

export default function GameWorld() {
  return (
    <div className="game-world">
      {/* Background image and characters share this frame so both scale/crop together
          as one unit; percentage positions inside it stay pinned to the same spot in
          the art regardless of viewport aspect ratio. */}
      <div className="world-frame">
        <img
          className="world-frame__image world-frame__image--desktop"
          src={torontoWorldBackground}
          alt=""
          aria-hidden="true"
        />
        <img
          className="world-frame__image world-frame__image--tablet-landscape"
          src={torontoWorldBackgroundTabletLandscape}
          alt=""
          aria-hidden="true"
        />
        <img
          className="world-frame__image world-frame__image--tablet-portrait"
          src={torontoWorldBackgroundTabletPortrait}
          alt=""
          aria-hidden="true"
        />
        <img
          className="world-frame__image world-frame__image--mobile"
          src={torontoWorldBackgroundMobile}
          alt=""
          aria-hidden="true"
        />

        <div className="world-stage">
          <PlayerCharacter />
          <PetSprite />
        </div>
      </div>

      <div className="world-intro">
        <h1 className="world-name">
          <span className="world-name__word">Andrae</span>
          <span className="world-name__word">Cari</span>
        </h1>
        <p className="world-subtitle">
          <span className="world-subtitle__word">Software</span>
          <span className="world-subtitle__word">Engineer</span>
        </p>
      </div>
    </div>
  );
}
