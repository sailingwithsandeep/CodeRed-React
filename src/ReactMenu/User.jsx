import React from "react";
import { useParams, useLocation, useHistory } from "react-router-dom";

const User = () => {
  const { fname, lname } = useParams();
  const location = useLocation();
  const history = useHistory();
  console.log(history);

  return (
    <>
      <h1>
        user {fname} {lname} page
      </h1>
      <p> My current location is {location.pathname} </p>
      {location.pathname === `/user/vinod/thapa` ? (
        <button onClick={() => history.push("/")}> Homepage </button>
      ) : null}
    </>
  );
};

export default User;
