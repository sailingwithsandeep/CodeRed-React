import React from "react";
import web from "./Assets/web.png";
import ways from "./images/ways.jpg";
import { NavLink } from "react-router-dom";
const Home = () => {
	return (
		<>
			<section id='header' className='d-flex align-items-center'>
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
										Embrace your business <br /> Journey with
										<br />
										<strong className='brand-name'>CodeRed Technology</strong>
									</h1>
									<h2 className='my-3'>
										Group of emerging personalities holds the ability to create
										amazing business comforts
									</h2>
									<div className='mt-3 '>
										<NavLink to='/service' className='btn-get-started'>
											Get Started
										</NavLink>
									</div>
								</div>
								<div className='col-lg-6 order-1 order-lg-2 header-img'>
									<img src={web} className='img-fluid animated' alt='' />
								</div>
							</div>
							<div className='row'>
								<div className='col-lg-6 order-1 order-lg-2 header-img'>
									<img src={ways} className='img-fluid animated' alt='' />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
export default Home;
