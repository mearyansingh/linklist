/**This component is the actual component, after all settings saved  */
import { Fragment } from 'react'
import mongoose from 'mongoose';
import Link from 'next/link';
import Image from 'next/image';
import { Page } from '@/models/Page'
import { User } from '@/models/User';
import { Event } from '@/models/Event';

export async function generateMetadata({ params, parent }) {
	const { uri } = params
	const userName = uri.slice(0, 1).toUpperCase() + uri.slice(1)

	// optionally access and extend (rather than replace) parent metadata
	// Check if parent and parent.openGraph are defined
	const parentMetadata = await parent;
	const previousImages = (parentMetadata && parentMetadata.openGraph) ? parentMetadata.openGraph.images || [] : [];

	return {
		title: {
			absolute: `${userName} - LinkList`
		},
		openGraph: {
			images: ['https://aryan-linklist.vercel.app/opengraph-image.jpg', ...previousImages],
		},
	}
}

export const icons = {
	email: 'bi-envelope-at',
	mobile: 'bi-phone',
	whatsapp: 'bi-whatsapp',
	instagram: 'bi-instagram',
	facebook: 'bi-facebook',
	twitter: 'bi bi-twitter-x',
	github: 'bi-github',
	youtube: 'bi-youtube',
	discord: 'bi-discord',
	tiktok: 'bi-tiktok',
	telegram: 'bi-telegram',
	snapchat: 'bi-snapchat',
}

function buttonLink(key, value) {
	if (key === 'mobile') {
		return 'tel:' + value;
	}
	if (key === 'email') {
		return 'mailto:' + value;
	}
	return value;
}

async function PagePreview({ params }) {

	const uri = params.uri;
	mongoose.connect(process.env.MONGODB_URI);

	const page = await Page.findOne({ uri })
	const user = await User.findOne({ email: page?.owner })
	//Analytics
	await Event.create({ uri: uri, page: uri, type: 'view' })

	return (
		<>
			{/* {console.log(page, "page..")} */}
			<div
				className='card-img-top  position-relative d-flex flex-column gap-2 align-items-center justify-content-center h-25'
				style={page?.bgType === 'color'
					?
					{ backgroundColor: page?.bgColor }
					:
					{
						backgroundImage: `url(${page?.bgImage})`,
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'center center',
						backgroundSize: 'cover',
					}}
			>
				<div
					className="position-absolute top-100 start-50 translate-middle overflow-hidden rounded-circle border border-4 border-light shadow-sm"
					style={{ width: "120px", height: "120px" }}
				>
					<Image
						alt="avatar"
						className="img-fluid h-100 w-100 object-fit-cover"
						width={256}
						height={256}
						src={user?.image}
					/>
				</div>
			</div>
			<div className='mt-5 pt-5 container'>
				{page && page.displayName !== null && page.displayName !== undefined && page.displayName !== "" && (
					<h2 className='fs-5 fw-bold text-center'>{page.displayName}</h2>
				)}
				{page && page.location !== null && page.location !== undefined && page.location !== "" && (
					<h3 className='fs-6 fw-bold text-center mb-1 text-body-tertiary'>
						<i className="bi bi-geo-alt-fill"></i>{page.location}
					</h3>
				)}
				{page && page.bio !== null && page.bio !== undefined && page.bio !== "" && (
					<p className='text-center text-body-tertiary'>{page.bio}</p>
				)}
				{page && page?.buttons && Object.keys(page?.buttons).length > 0 &&
					<div className='d-flex flex-wrap align-items-center justify-content-center gap-3 mb-3'>
						{Object.keys(page?.buttons).map(buttonKey => (
							<Fragment key={buttonKey}>
								{page?.buttons[buttonKey] &&
									<Link
										href={buttonLink(buttonKey, page?.buttons[buttonKey])}
										role="button"
										className='btn btn-dark rounded-circle p-4 d-block d-flex  align-items-center justify-content-center shadow-sm '
										style={{ width: "30px", height: "30px" }}
										aria-label={`${buttonKey}`}
									>
										<i className={`bi fs-4 ${icons[buttonKey]}`}></i>
									</Link>
								}
							</Fragment>
						))}
					</div>
				}
				{page?.links.length > 0 &&
					<div className="row g-3 justify-content-center">
						{page?.links.map((link) => (
							<div className='col col-12 col-md-6 col-lg-4' key={link?.key}>
								<Link
									href={link.url}
									ping={process.env.URL + 'api/click?url=' + btoa(link.url) + '&page=' + page.uri}
									target="_blank"
									rel="noreferrer"
									className="d-flex align-self-stretch overflow-hidden shadow-sm rounded bg-white h-100"
								>
									<span className="d-flex flex-grow-1 h-100">
										<span className="d-block p-3 fs-2 bg-body-secondary d-flex align-items-center justify-content-center flex-shrink-0" >
											{link?.icon ? (
												<Image
													src={link.icon}
													alt="logo"
													height="80"
													width="80"
													className="rounded-circle shadow-sm  object-fit-cover img-fluid"
													style={{ width: "50px", height: "50px" }}
												/>
											) : (
												<span
													className='bi bi-link shadow-sm  text-dark rounded-circle bg-light d-flex align-items-center justify-content-center'
													style={{ width: "50px", height: "50px" }}
												/>
											)}
										</span>
										<span className="p-2 hover-text__primary flex-grow-1">
											<span className="d-block fw-bold mb-2 text-dark lh-1">{link?.title}</span>
											<span className="d-block fs-14px text-muted ">
												{link?.subtitle}
											</span>
										</span>
									</span>
								</Link>
							</div>
						))}
					</div>
				}
			</div>
		</>
	)
}

export default PagePreview