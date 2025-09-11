import lightIcon from "../assets/images/light-mode.png";
import darkIcon from "../assets/images/dark-mode.png";

interface Props {
  value: string;
  onChange: (theme: string) => void;
}
export default function ThemeToggle(props: Props) {
  const { onChange, value } = props;
  return (
    <div className="theme-toggle">
      <button
        className={`light ${value === "light" ? "active" : ""}`}
        onClick={() => onChange("light")}
      >
        <img src={lightIcon} alt="Light Mode" width={"50%"} />
      </button>
      <button
        className={`dark ${value === "dark" ? "active" : ""}`}
        onClick={() => onChange("dark")}
      >
        <img src={darkIcon} alt="Dark Mode" width={"50%"} />
      </button>
    </div>
  );
}
