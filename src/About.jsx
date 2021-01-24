import React from "react";
import web from "./Assets/aboutmain.jpg";

import { NavLink } from "react-router-dom";
const About = () => {
	return (
		<>
			<section id='header' className='d-flex align-items-center mb-5'>
				<div className='container-fluid '>
					<div className='row'>
						<div className='col-10 mx-auto'>
							<div className='row'>
								<div
									className='col-md-6'
									pt-5='true'
									pt-lg-0='true'
									order-2='true'
									order-lg-1='true'
									d-flex
									justify-content-center
									flex-column
								>
									<h1>
										<strong className='brand-name'>About Us</strong>
										<br /> We craft reality
										<br />
									</h1>
									<h2 className='my-3'>
										We are a remote agency based in Rajkot, working with clients
										around the globe. As passionate programmers, we love
										building products that are easy to use, accessible,
										engaging, and delightful.
									</h2>
									<div className='mt-3 '>
										<NavLink to='/contact' className='btn-get-started'>
											Contact Now
										</NavLink>
									</div>
								</div>
								<div className='col-lg-6 order-1 order-lg-2 header-img'>
									<img src={web} className='img-fluid animated' alt='' />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
export default About;
