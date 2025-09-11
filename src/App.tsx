import "../src/css/App.css";
import ProfileCard from "./components/ProfileCard";
import ActivityCard from "./components/activityCard";
import ThemeToggle from "./components/themeToggle";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("dark");

  {
    document.querySelector("body")!.className = theme;
  }

  return (
    <>
      <div className="col-span-2">
        <ThemeToggle value={theme} onChange={setTheme} />
        <ProfileCard name="Jeremy Robson" />
      </div>
      <div className="col-span-2">
        <div className="row">
          <ActivityCard
            bg="light-orange"
            image="../src/assets/images/icon-work.svg"
            name="Work"
            duration="32hrs"
            last_duration="36hrs"
          />
        </div>
        <div className="row">
          <ActivityCard
            bg="light-green"
            image="../src/assets/images/icon-exercise.svg"
            name="Exercise"
            duration="4hrs"
            last_duration="5hrs"
          />
        </div>
      </div>
      <div className="col-span-2">
        <div className="row">
          <ActivityCard
            bg="light-blue"
            image="../src/assets/images/icon-play.svg"
            name="Play"
            duration="10hrs"
            last_duration="8hrs"
          />
        </div>
        <div className="row">
          <ActivityCard
            bg="light-magenta"
            image="../src/assets/images/icon-social.svg"
            name="Social"
            duration="5hrs"
            last_duration="10hrs"
          />
        </div>
      </div>
      <div className="col-span-2">
        <div className="row">
          <ActivityCard
            bg="light-pink"
            image="../src/assets/images/icon-study.svg"
            name="Study"
            duration="4hrs"
            last_duration="2hrs"
          />
        </div>
        <div className="row">
          <ActivityCard
            bg="light-yellow"
            image="../src/assets/images/icon-self-care.svg"
            name="Self Care"
            duration="2hrs"
            last_duration="2hrs"
          />
        </div>
      </div>
    </>
  );
}

export default App;
