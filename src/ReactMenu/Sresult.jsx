import React from "react";

const Sresult = (props) => {
  const img = `https://source.unsplash.com/400x300/?${props.name}`;
  return (
    <>
      <div>
        <img src={img} alt="search" />
      </div>
    </>
  );
};

export default Sresult;
