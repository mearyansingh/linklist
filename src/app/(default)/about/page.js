import Image from "next/image"

export const metadata = {
	title: 'About',
}

function AboutPage() {

	return (
		<div className='container-fluid about-container flex-grow-1'>
			{/* <!-- About Author --> */}
			<section className="py-3 py-md-5">
				<div className="container mb-4 mb-md-5">
					<div className="row justify-content-md-center">
						<div className="col-12 col-md-10 col-xxl-8">
							<Image className="img-fluid rounded shadow w-100" priority={true} src="https://images.unsplash.com/photo-1547321870-675cf91660d5?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="about" width={500} height={500} />
						</div>
					</div>
				</div>
				<div className="container overflow-hidden">
					<div className="row gy-2 gy-md-0 justify-content-xxl-center">
						<div className="col-12 order-md-1 col-md-8 col-xxl-6">
							<div className="text-center text-md-start">
								<h2 className="display-3 fw-bold lh-1">Aryan Singh</h2>
								<p className="text-secondary fs-4 mb-2">Full Stack Developer</p>
								<hr className="w-25 mx-auto ms-md-0 mb-4 text-secondary" />
								<p>I am a full stack developer with a passion for creating user-centric digital experiences that are both beautiful and functional. I have over 2 years of experience in the industry, and I have worked on a wide range of projects, from small startups to large enterprises.</p>
								<p>I believe that the best designs are those that are based on a deep understanding of the user&apos;s needs and goals. I start every project by conducting thorough user research to learn about the user&apos;s pain points, motivations, and expectations. I then use this information to create designs that are both easy to use and enjoyable.</p>
							</div>
						</div>
						<div className="col-12 order-md-0 col-md-4 col-xxl-4">
							<div className="text-center text-md-start me-md-3 me-xl-5">
								<p className="mb-4">
									<span className="d-block display-6 lh-1">2+</span>
									<span className="fs-4 text-secondary">years of experience</span>
								</p>
								<div className="d-grid">
									<button className="btn btn-primary btn-lg" type="button">Portfolio</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- Achievement --> */}
			<section className="py-5 py-xl-8">
				<div className="container">
					<div className="row justify-content-md-center">
						<div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
							<h2 className="mb-4 display-5 text-center">The Finest Design Agency</h2>
							<p className="text-secondary mb-5 text-center lead fs-4">You convey the idea, and we deliver a refined interface.</p>
							<hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
						</div>
					</div>
				</div>
				<div className="container overflow-hidden">
					<div className="row gy-5 gy-md-6 gy-lg-0">
						<div className="col-6 col-lg-3">
							<div className="text-center">
								<div className="d-flex align-items-center justify-content-center bg-primary mb-3 mx-auto bsb-circle">
									<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-people text-white" viewBox="0 0 16 16">
										<path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
									</svg>
								</div>
								<h3 className="display-6 fw-bold m-1">120K</h3>
								<p className="text-secondary m-0">Happy Customers</p>
							</div>
						</div>
						<div className="col-6 col-lg-3">
							<div className="text-center">
								<div className="d-flex align-items-center justify-content-center bg-primary mb-3 mx-auto bsb-circle">
									<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-activity text-white" viewBox="0 0 16 16">
										<path fillrull="evenodd" d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2Z" />
									</svg>
								</div>
								<h3 className="display-6 fw-bold m-1">1890+</h3>
								<p className="text-secondary m-0">Issues Solved</p>
							</div>
						</div>
						<div className="col-6 col-lg-3">
							<div className="text-center">
								<div className="d-flex align-items-center justify-content-center bg-primary mb-3 mx-auto bsb-circle">
									<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-briefcase text-white" viewBox="0 0 16 16">
										<path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z" />
									</svg>
								</div>
								<h3 className="display-6 fw-bold m-1">250K</h3>
								<p className="text-secondary m-0">Finished Projects</p>
							</div>
						</div>
						<div className="col-6 col-lg-3">
							<div className="text-center">
								<div className="d-flex align-items-center justify-content-center bg-primary mb-3 mx-auto bsb-circle">
									<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-award text-white" viewBox="0 0 16 16">
										<path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z" />
										<path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
									</svg>
								</div>
								<h3 className="display-6 fw-bold m-1">786+</h3>
								<p className="text-secondary m-0">Awards Winning</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default AboutPage