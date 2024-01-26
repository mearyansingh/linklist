import Image from "next/image"
import Link from 'next/link'

export const metadata = {
	title: 'Features',
}

function FeaturesPage() {
	return (
		<div className='features-container'>
			{/* <!-- Start with easy process --> */}
			<section className="py-3 py-md-5 py-xl-8" >
				<div className="container">
					<div className="row gy-5 gy-lg-0 align-items-lg-center">
						<div className="col-12 col-lg-6">
							<Image className="img-fluid rounded w-100" priority={true} src="https://images.unsplash.com/photo-1525342631975-cfc922fe0b05?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Our Design Process" width={500} height={500} />
						</div>
						<div className="col-12 col-lg-6">
							<div className="row justify-content-xl-end">
								<div className="col-12 col-xl-11">
									<h2 className="h1 mb-3">Get started with easy steps</h2>
									<p className="lead fs-4 text-secondary mb-5">Follow the below mentioned steps to get started.</p>
									<div className="d-flex mb-4">
										<div>
											<span className="btn btn-primary bsb-btn-circle pe-none me-4">1</span>
										</div>
										<div>
											<h2 className="mb-3 fs-4">Take username</h2>
											<p className="mb-0 text-secondary">Choose your desired username and click on join for free.</p>
										</div>
									</div>
									<div className="d-flex mb-4">
										<div>
											<span className="btn btn-primary bsb-btn-circle pe-none me-4">2</span>
										</div>
										<div>
											<h2 className="mb-3 fs-4">Customization</h2>
											<p className="mb-0 text-secondary">Customize your page with your name, location, bio etc. Choose your favorite social media platform that you want to share. If you want to share custom link then you can customize as well.</p>
										</div>
									</div>
									<div className="d-flex">
										<div>
											<span className="btn btn-primary bsb-btn-circle pe-none me-4">3</span>
										</div>
										<div>
											<h2 className="mb-3 fs-4">That&apos;s it</h2>
											<p className="mb-0 text-secondary">Now click on Preview/username to preview your page and Add your unique LinkList URL to all the platforms and places you find your audience.</p>
										</div>
									</div>
									<div className='d-flex align-items-center justify-content-center mt-4'>
										<Link href='/' className='btn btn-primary ' role="button">Get Started</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section >
			{/* <!-- What we offer  --> */}
			<section className="py-3 py-md-5 py-xl-8">
				<div className="container overflow-hidden">
					<div className="row gy-4 gy-md-5 gy-lg-0 align-items-center">
						<div className="col-12 col-lg-5">
							<div className="row">
								<div className="col-12 col-xl-11">
									<h3 className="fs-6 text-secondary mb-3 mb-xl-4 text-uppercase">Features</h3>
									<h2 className="display-5 mb-3 mb-xl-4">Create and customize your LinkList in minutes.</h2>
									<p className="mb-3 mb-xl-4">Connect your TikTok, Instagram, Twitter, website, store, videos, music, podcast, events and more. It all comes together in a link in bio landing page designed to convert.</p>
									<Link href='/' className="btn btn-primary rounded-pill">Get started for free</Link>
								</div>
							</div>
						</div>
						<div className="col-12 col-lg-7 overflow-hidden">
							<div className="row gy-4">
								<div className="col-12 col-sm-6">
									<div className="card border-0 border-bottom border-primary shadow-sm h-100">
										<div className="card-body text-center p-4 p-xxl-5">
											<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" className="bi bi-textarea-resize text-primary mb-4" viewBox="0 0 16 16">
												<path d="M0 4.5A2.5 2.5 0 0 1 2.5 2h11A2.5 2.5 0 0 1 16 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 0 11.5v-7zM2.5 3A1.5 1.5 0 0 0 1 4.5v7A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 13.5 3h-11zm10.854 4.646a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708l3-3a.5.5 0 0 1 .708 0zm0 2.5a.5.5 0 0 1 0 .708l-.5.5a.5.5 0 0 1-.708-.708l.5-.5a.5.5 0 0 1 .708 0z" />
											</svg>
											<h2 className="mb-4 fs-4">Enhanced Customization</h2>
											<p className="mb-4 text-secondary">From background banner to updating profile image and get even more power to make your page pop.</p>
											<Link href="/contact" className="fw-bold text-decoration-none link-primary">
												Learn More
												<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
													<path fillrull="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
												</svg>
											</Link>
										</div>
									</div>
								</div>
								<div className="col-12 col-sm-6">
									<div className="card border-0 border-bottom border-primary shadow-sm h-100">
										<div className="card-body text-center p-4 p-xxl-5">
											<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" className="bi bi-tablet text-primary mb-4" viewBox="0 0 16 16">
												<path d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z" />
												<path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
											</svg>
											<h2 className="mb-4 fs-4">Extended Analytics</h2>
											<p className="mb-4 text-secondary">See live views and clicks to shape your LinkList for success.</p>
											<Link href="/contact" className="fw-bold text-decoration-none link-primary">
												Learn More
												<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
													<path fillrull="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
												</svg>
											</Link>
										</div>
									</div>
								</div>
								<div className="col-12 col-sm-6">
									<div className="card border-0 border-bottom border-primary shadow-sm h-100">
										<div className="card-body text-center p-4 p-xxl-5">
											<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" className="bi bi-repeat text-primary mb-4" viewBox="0 0 16 16">
												<path d="M11 5.466V4H5a4 4 0 0 0-3.584 5.777.5.5 0 1 1-.896.446A5 5 0 0 1 5 3h6V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192Zm3.81.086a.5.5 0 0 1 .67.225A5 5 0 0 1 11 13H5v1.466a.25.25 0 0 1-.41.192l-2.36-1.966a.25.25 0 0 1 0-.384l2.36-1.966a.25.25 0 0 1 .41.192V12h6a4 4 0 0 0 3.585-5.777.5.5 0 0 1 .225-.67Z" />
											</svg>
											<h2 className="mb-4">Daily Updates</h2>
											<p className="mb-4 text-secondary">We provide our clients with daily updates on their business performance. This includes data on website traffic and sales.</p>
											<Link href="/contact" className="fw-bold text-decoration-none link-primary">
												Learn More
												<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
													<path fillrull="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
												</svg>
											</Link>
										</div>
									</div>
								</div>
								<div className="col-12 col-sm-6">
									<div className="card border-0 border-bottom border-primary shadow-sm h-100">
										<div className="card-body text-center p-4 p-xxl-5">
											<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" className="bi bi-shield-check text-primary mb-4" viewBox="0 0 16 16">
												<path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z" />
												<path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
											</svg>
											<h2 className="mb-4 fs-4">Free Support</h2>
											<p className="mb-4 text-secondary">We offer free support to all of our clients. This means that you can always get help when you need it, no matter what time it is.</p>
											<Link href="/contact" className="fw-bold text-decoration-none link-primary">
												Learn More
												<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
													<path fillrull="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
												</svg>
											</Link>
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

export default FeaturesPage