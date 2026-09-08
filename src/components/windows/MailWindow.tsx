import GameWindow from "./GameWindow";
import type { WindowDesktopProps } from "./GameWindow";
import mailIcon from "../../assets/hud/mail.png";
import linkedinIcon from "../../assets/mail/linkedin.png";
import githubIcon from "../../assets/mail/github.png";
import emailIcon from "../../assets/mail/email.png";

interface MailWindowProps {
  onClose: () => void;
  desktop?: WindowDesktopProps;
}

// PLACEHOLDER: replace with real LinkedIn profile URL
const LINKEDIN_URL = "https://www.linkedin.com/in/andrae-cari/";
// PLACEHOLDER: replace with real GitHub profile URL
const GITHUB_URL = "https://github.com/andraecari";
// PLACEHOLDER: replace with real email address
const EMAIL_ADDRESS = "andraecari25@gmail.com";

const contactLinks = [
  {
    label: "LinkedIn",
    icon: linkedinIcon,
    href: LINKEDIN_URL,
    ariaLabel: "Open LinkedIn profile in a new tab",
    external: true,
  },
  {
    label: "GitHub",
    icon: githubIcon,
    href: GITHUB_URL,
    ariaLabel: "Open GitHub profile in a new tab",
    external: true,
  },
  {
    label: "Email",
    icon: emailIcon,
    href: `mailto:${EMAIL_ADDRESS}`,
    ariaLabel: "Send an email",
    external: false,
  },
];

export default function MailWindow({ onClose, desktop }: MailWindowProps) {
  return (
    <GameWindow
      title="Mail"
      icon={mailIcon}
      onClose={onClose}
      titleId="mail-window-title"
      size="compact"
      desktop={desktop}
    >
      <div className="mail-window">
        <p className="mail-window__intro">
          <strong>You&apos;ve got mail!</strong> Reach out anytime:
        </p>
        <div className="mail-window__buttons">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              className="mail-button"
              href={link.href}
              aria-label={link.ariaLabel}
              {...(link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              <img
                className="mail-button__icon"
                src={link.icon}
                alt=""
                aria-hidden="true"
              />
              <span className="mail-button__label">{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </GameWindow>
  );
}
