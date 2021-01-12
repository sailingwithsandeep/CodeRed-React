import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto ">
        <div className="card  h-100">
          <div className="card-body text-center align-items-center mx-auto">
            <img
              src={props.imgsrc}
              className="card-img-top"
              alt={props.imgsrc}
            />
            <h5 className="card-title font-weight-bold mt-2">{props.title}</h5>
            <p className="card-text">{props.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
