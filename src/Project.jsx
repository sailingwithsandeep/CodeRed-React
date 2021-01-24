import React from "react";
import Card from "./Card";
import Data from "./ProjectData";

const Project = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Clients</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <h3>Here are our clients and the projects we developed for them...</h3>            
            <div className="mt-2 row gy-4">
              {Data.map((val, index) => {
                return (
                  <Card
                    key={index}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    description={val.description}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Project;
