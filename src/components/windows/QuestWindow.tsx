import { experience } from "../../data/experience";
import GameWindow from "./GameWindow";
import type { WindowDesktopProps } from "./GameWindow";
import questsIcon from "../../assets/hud/quests.png";
import questCompletedIcon from "../../assets/quests/quest-completed.png";
import questInProgressIcon from "../../assets/quests/quest-in-progress.png";
import questNewsIcon from "../../assets/quests/quest-news.png";

interface QuestWindowProps {
  onClose: () => void;
  desktop?: WindowDesktopProps;
}

export default function QuestWindow({ onClose, desktop }: QuestWindowProps) {
  return (
    <GameWindow
      title="Quests"
      icon={questsIcon}
      onClose={onClose}
      titleId="quests-window-title"
      desktop={desktop}
    >
      <ul className="quest-log">
        {experience.map((entry) => (
          <li key={entry.id} className="quest-log__entry">
            <img
              className="quest-log__icon"
              src={
                entry.status === "completed"
                  ? questCompletedIcon
                  : questInProgressIcon
              }
              alt=""
              aria-hidden="true"
            />
            <span className="quest-log__year">{entry.period}</span>
            <span className="quest-log__details">
              <span className="quest-log__title">{entry.title}</span>
              <span className="quest-log__role">{entry.role}</span>
            </span>
            {entry.newsUrl && (
              <a
                className="quest-log__news"
                href={entry.newsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Read article about ${entry.title}`}
              >
                <img
                  className="quest-log__news-icon"
                  src={questNewsIcon}
                  alt=""
                  aria-hidden="true"
                />
              </a>
            )}
          </li>
        ))}
      </ul>

      <p className="quest-log__flavor">&ldquo;New areas, new challenges.&rdquo;</p>
    </GameWindow>
  );
}
