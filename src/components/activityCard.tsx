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
}

export default function ActivityCard({ bg, image }: Props) {
  return (
    <div className={`activity-card ${bg}`}>
      <img src={image} alt="" />
      <div className="activity-card-body"></div>
    </div>
  );
}
