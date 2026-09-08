import type { WindowType } from "../../types/portfolio";
import HudButton from "./HudButton";
import characterIcon from "../../assets/hud/character.png";
import questsIcon from "../../assets/hud/quests.png";
import inventoryIcon from "../../assets/hud/inventory.png";
import worldMapIcon from "../../assets/hud/world-map.png";
import mailIcon from "../../assets/hud/mail.png";

interface HudProps {
  activeWindow: WindowType;
  onToggleWindow: (windowId: Exclude<WindowType, null>) => void;
}

const HUD_ITEMS: {
  windowId: Exclude<WindowType, null>;
  label: string;
  icon: string;
}[] = [
  { windowId: "character", label: "Character", icon: characterIcon },
  { windowId: "quests", label: "Quests", icon: questsIcon },
  { windowId: "inventory", label: "Inventory", icon: inventoryIcon },
  { windowId: "map", label: "World Map", icon: worldMapIcon },
  { windowId: "mail", label: "Mail", icon: mailIcon },
];

export default function HUD({ activeWindow, onToggleWindow }: HudProps) {
  return (
    <nav className="hud" aria-label="Game menu">
      {HUD_ITEMS.map((item) => (
        <HudButton
          key={item.windowId}
          label={item.label}
          icon={item.icon}
          windowId={item.windowId}
          isActive={activeWindow === item.windowId}
          onToggle={onToggleWindow}
        />
      ))}
    </nav>
  );
}
