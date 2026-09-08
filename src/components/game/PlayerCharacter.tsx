import andraeIdle from "../../assets/characters/andrae-idle.png";

export default function PlayerCharacter() {
  return (
    <img
      className="player-character"
      src={andraeIdle}
      alt=""
      aria-hidden="true"
    />
  );
}
