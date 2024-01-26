import Link from "next/link"
import dynamic from 'next/dynamic'
import SpinnerLoader from '@/components/loaders/SpinnerLoader';

export const metadata = {
	title: 'Contact',
}

const ContactForm = dynamic(() => import('@/components/forms/ContactForm'), {
	loading: () => <SpinnerLoader />,
	ssr: false
})

function ContactPage() {

	return (
		<div className='container-fluid contact-container'>
			{/* <!-- FAQ Section --> */}
			<section className="bsb-faq-2 py-3 py-md-5 py-xl-8 ">
				<div className="container h-100">
					<div className="row gy-5 gy-lg-0">
						<div className="col-12 col-lg-6">
							<h2 className="h1 mb-3">Frequently Asked Questions</h2>
							<p className="lead fs-4 text-secondary mb-4">We hope you have found an answer to your question. If you need any help, please search your query on our Support Center or contact us via email.</p>
							<Link href="/" className="btn btn-lg bsb-btn-2xl btn-primary" role="button">Back to home</Link>
						</div>
						<div className="col-12 col-lg-6">
							<div className="row justify-content-xl-end">
								<div className="col-12 col-xl-11">
									<div className="accordion accordion-flush" id="accordionExample">
										<div className="accordion-item mb-4 shadow-sm">
											<h2 className="accordion-header" id="headingOne">
												<button className="accordion-button bg-transparent fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
													Why do I need a link in bio tool?
												</button>
											</h2>
											<div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
												<div className="accordion-body">
													<p>Right now, every time you’ve got something new to share, you have to go to every single one of your channels to change the link in each of your bios. It’s time-consuming and complicated – making it so much harder to keep everything up to date.</p>
													<p>A link in bio tool means you never have to compromise, or remove one link from your bio so you can add another. You can keep everything you want to share online in one link. When you’ve got a change, you only ever have to make it once.</p>
												</div>
											</div>
										</div>
										<div className="accordion-item mb-4 shadow-sm">
											<h2 className="accordion-header" id="headingTwo">
												<button className="accordion-button collapsed bg-transparent fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
													How can I drive more traffic to and through my LinkList?
												</button>
											</h2>
											<div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo">
												<div className="accordion-body">
													<p>Sharing your LinkList on every social platform you have makes it easy for your most important content to be seen and engaged with by all of your followers. You can even use QR codes to generate online traffic in offline places, and drive people to your links.</p>
													<p>Once visitors arrive on your LinkList, easy-to-understand analytics help you quickly and easily discover what they’re clicking on. You can immediately see what’s working and what’s not and improve your LinkList on the fly with different link placement, prioritized links and more to make sure your traffic is landing exactly where you want it!</p>
												</div>
											</div>
										</div>
										<div className="accordion-item mb-4 shadow-sm">
											<h2 className="accordion-header" id="headingThree">
												<button className="accordion-button collapsed bg-transparent fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
													How many links should I have on my LinkList?
												</button>
											</h2>
											<div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree">
												<div className="accordion-body">
													As many as you want. But if your priority is click-throughs and conversion, we recommend having 3-7 links on your LinkList at once. Including too many options for your visitors slows down their course of action.
												</div>
											</div>
										</div>
										<div className="accordion-item mb-4 shadow-sm">
											<h2 className="accordion-header" id="headingFour">
												<button className="accordion-button collapsed bg-transparent fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
													Do I need a website to use LinkList?
												</button>
											</h2>
											<div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour">
												<div className="accordion-body">
													No, you don’t! LinkList can act as your very own mini-website to share without any of the time and effort it takes to build and maintain a regular website. You can create a design that fully reflects your personality and brand in seconds, with no knowledge, skills or experience needed. If you already have a website, that’s great: you can add it to your LinkList.
												</div>
											</div>
										</div>
										<div className="accordion-item shadow-sm">
											<h2 className="accordion-header" id="headingFive">
												<button className="accordion-button collapsed bg-transparent fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
													Where can I download the app?
												</button>
											</h2>
											<div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive">
												<div className="accordion-body">
													<p>Its very easy!</p>
													<ul>
														<li>Go to our website <Link href={`${process.env.VERCEL_PUBLIC_BASE_URL}`}>https://linklist-app.vercel.app</Link></li>
														<li>Click on the install icon on the top right corner and and the app will install in your system.</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Contact form */}
			<section className=" py-5">
				<div className="container">
					<div className="row justify-content-md-center">
						<div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
							<h2 className="mb-4 display-5 text-center">Contact</h2>
							<p className="text-secondary mb-5 text-center">The best way to contact us is to use our contact form below. Please fill out all of the required fields and we will get back to you as soon as possible.</p>
							<hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
						</div>
					</div>
				</div>
				<ContactForm />
			</section>
		</div>
	)
}

export default ContactPage