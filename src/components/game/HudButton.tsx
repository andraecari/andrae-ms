import type { WindowType } from "../../types/portfolio";

interface HudButtonProps {
  label: string;
  icon: string;
  windowId: Exclude<WindowType, null>;
  isActive: boolean;
  onToggle: (windowId: Exclude<WindowType, null>) => void;
}

export default function HudButton({
  label,
  icon,
  windowId,
  isActive,
  onToggle,
}: HudButtonProps) {
  return (
    <button
      type="button"
      className={`hud-button hud-button--${windowId}${isActive ? " hud-button--active" : ""}`}
      aria-pressed={isActive}
      aria-label={label}
      onClick={() => onToggle(windowId)}
    >
      <span className="hud-icon-wrapper">
        <img
          className={`hud-icon hud-icon--${windowId}`}
          src={icon}
          alt=""
        />
      </span>
      <span className="hud-label">{label}</span>
    </button>
  );
}
