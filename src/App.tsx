import { useEffect, useState } from "react";
import type { DesktopWindowId, WindowType } from "./types/portfolio";
import { useIsMobile } from "./hooks/useIsMobile";
import { useDesktopWindows } from "./hooks/useDesktopWindows";
import { playSound } from "./utils/sound";
import type { WindowDesktopProps } from "./components/windows/GameWindow";
import GameWorld from "./components/game/GameWorld";
import HUD from "./components/game/HUD";
import RotateDeviceOverlay from "./components/game/RotateDeviceOverlay";
import CharacterWindow from "./components/windows/CharacterWindow";
import QuestWindow from "./components/windows/QuestWindow";
import InventoryWindow from "./components/windows/InventoryWindow";
import WorldMapWindow from "./components/windows/WorldMapWindow";
import MailWindow from "./components/windows/MailWindow";

function App() {
  const isMobile = useIsMobile();

  // Mobile: a single window at a time, replaced (not stacked) on each HUD click.
  const [mobileActiveWindow, setMobileActiveWindow] =
    useState<WindowType>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 600px)");
    const handleChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setMobileActiveWindow((current) => (current === "map" ? null : current));
      }
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Desktop: independently open/closed, positioned, and focusable windows.
  const desktopWindows = useDesktopWindows();

  const handleToggleWindow = (windowId: Exclude<WindowType, null>) => {
    const isOpen = isMobile
      ? mobileActiveWindow === windowId
      : desktopWindows.windows[windowId].open;
    playSound(
      !isOpen && windowId === "inventory" ? "inventory" : "openMenu",
    );

    if (isMobile) {
      setMobileActiveWindow((current) =>
        current === windowId ? null : windowId,
      );
    } else {
      desktopWindows.toggleWindow(windowId);
    }
  };

  const handleMobileClose = () => setMobileActiveWindow(null);

  const getDesktopProps = (id: DesktopWindowId): WindowDesktopProps => {
    const state = desktopWindows.windows[id];
    return {
      x: state.x,
      y: state.y,
      zIndex: state.zIndex,
      onPositionChange: (x, y) => desktopWindows.setWindowPosition(id, x, y),
      onFocus: () => desktopWindows.focusWindow(id),
    };
  };

  return (
    <div className="app">
      <GameWorld />
      <RotateDeviceOverlay />
      <HUD
        activeWindow={isMobile ? mobileActiveWindow : null}
        onToggleWindow={handleToggleWindow}
      />

      {isMobile ? (
        <>
          {mobileActiveWindow === "character" && (
            <CharacterWindow onClose={handleMobileClose} />
          )}
          {mobileActiveWindow === "quests" && (
            <QuestWindow onClose={handleMobileClose} />
          )}
          {mobileActiveWindow === "inventory" && (
            <InventoryWindow onClose={handleMobileClose} />
          )}
          {mobileActiveWindow === "mail" && (
            <MailWindow onClose={handleMobileClose} />
          )}
        </>
      ) : (
        <>
          {desktopWindows.windows.character.open && (
            <CharacterWindow
              onClose={() => desktopWindows.closeWindow("character")}
              desktop={getDesktopProps("character")}
            />
          )}
          {desktopWindows.windows.quests.open && (
            <QuestWindow
              onClose={() => desktopWindows.closeWindow("quests")}
              desktop={getDesktopProps("quests")}
            />
          )}
          {desktopWindows.windows.inventory.open && (
            <InventoryWindow
              onClose={() => desktopWindows.closeWindow("inventory")}
              desktop={getDesktopProps("inventory")}
            />
          )}
          {desktopWindows.windows.map.open && (
            <WorldMapWindow
              onClose={() => desktopWindows.closeWindow("map")}
              desktop={getDesktopProps("map")}
            />
          )}
          {desktopWindows.windows.mail.open && (
            <MailWindow
              onClose={() => desktopWindows.closeWindow("mail")}
              desktop={getDesktopProps("mail")}
            />
          )}
        </>
      )}
    </div>
  );
}

export default App;
