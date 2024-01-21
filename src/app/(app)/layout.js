/**This is a layout component */
/**This component handles the ui part of page-settings/page-analytics */
import 'bootstrap/scss/bootstrap.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../globals.scss'
import { Lato } from 'next/font/google'
import Image from 'next/image';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { Toaster } from 'react-hot-toast';
import { getServerSession } from 'next-auth';
import mongoose from 'mongoose';
import { authOptions } from '../api/auth/[...nextauth]/route';
import BootstrapClient from '@/components/BootstrapClient';
import LogoutButton from '@/components/buttons/LogoutButton';
import AppSidebar from '@/components/layout/AppSidebar';
import { Page } from '@/models/Page'

const lato = Lato({ subsets: ['latin'], weight: ['400', '700'] })

export const viewport = {
	themeColor: '#3d52d5',
}

export const metadata = {

	metadataBase: new URL('http://localhost:3000'),
	title: {
		default: 'LinkList',
		template: '%s - LinkList'
	},
	description: 'Everything you are. In one, simple link in bio.',
	openGraph: {
		title: 'LinkList',
		description: 'Everything you are. In one, simple link in bio.',
		image: '/opengraph-image.jpg',
		url: 'http://localhost:3000',
		siteName: 'LinkList',
	},
	twitter: {
		card: 'summary_large_image',
		site: '@eMartiiin94',
		title: 'LinkList',
		description: 'Everything you are. In one, simple link in bio.',
		image: '/opengraph-image.jpg'
	},
	manifest: '/manifest.json',
	icons: [
		{ rel: "apple-touch-icon", url: "images/maskable_icon_x128.png" },
		{ rel: "icon", url: "images/maskable_icon_x128.png" },
	],
}

export default async function AppLayout({ children }) {

	const session = await getServerSession(authOptions);

	if (!session) {
		redirect('/')
	}

	mongoose.connect(process.env.MONGODB_URI);

	const page = await Page.findOne({ owner: session?.user?.email })

	return (
		<html lang="en">
			<body className={lato.className}>
				<Toaster />
				{<BootstrapClient />}
				<div className='row g-0 min-vh-100'>
					<div className='col col-sm-1 col-lg-3 col-xxl-2'>
						<div className="offcanvas-lg offcanvas-start h-100" tabIndex="-1" id="offcanvasResponsive" aria-labelledby="offcanvasResponsiveLabel">
							<div className="offcanvas-body d-block p-0 h-100">
								<div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark h-100">
									<div className='d-flex align-items-center justify-content-between '>
										<Link href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none fs-4">
											<Image src="/images/maskable_icon.png" alt='brand_logo' width={32} height={32} className="img-fluid rounded-circle me-2" />
											LinkList
										</Link>
										<button
											type="button"
											className="btn-close btn-close-white d-lg-none"
											data-bs-dismiss="offcanvas"
											data-bs-target="#offcanvasResponsive"
											aria-label="Close"
										/>
									</div>
									<hr />
									{page && page.uri !== "" && (
										<div className='text-center pb-3 mb-3 border-bottom border-secondary'>
											<Link
												href={`/${page?.uri}`}
												className='icon-link icon-link-hover text-light'
												target="_blank"
											>
												Preview/{page.uri}<i className="bi bi-arrow-right"></i>
											</Link>
										</div>
									)}
									<AppSidebar />
									<hr />
									<div className="dropdown dropup">
										<Link
											href=""
											className="d-flex align-items-center text-dark text-decoration-none dropdown-toggle bg-dark-subtle rounded p-2 dropdown__hide-caret"
											data-bs-toggle="dropdown"
											aria-expanded="false"
										>
											<Image
												src={session?.user?.image}
												alt={'avatar'}
												width={32}
												height={32}
												className="img-fluid rounded-circle me-2"
											/>
											<strong>{session?.user?.name}</strong>
										</Link>
										<ul className="dropdown-menu dropdown-menu-dark text-small shadow dropdown-menu-end">
											<li><Link className="dropdown-item" href="/">
												<i className="bi bi-arrow-left pe-2"></i>Back to home</Link>
											</li>
											<li><hr className="dropdown-divider" /></li>
											<li className='mx-3'><LogoutButton /></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='col col-12 col-lg-9 col-xxl-10'>
						<div className='flex-grow-1 p-3'>
							<button
								className="btn btn-dark d-lg-none mb-3"
								type="button"
								data-bs-toggle="offcanvas"
								data-bs-target="#offcanvasResponsive"
								aria-controls="offcanvasResponsive"
							>
								<i className="bi bi-justify fs-5"></i>
							</button>
							{children}
						</div>
					</div>
				</div>
			</body>
		</html >
	)
}
