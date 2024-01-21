import 'bootstrap/scss/bootstrap.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../../globals.scss'
import { Lato } from 'next/font/google'
import { Toaster } from 'react-hot-toast';
import Image from 'next/image';
import Link from 'next/link';
import BootstrapClient from '@/components/BootstrapClient';

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

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${lato.className} d-flex flex-column`} >
				<Toaster />
				<main className='flex-grow-1'>
					{children}
				</main>
				<div className="container-fluid ">
					<footer className="d-flex flex-wrap justify-content-center align-items-center py-3 mt-3 border-top">
						<Link href="/" className="me-2 text-body-secondary text-decoration-none lh-1">
							<Image
								src="/images/maskable_icon.png"
								alt="brand_logo"
								width={32}
								height={32}
								className='img-fluid rounded-circle '
							/>
						</Link>
						<small className="text-body-secondary fs-12px">© 2024 Made by 💗, Dev Aryan</small>
					</footer>
				</div>
				{<BootstrapClient />}
			</body>
		</html>
	)
}
