import torontoWorldBackground from "../../assets/backgrounds/toronto-world.png";
import torontoWorldBackgroundMobile from "../../assets/backgrounds/toronto-world-mobile.png";
import PlayerCharacter from "./PlayerCharacter";
import PetSprite from "./PetSprite";

export default function GameWorld() {
  return (
    <div className="game-world">
      <div
        className="world-background"
        aria-hidden="true"
        style={
          {
            "--bg-desktop": `url(${torontoWorldBackground})`,
            "--bg-mobile": `url(${torontoWorldBackgroundMobile})`,
          } as React.CSSProperties
        }
      />

      <div className="world-stage">
        <PlayerCharacter />
        <PetSprite />
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
