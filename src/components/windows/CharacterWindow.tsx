import { useState } from "react";
import type { KeyboardEvent } from "react";
import type { CharacterStat } from "../../types/portfolio";
import GameWindow from "./GameWindow";
import type { WindowDesktopProps } from "./GameWindow";
import characterIcon from "../../assets/hud/character.png";
import andraeIdle from "../../assets/characters/andrae-idle.png";
import { playSound } from "../../utils/sound";

interface CharacterWindowProps {
  onClose: () => void;
  desktop?: WindowDesktopProps;
}

const stats: CharacterStat[] = [
  { label: "Curiosity", value: 10 },
  { label: "Problem Solving", value: 10 },
  { label: "Creativity", value: 9 },
  { label: "People", value: 9 },
  { label: "Travel", value: 8 },
  { label: "Sleep Schedule", value: 3 },
  { label: "Fall Damage", value: 2 },
];

type CharacterTab = "about" | "stats";

function statTier(value: number) {
  if (value <= 3) return "low";
  if (value <= 5) return "fair";
  if (value <= 7) return "mid";
  if (value === 8) return "good";
  if (value === 9) return "great";
  return "max";
}

const TABS: { id: CharacterTab; label: string }[] = [
  { id: "about", label: "About" },
  { id: "stats", label: "Stats" },
];

export default function CharacterWindow({ onClose, desktop }: CharacterWindowProps) {
  const [activeTab, setActiveTab] = useState<CharacterTab>("about");

  const selectTab = (tabId: CharacterTab) => {
    playSound("openMenu");
    setActiveTab(tabId);
  };

  const handleTabKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    const currentIndex = TABS.findIndex((tab) => tab.id === activeTab);
    const nextIndex =
      event.key === "ArrowRight"
        ? (currentIndex + 1) % TABS.length
        : (currentIndex - 1 + TABS.length) % TABS.length;
    selectTab(TABS[nextIndex].id);
  };

  return (
    <GameWindow
      title="Character"
      icon={characterIcon}
      onClose={onClose}
      titleId="character-window-title"
      desktop={desktop}
    >
      <div className="character-window">
        <div className="character-profile">
          <div className="character-profile__portrait">
            <img
              className="character-profile__sprite"
              src={andraeIdle}
              alt=""
              aria-hidden="true"
            />
          </div>
          <div className="character-profile__info">
            <h3 className="character-profile__name">Andrae Cari</h3>
            <p className="character-profile__role">Software Engineer</p>
            <p className="character-profile__location">Toronto, Canada</p>
            <p className="character-profile__tagline">
              &ldquo;Still figuring things out, but that&apos;s the fun
              part.&rdquo;
            </p>
          </div>
        </div>

        <div className="character-tabs">
          <div
            role="tablist"
            aria-label="Character sections"
            className="character-tabs__list"
            onKeyDown={handleTabKeyDown}
          >
            {TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                id={`character-tab-${tab.id}`}
                aria-selected={activeTab === tab.id}
                aria-controls={`character-panel-${tab.id}`}
                tabIndex={activeTab === tab.id ? 0 : -1}
                className={`character-tabs__tab${
                  activeTab === tab.id ? " character-tabs__tab--active" : ""
                }`}
                onClick={() => selectTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {activeTab === "about" && (
            <div
              role="tabpanel"
              id="character-panel-about"
              aria-labelledby="character-tab-about"
              className="character-tabpanel"
            >
              <p className="character-window__bio">
                I get really into things! If I have an idea or find something interesting, 
                there’s a good chance I’ll go down a rabbit hole trying to learn everything 
                about it or build it myself.
                <br></br><br></br>
                Outside of code, I love travelling, spending time with the 
                people I care about, and firing up the BBQ for everyone!
              </p>
            </div>
          )}

          {activeTab === "stats" && (
            <div
              role="tabpanel"
              id="character-panel-stats"
              aria-labelledby="character-tab-stats"
              className="character-tabpanel"
            >
              <ul className="stat-list">
                {stats.map((stat) => (
                  <li key={stat.label} className="stat-list__item">
                    <span className="stat-list__label">{stat.label}</span>
                    <span
                      className={`stat-list__bar stat-list__bar--tier-${statTier(stat.value)}`}
                      role="img"
                      aria-label={`${stat.label}: ${stat.value} out of 10`}
                    >
                      {Array.from({ length: 10 }, (_, index) => (
                        <span
                          key={index}
                          className={`stat-list__segment${
                            index < stat.value
                              ? " stat-list__segment--filled"
                              : ""
                          }`}
                        />
                      ))}
                    </span>
                    <span className="stat-list__value" aria-hidden="true">
                      {stat.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </GameWindow>
  );
}
