/**This is a page component */
/**This component handles the ui part of grab username */
import { Fragment } from 'react';
import { redirect } from 'next/navigation'
import cloneDeep from 'clone-deep';
import dynamic from 'next/dynamic'
import { getServerSession } from 'next-auth'
import mongoose from "mongoose";
import { authOptions } from '../../api/auth/[...nextauth]/route'
import { Page } from '@/models/Page'
import PageSettingForm from '@/components/forms/PageSettingForm'
import PageButtonForm from '@/components/forms/PageButtonForm'
import PageLinksForm from '@/components/forms/PageLinksForm'
import SpinnerLoader from '@/components/loaders/SpinnerLoader';

export const metadata = {
	title: 'My Page',
}

const UsernameForm = dynamic(() => import('@/components/forms/UsernameForm'), {
	loading: () => <SpinnerLoader />,
	ssr: false
})

async function AccountPage({ searchParams }) {

	const session = await getServerSession(authOptions)
	const { desiredUsername } = searchParams

	if (!session) {
		return redirect('/')
	}

	mongoose.connect(process.env.MONGODB_URI);
	const page = await Page.findOne({ owner: session?.user?.email });

	if (page) {
		const leanPage = cloneDeep(page.toJSON());

		// Check if _id exists before setting it
		if (leanPage?._id) {
			leanPage._id = leanPage._id.toString();
		}

		return (
			<Fragment>
				<PageSettingForm page={leanPage} user={session?.user} />
				<PageButtonForm page={leanPage} user={session?.user} />
				<PageLinksForm page={leanPage} user={session?.user} />
			</Fragment>
		)
	}

	return (
		<section className='flex-grow-1 d-flex align-items-center justify-content-center'>
			<div className='container'>
				<div className="col-12 col-lg-6 mx-auto">
					<h1 className='fw-bold text-center'>Grab your username</h1>
					<p className='text-center'>Choose your username</p>
					<UsernameForm desiredUsername={desiredUsername} />
				</div>
			</div>
		</section>
	)
}

export default AccountPage