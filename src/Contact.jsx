import React from "react";
import ca from "./images/why.png";

const Mailto = ({ email, subject, body, children }) => {
	return (
		<a
			href={`mailto:${email}?subject=${
				encodeURIComponent(subject) || ""
			}&body=${encodeURIComponent(body) || ""}`}
		>
			{children}
		</a>
	);
};
const Contact = () => {
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
										Got a project,
										<br />
										for us? Feel free
										<br />
										to contact us
										<br />
									</h1>

									<div className='mt-3'>
										<Mailto
											email='coderedtechonology2019@gmail.com'
											subject='Regarding our new adventure'
											body='Hello CodeRed!'
										>
											coderedtechonology2019@gmail.com
										</Mailto>
										
									</div>
								</div>
								<div className='col-lg-6 order-1 order-lg-2 header-img'>
									<img src={ca} className='img-fluid animated' alt='' />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
export default Contact;
