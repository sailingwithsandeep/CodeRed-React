import React from "react";
import web from "../src/images/s1.jpg";
import Card from "./Card";
import Sdata from "../Data";

const Services = (props) => {
	return (
		<>
			<div className='my-5'>
				<h1 className='text-center'> Our Services </h1>
			</div>

			<div className='container-fluid mb-5'>
				<div className='row '>
					<div className='col-10 mx-auto'>
						<div className='row gy-5'>
							{Sdata.map((val, ind) => {
								return <Card imgsrc={val.imgsrc} title={val.title} />;
							})}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Services;
