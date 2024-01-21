/**This is a page component */
/**Hero Section::This component handles the ui part of hero section */
import { getServerSession } from 'next-auth';
import HeroForm from '@/components/forms/HeroForm';
import { authOptions } from '../api/auth/[...nextauth]/route';

export default async function Home() {

	const session = await getServerSession(authOptions)

	return (
		<section className='flex-grow-1 d-flex align-items-center justify-content-center'>
			<div className='container '>
				<div className='mb-5'>
					<h1 className='text-center display-1  fw-bold'>Your one link for everything</h1>
					<p className='text-center fs-5 text-muted'>Share your links, social profiles, contact info and more on one page</p>
				</div>
				<HeroForm user={session?.user} />
			</div>
		</section>
	)
}
