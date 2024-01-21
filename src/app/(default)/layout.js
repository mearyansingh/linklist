/**This is a layout component */
/**Hero Section::This component handles the ui part of hero section */
import 'bootstrap/scss/bootstrap.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../globals.scss'
import { Lato } from 'next/font/google'
import { Toaster } from 'react-hot-toast';
import Header from '@/components/Header';
import BootstrapClient from '@/components/BootstrapClient';

const lato = Lato({ subsets: ['latin'], weight: ['400', '700'] })

export const viewport = {
	themeColor: '#3d52d5',
}

export const metadata = {
	metadataBase: new URL(process.env.URL),
	manifest: '/manifest.json',
	title: {
		default: 'LinkList',
		template: '%s - LinkList'
	},
	description: 'Everything you are. In one, simple link in bio.',
	twitter: {
		card: 'summary_large_image'
	},
	icons: [
		{ rel: "apple-touch-icon", url: "images/maskable_icon_x128.png" },
		{ rel: "icon", url: "images/maskable_icon_x128.png" },
	],
}

export default function RootLayout({ children }) {

	return (
		<html lang="en">
			<body className={lato.className}>
				<Toaster />
				<main className='d-flex flex-column h-100'>
					<Header />
					{children}
				</main>
				{<BootstrapClient />}
			</body>
		</html>
	)
}
