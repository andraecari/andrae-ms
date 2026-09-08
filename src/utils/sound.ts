import openMenuClick from "../assets/sound-effects/open-menu-click.mp3";
import inventoryOpen from "../assets/sound-effects/inventory.mp3";
import closeMenu from "../assets/sound-effects/close-menu.mp3";

const SOURCES = {
  openMenu: openMenuClick,
  inventory: inventoryOpen,
  closeMenu: closeMenu,
} as const;

export type SoundName = keyof typeof SOURCES;

const cache = new Map<SoundName, HTMLAudioElement>();

function getAudio(name: SoundName) {
  let audio = cache.get(name);
  if (!audio) {
    audio = new Audio(SOURCES[name]);
    audio.preload = "auto";
    cache.set(name, audio);
  }
  return audio;
}

// One element per sound, rewound on each call so rapid taps retrigger instead of being ignored.
export function playSound(name: SoundName) {
  const audio = getAudio(name);
  audio.currentTime = 0;
  // Browsers reject playback until the first user gesture; nothing to recover from.
  void audio.play().catch(() => {});
}
