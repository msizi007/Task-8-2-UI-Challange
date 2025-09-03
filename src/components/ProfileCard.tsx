interface Props {
  name: string;
}

export default function ProfileCard({ name }: Props) {
  return (
    <div className="profile-card">
      <div className="profile-card-header">
        <div className="profile-card-image">
          <img src="src/assets/images/image-jeremy.png" alt="" />
        </div>
        <div className="col">
          <p className="mini">Report for</p>
          <p className="username">{name}</p>
        </div>
      </div>
      <div className="profile-card-body">
        <p>Daily</p>
        <p style={{ color: "white" }}>Weekly</p>
        <p>Monthly</p>
      </div>
    </div>
  );
}
