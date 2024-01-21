/**This is a page component */
/**This component handles the ui part of grab username */
import { redirect } from 'next/navigation'
import cloneDeep from 'clone-deep';
import { getServerSession } from 'next-auth'
import mongoose from "mongoose";
import { authOptions } from '../../api/auth/[...nextauth]/route'
import UsernameForm from '@/components/forms/UsernameForm'
import { Page } from '@/models/Page'
import PageSettingForm from '@/components/forms/PageSettingForm'
import PageButtonForm from '@/components/forms/PageButtonForm'
import PageLinksForm from '@/components/forms/PageLinksForm'

export const metadata = {
	title: 'My Page',
	metadataBase: new URL(process.env.URL),
}

async function AccountPage({ searchParams }) {

	const session = await getServerSession(authOptions)
	const { desiredUsername } = searchParams

	if (!session) {
		return redirect('/')
	}
	mongoose.connect(process.env.MONGODB_URI);
	const page = await Page.findOne({ owner: session?.user?.email });

	const leanPage = cloneDeep(page.toJSON())
	leanPage._id = leanPage._id.toString()

	if (page) {
		return (
			<>
				<PageSettingForm page={leanPage} user={session?.user} />
				<PageButtonForm page={leanPage} user={session?.user} />
				<PageLinksForm page={leanPage} user={session?.user} />
			</>
		)
	}

	return (
		<section className='flex-grow-1 d-flex align-items-center justify-content-center'>
			<div className='container'>
				<div className="col col-6 mx-auto">
					<h1 className='fw-bold text-center'>Grab your username</h1>
					<p className='text-center'>Choose your username</p>
					<UsernameForm desiredUsername={desiredUsername} />
				</div>
			</div>
		</section>
	)
}

export default AccountPage