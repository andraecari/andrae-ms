import { useState } from "react";
import { destinations } from "../../data/destinations";
import GameWindow from "./GameWindow";
import type { WindowDesktopProps } from "./GameWindow";
import DestinationWindow from "./DestinationWindow";
import worldMapIcon from "../../assets/hud/world-map.png";
import worldMapImage from "../../assets/world-map/world-map.png";
import mapMarker from "../../assets/world-map/map-marker.png";
import mapMarkerSelected from "../../assets/world-map/map-marker-selected.png";
import { playSound } from "../../utils/sound";

interface WorldMapWindowProps {
  onClose: () => void;
  desktop?: WindowDesktopProps;
}

export default function WorldMapWindow({ onClose, desktop }: WorldMapWindowProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedDestination =
    destinations.find((destination) => destination.id === selectedId) ?? null;

  const handleSelect = (id: string) => {
    playSound("openMenu");
    setSelectedId((current) => (current === id ? null : id));
  };

  return (
    <GameWindow
      title="World Map"
      icon={worldMapIcon}
      onClose={onClose}
      titleId="map-window-title"
      size="map"
      desktop={desktop}
    >
      <div className="world-map">
        <img
          className="world-map__image"
          src={worldMapImage}
          alt=""
          aria-hidden="true"
        />
        {destinations.map((destination) => {
          const isSelected = destination.id === selectedId;
          return (
            <button
              key={destination.id}
              type="button"
              className="world-map__marker"
              style={{ left: `${destination.x}%`, top: `${destination.y}%` }}
              aria-pressed={isSelected}
              aria-label={`${destination.name}, ${destination.country}`}
              onClick={() => handleSelect(destination.id)}
            >
              <img
                className="world-map__marker-icon"
                src={isSelected ? mapMarkerSelected : mapMarker}
                alt=""
                aria-hidden="true"
              />
            </button>
          );
        })}
        {selectedDestination && (
          <DestinationWindow
            destination={selectedDestination}
            align={selectedDestination.x >= 50 ? "left" : "right"}
            onClose={() => setSelectedId(null)}
          />
        )}
      </div>
    </GameWindow>
  );
}
