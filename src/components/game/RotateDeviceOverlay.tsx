import rotatePhoneIcon from "../../assets/ui/rotate-phone.png";

// Pure-CSS media query drives visibility, so this stays in sync with orientation changes automatically.
export default function RotateDeviceOverlay() {
  return (
    <div className="rotate-overlay" role="alert">
      <img
        className="rotate-overlay__icon"
        src={rotatePhoneIcon}
        alt=""
        aria-hidden="true"
      />
      <p className="rotate-overlay__title">Please rotate your device</p>
      <p className="rotate-overlay__subtitle">
        This experience works best in portrait.
      </p>
    </div>
  );
}
