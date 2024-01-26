'use client'
/**PageSettingForm component:: This component handles all the logics and ui of page settings form */
import { useState } from 'react'
import Image from 'next/image'
import toast from 'react-hot-toast'
import RadioTogglers from '../formItems/RadioTogglers'
import SubmitButton from '../buttons/SubmitButton'
import { PageActions } from '@/actions/PageActions'
import { Upload } from '@/libs/Upload'

function PageSettingForm({ page, user }) {

	/**Initial state */
	const [bgType, setBgType] = useState(page?.bgType)
	const [bgColor, setBgColor] = useState(page?.bgColor)
	const [bgImage, setBgImage] = useState(page?.bgImage || '')
	const [avatar, setAvatar] = useState(user?.image)

	/**Function handles save settings */
	async function saveBaseSettings(formData) {

		try {
			// Show loading toast while waiting for the asynchronous operation to complete
			const loadingToastId = toast.loading('Saving...');

			// Perform asynchronous operation
			const result = await PageActions(formData);

			// Close the loading toast when the operation is completed
			toast.dismiss(loadingToastId);

			if (result) {
				// Show success toast if the operation is successful
				toast.success('Saved!');
			} else {
				// Show an error toast if the operation did not return a truthy result
				toast.error('Failed to save. Please try again.');
			}
		} catch (error) {
			toast.dismiss();
			// Handle any errors that occurred during the asynchronous operation
			toast.error('An error occurred. Please try again.');
			console.error('Error during saveBaseSettings:', error);
		}
	}

	/**Function to change the cover image */
	async function handleCoverImageChange(e) {
		await Upload(e, link => {
			setBgImage(link)
		})
	}

	/**Function to change the avatar image */
	async function handleAvatarImageChange(e) {
		await Upload(e, link => {
			setAvatar(link)
		})
	}

	return (
		<div className='mb-3'>
			<form className='' action={saveBaseSettings}>
				<div className='card border-0 shadow-sm'>
					<div
						className={`min-h-400px card-img-top d-flex flex-column gap-2 align-items-center justify-content-center position-relative  ${bgType === 'image' && bgImage === "" && 'bg-custom border-bottom border-light-subtle'}`}
						style={bgType === 'color'
							?
							{ backgroundColor: bgColor }
							:
							{
								backgroundImage: `url(${bgImage})`,
								backgroundRepeat: 'no-repeat',
								backgroundPosition: 'center center',
								backgroundSize: 'cover',
							}}
					>
						<RadioTogglers
							options={[
								{ value: 'color', icon: 'bi-palette-fill', label: 'Color', id: "colorRadio" },
								{ value: 'image', icon: 'bi-card-image', label: 'Image', id: "imageRadio" },
							]}
							defaultValue={page.bgType}
							onChange={val => setBgType(val)}
						/>
						{bgType === 'color' &&
							<div className='d-flex radio-togglers align-items-center text-light z-1'>
								<label htmlFor="bgColor" className="form-label mb-0 ps-1 pe-2 text-light text-opacity-75 cursor-pointer">Background color:</label>
								<input
									type="color"
									className="form-control form-control-color"
									id="bgColor"
									name="bgColor"
									defaultValue={page?.bgColor}
									onChange={(e) => setBgColor(e.target.value)}
								/>
							</div>
						}
						{bgType === 'image' &&
							<label className='radio-togglers text-light px-3 text-opacity-75 cursor-pointer z-1'>
								<input type='hidden' name="bgImage" value={bgImage} />{/**hidden field */}
								<input
									type="file"
									className='d-none'
									onChange={handleCoverImageChange}
								/>
								<i className="bi bi-cloud-upload pe-2"></i>
								Change Image
							</label>
						}
					</div>
					<div className="upload-image position-relative top-0 start-50 translate-middle">
						<div className='overflow-hidden h-100 rounded-circle border border-4 border-light shadow-sm'>
							<Image
								alt="avatar"
								className="img-fluid h-100 w-100 object-fit-cover"
								width={128}
								height={128}
								src={avatar}
								priority={true}
							/>
						</div>
						<label
							htmlFor='avatarIn'
							title='Change image'
							className="edit-btn bg-dark cursor-pointer position-absolute bottom-0 shadow-sm badge border border-4 border-light rounded-circle d-flex  align-items-center justify-content-center fs-6"
						>
							<i className="bi bi-pencil upload-button"></i>
							<input type="hidden" name="avatar" value={avatar} /> {/**hidden field */}
							<input className="d-none" id="avatarIn" onChange={handleAvatarImageChange} type="file" accept="image/*" />
						</label>
					</div>
					<div className='card-body mt-n50'>
						<div className="mb-3">
							<label htmlFor="displayName" className="form-label custom-label">Display name</label>
							<input
								type="text"
								className="form-control text-truncate"
								name="displayName"
								id="displayName"
								placeholder="Display name"
								defaultValue={page?.displayName} required
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="location" className="form-label custom-label">Location</label>
							<input
								type="text"
								className="form-control text-truncate"
								name="location"
								id="location"
								placeholder="Location"
								defaultValue={page?.location}
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="bio" className="form-label custom-label">Bio</label>
							<textarea
								className="form-control"
								name="bio"
								id="bio"
								placeholder="Your bio goes here..."
								rows="3"
								defaultValue={page?.bio}
							/>
						</div>
						<SubmitButton className='d-block mx-auto' loadingTxt='Saving...'>
							<i className="bi bi-floppy pe-2"></i>
							Save
						</SubmitButton>
					</div>
				</div>
			</form >
		</div >
	)
}

export default PageSettingForm