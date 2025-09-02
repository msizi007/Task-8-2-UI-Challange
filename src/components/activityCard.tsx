interface Props {
  bg: string;
}
export default function ActivityCard({ bg }: Props) {
  return (
    <div className={`activity-card ${bg}`}>
      <div className="acticity-card-header"></div>
      <div className="activity-card-body"></div>
    </div>
  );
}
