import React from "react";
import Card from "./Card";
import Data from "./Data";
const Service = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <h1>Futuristic Software Development Services</h1>
            <p>We cover every aspect of development through our services.</p>
            <div className="row gy-4">
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
export default Service;
