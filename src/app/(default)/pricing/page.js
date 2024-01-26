import Link from "next/link"

export const metadata = {
	title: 'Pricing',
}

function PricingPage() {
	return (
		<div className='container-fluid pricing-container'>
			<section className="bsb-pricing-3 py-5 py-xl-8">
				<div className="container">
					<div className="row justify-content-md-center">
						<div className="col-12 col-md-10 col-lg-8 col-xl-7">
							<h3 className="fs-5 mb-2 text-secondary text-center text-uppercase">Our Pricing</h3>
							<h2 className="display-5 mb-5 mb-xl-9 text-center">We offer simple, reasonable, and diaphanous pricing plans.</h2>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="container-fluid bg-light border pb-4 mt-md-5 shadow">
								<div className="row">
									<div className="col-12 col-md-4">
										<div className="card border-0 bg-transparent">
											<div className="card-body p-4 p-xxl-5">
												<h2 className="h4 mb-2">Starter</h2>
												<p className="text-secondary m-0">Free, forever</p>
												<hr className="my-4 border-dark-subtle" />
												<h3 className="display-3 fw-bold text-primary m-0">Rs.0</h3>
												<p className="text-secondary m-0">Rs / Month</p>
												<div className="d-grid gap-2 my-4">
													<Link href='/' className="btn btn-lg btn-outline-primary" role="button">Join for free</Link>
												</div>
												<ul className="list-group list-group-flush m-0">
													<li className="list-group-item bg-transparent">
														<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
															<path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
														</svg>
														<span>Social icons</span>
													</li>
													<li className="list-group-item bg-transparent">
														<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
															<path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
														</svg>
														<span>Unlimited links</span>
													</li>
													<li className="list-group-item bg-transparent">
														<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
															<path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
														</svg>
														<span>Custom profile picture + bio description</span>
													</li>
													<li className="list-group-item bg-transparent">
														<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-x text-danger" viewBox="0 0 16 16">
															<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
														</svg>
														<span>Individual <strong>Link analytics</strong></span>
													</li>
													<li className="list-group-item bg-transparent">
														<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-x text-danger" viewBox="0 0 16 16">
															<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
														</svg>
														<span>Free <strong>Support</strong></span>
													</li>
													<li className="list-group-item bg-transparent">
														<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-x text-danger" viewBox="0 0 16 16">
															<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
														</svg>
														<span><strong>Weekly</strong> Reports</span>
													</li>
												</ul>
											</div>
										</div>
									</div>
									<div className="col-12 col-md-4">
										<div className="card bg-white border-0 border-top pt-md-6 shadow-sm bsb-pricing-popular">
											<div className="card-body position-relative p-4 p-xxl-5">
												<span className="badge text-bg-warning position-absolute top-0 start-50 translate-middle">Most Popular</span>
												<h2 className="h4 mb-2">Starter</h2>
												<p className="text-secondary m-0">30-day money back gurantee</p>
												<hr className="my-4 border-dark-subtle" />
												<h3 className="display-3 fw-bold text-primary m-0">Rs.250</h3>
												<p className="text-secondary m-0">Rs / Month</p>
												<div className="d-grid gap-2 my-4">
													<Link href='/' className="btn btn-lg btn-primary">Choose Plan</Link>
												</div>
												<ul className="list-group list-group-flush m-0">
													<li className="list-group-item">
														<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
															<path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
														</svg>
														<span>Social icons</span>
													</li>
													<li className="list-group-item">
														<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
															<path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
														</svg>
														<span>Unlimited links</span>
													</li>
													<li className="list-group-item">
														<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
															<path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
														</svg>
														<span>Custom profile picture + bio description</span>
													</li>
													<li className="list-group-item">
														<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
															<path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
														</svg>
														<span>Individual <strong>Link analytics</strong></span>
													</li>
													<li className="list-group-item">
														<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
															<path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
														</svg>
														<span>Free <strong>Support</strong></span>
													</li>
													<li className="list-group-item">
														<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-x text-danger" viewBox="0 0 16 16">
															<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
														</svg>
														<span><strong>Weekly</strong> Reports</span>
													</li>
												</ul>
											</div>
										</div>
									</div>
									<div className="col-12 col-md-4">
										<div className="card border-0 bg-transparent">
											<div className="card-body p-4 p-xxl-5">
												<h2 className="h4 mb-2">Pro</h2>
												<p className="text-secondary m-0">Free for 7 days</p>
												<hr className="my-4 border-dark-subtle" />
												<h3 className="display-3 fw-bold text-primary m-0">Rs.450</h3>
												<p className="text-secondary m-0">Rs / Month</p>
												<div className="d-grid gap-2 my-4">
													<Link href='/' className="btn btn-lg btn-outline-primary">Choose Plan</Link>
												</div>
												<ul className="list-group list-group-flush m-0">
													<li className="list-group-item bg-transparent">
														<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
															<path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
														</svg>
														<span>Social icons</span>
													</li>
													<li className="list-group-item bg-transparent">
														<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
															<path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
														</svg>
														<span>Unlimited links</span>
													</li>
													<li className="list-group-item bg-transparent">
														<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
															<path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
														</svg>
														<span>Custom profile picture + bio description</span>
													</li>
													<li className="list-group-item bg-transparent">
														<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
															<path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
														</svg>
														<span>Individual <strong>Link analytics</strong></span>
													</li>
													<li className="list-group-item bg-transparent">
														<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
															<path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
														</svg>
														<span>Free <strong>Support</strong></span>
													</li>
													<li className="list-group-item bg-transparent">
														<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
															<path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
														</svg>
														<span><strong>Weekly</strong> Reports</span>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default PricingPage