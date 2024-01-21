'use server'
/**This is a server component */
/**PageActions component:: This component handles all the logic related to the page settings. */
import mongoose from 'mongoose'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { Page } from '@/models/Page'
import { User } from '@/models/User'

/**For Buttons */
export async function PageActions(formData) {

	mongoose.connect(process.env.MONGODB_URI);
	const session = await getServerSession(authOptions);

	if (session) {
		const dataKeys = ['bgType', 'bgColor', 'bgImage', 'displayName', 'location', 'bio']

		const dataToUpdate = {}
		for (const key of dataKeys) {
			dataToUpdate[key] = formData.get(key)
		}

		/**Update form page fields */
		await Page.updateOne({ owner: session?.user?.email }, dataToUpdate);

		/**Update user avatar image */
		if (formData.has('avatar')) {
			const avatarLink = formData.get('avatar')
			await User.updateOne({ email: session?.user?.email }, { image: avatarLink })
		}

		return true;
	}

	return false;
}

/**For Buttons */
export async function savePageButtons(formData) {

	mongoose.connect(process.env.MONGODB_URI);
	const session = await getServerSession(authOptions);

	if (session) {
		const buttonsValues = {};
		formData.forEach((value, key) => {
			buttonsValues[key] = value;
		})
		const dataToUpdate = { buttons: buttonsValues }
		await Page.updateOne({ owner: session?.user?.email }, dataToUpdate)
		return true;
	}
	return false;
}

/**For Links */
export async function savePageLinks(links) {

	mongoose.connect(process.env.MONGODB_URI);

	const session = await getServerSession(authOptions);

	if (session) {
		await Page.updateOne({ owner: session?.user?.email }, { links })
		// return true;
	}
	return false;
}