import Card from "../../components/Card/Card";
import "./Profile.css";
import { useLocation } from "react-router-dom";

const Profile = ({ setCount, count }) => {
  const location = useLocation();
  console.log(location);

  return (
    <div className="profile">
      profile
      <Card title="Profile" setCount={setCount} count={count} />
      {/* <div>email: {location.state.email}</div> */}
    </div>
  );
};

export default Profile;
