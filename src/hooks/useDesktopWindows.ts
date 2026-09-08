import { useCallback, useRef, useState } from "react";
import type { DesktopWindowId, DesktopWindowsState } from "../types/portfolio";

const WINDOW_IDS: DesktopWindowId[] = [
  "character",
  "quests",
  "inventory",
  "map",
  "mail",
];

const BASE_Z_INDEX = 10;

function createInitialState(): DesktopWindowsState {
  const state = {} as DesktopWindowsState;
  for (const id of WINDOW_IDS) {
    state[id] = { open: false, x: null, y: null, zIndex: 0 };
  }
  return state;
}

// Centralized desktop window manager: open/closed state, position, and focus (z-index) stacking.
export function useDesktopWindows() {
  const [windows, setWindows] = useState<DesktopWindowsState>(
    createInitialState,
  );
  const zIndexCounter = useRef(BASE_Z_INDEX);

  const focusWindow = useCallback((id: DesktopWindowId) => {
    zIndexCounter.current += 1;
    const zIndex = zIndexCounter.current;
    setWindows((prev) =>
      prev[id].open ? { ...prev, [id]: { ...prev[id], zIndex } } : prev,
    );
  }, []);

  const toggleWindow = useCallback((id: DesktopWindowId) => {
    setWindows((prev) => {
      const current = prev[id];
      if (current.open) {
        return { ...prev, [id]: { ...current, open: false, x: null, y: null } };
      }
      zIndexCounter.current += 1;
      return {
        ...prev,
        [id]: {
          open: true,
          x: null,
          y: null,
          zIndex: zIndexCounter.current,
        },
      };
    });
  }, []);

  const closeWindow = useCallback((id: DesktopWindowId) => {
    setWindows((prev) => ({
      ...prev,
      [id]: { ...prev[id], open: false, x: null, y: null },
    }));
  }, []);

  const setWindowPosition = useCallback(
    (id: DesktopWindowId, x: number, y: number) => {
      setWindows((prev) => ({ ...prev, [id]: { ...prev[id], x, y } }));
    },
    [],
  );

  return { windows, toggleWindow, closeWindow, focusWindow, setWindowPosition };
}
