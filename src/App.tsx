import "../src/css/App.css";
import ProfileCard from "./components/ProfileCard";
import ActivityCard from "./components/activityCard";

function App() {
  return (
    <>
      <div className="col-span-2">
        <ProfileCard name="Jeremy Robson" />
      </div>
      <div className="col-span-2">
        <div className="row">
          <ActivityCard bg="light-orange" />
        </div>
        <div className="row">
          <ActivityCard bg="light-green" />
        </div>
      </div>
      <div className="col-span-2">
        <div className="row">
          <ActivityCard bg="light-blue" />
        </div>
        <div className="row">
          <ActivityCard bg="light-magenta" />
        </div>
      </div>
      <div className="col-span-2">
        <div className="row">
          <ActivityCard bg="light-pink" />
        </div>
        <div className="row">
          <ActivityCard bg="light-yellow" />
        </div>
      </div>
    </>
  );
}

export default App;
