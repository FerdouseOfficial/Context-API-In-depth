import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);
  if (!user)
    return (
      <div className="text-center text-2xl mt-4 font-[apple]">
        Please Log In
      </div>
    );

  return (
    <div className="text-center font-semibold tracking-wider mt-4 text-2xl">
      Welcome{" "}
      <span className="font-serif text-bolder text-mauve-600 bg-amber-300 px-4 py-2 rounded m-1">
        {user.username}
      </span>{" "}
      You pass is{" "}
      <span className="font-serif text-bolder text-mauve-600 bg-amber-300 px-4 py-2 rounded m-1">
        {user.password}
      </span>
    </div>
  );
};

export default Profile;
