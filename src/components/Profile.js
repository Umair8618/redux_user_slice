import React from "react";
import { useSelector } from "react-redux"; //useSelector hook is used to access values of states
import ChangeColor from "./ChangeColor";
import Login from "./Login";

const Profile = () => {
  const user = useSelector((state) => state.user.value);
  const themeColor = useSelector((state) => state.theme.value);

  return (
    <>
      <div className="container" style={{ color: themeColor }}>
        <div className="card">
          <div className="image">
            <span>
              <img
                id="userimage"
                src="https://imgur.com/WInwkB8.jpg"
                alt="profile"
              />
            </span>
            <h3>{user.name}</h3>
            <h4>{user.email}</h4>
          </div>
          <div className="arc">
            <span />
          </div>
          <div className="about">
            <p>
              <u>About</u>
            </p>
            <p>{user.about}</p>
          </div>
          <ChangeColor />
          <Login />
        </div>
      </div>
    </>
  );
};

export default Profile;
