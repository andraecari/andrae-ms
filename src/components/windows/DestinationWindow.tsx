import type { Destination } from "../../types/portfolio";

interface DestinationWindowProps {
  destination: Destination;
  align: "left" | "right";
  onClose: () => void;
}

// Lightweight floating/bottom-sheet panel, intentionally not the shared GameWindow shell.
export default function DestinationWindow({
  destination,
  align,
  onClose,
}: DestinationWindowProps) {
  return (
    <div
      className={`destination-panel destination-panel--${align}`}
      role="dialog"
      aria-label={destination.name}
    >
      <header className="destination-panel__header">
        <span className="destination-panel__title">{destination.name}</span>
        <button
          type="button"
          className="destination-panel__close"
          aria-label="Close"
          onClick={onClose}
        >
          ✕
        </button>
      </header>
      <div className="destination-panel__body">
        <p className="destination-panel__location">{destination.country}</p>
        <div className="destination-panel__image" aria-hidden="true">
          {destination.image ? (
            <img
              className="destination-panel__image-img"
              src={destination.image}
              alt=""
            />
          ) : (
            <span className="placeholder-label">PHOTO</span>
          )}
        </div>
        {destination.description && (
          <p className="destination-panel__description">
            {destination.description}
          </p>
        )}
      </div>
    </div>
  );
}
