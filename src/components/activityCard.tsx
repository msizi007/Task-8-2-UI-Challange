import ellipses from "../assets/images/icon-ellipsis.svg";

type Color =
  | "light-pink"
  | "light-blue"
  | "light-orange"
  | "light-green"
  | "light-magenta"
  | "light-yellow";

interface Props {
  bg: Color;
  image: string;
  name: string;
  duration: string;
  last_duration: string;
}

export default function ActivityCard({
  bg,
  image,
  name,
  duration,
  last_duration,
}: Props) {
  return (
    <div className={`activity-card ${bg}`}>
      <img className="icon" src={image} alt="" />
      <div className="activity-card-body">
        <div className="row">
          <p>{name}</p>
          <div className="img-container">
            <img src={ellipses} alt="" width={"100%"} />
          </div>
        </div>
        <div className="period">
          <h4>{duration}</h4>
          <p className="last-duration">Last Week - {last_duration}</p>
        </div>
      </div>
    </div>
  );
}
