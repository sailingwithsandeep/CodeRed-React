import React from "react";

const ProjectCard = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto ">
        <div className="card h-100">
            <img
              src={props.imgsrc}
              className="card-img-top p-2"
              alt={props.imgsrc}
              style={{height:"200px", width:"auto", objectFit:"contain"}}
            />
          <div className="card-body text-center align-items-center mx-auto">
            <h5 className="card-title font-weight-bold mt-4">{props.title}</h5>
            <p className="card-text">{props.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProjectCard;
