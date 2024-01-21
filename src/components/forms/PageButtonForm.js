'use client'
/**PageButtonForm component:: This component handles all the logics and ui of adding social media platform buttons to the profile */
import { useState } from 'react'
import toast from 'react-hot-toast'
import { ReactSortable } from "react-sortablejs";
import SubmitButton from '../buttons/SubmitButton'
import { savePageButtons } from '@/actions/PageActions'

export const allButtons = [
	{ key: 'instagram', label: 'instagram', icon: 'bi-instagram', placeholder: 'https://wwww.instagram.com/' },
	{ key: 'facebook', label: 'facebook', icon: 'bi-facebook', placeholder: 'https://www.facebook.com/' },
	{ key: 'twitter', label: 'twitter', icon: 'bi bi-twitter-x', placeholder: 'https://www.twitter.com/' },
	{ key: 'youtube', label: 'youtube', icon: 'bi-youtube', placeholder: 'https://www.youtube.com/channel/' },
	{ key: 'github', label: 'github', icon: 'bi-github', placeholder: 'https://www.youtube.com/channel/' },
	{ key: 'telegram', label: 'telegram', icon: 'bi-telegram', placeholder: 'https://telegram.me/@me' },
	{ key: 'whatsapp', label: 'whatsapp', icon: 'bi-whatsapp', placeholder: "https://discord.com/channels/@me" },
	{ key: 'tiktok', label: 'tiktok', icon: 'bi-tiktok', placeholder: "https://vm.tiktok.com/", },
	{ key: 'snapchat', label: 'snapchat', icon: 'bi-snapchat', placeholder: "https://snapchat.com/add/" },
	{ key: 'discord', label: 'discord', icon: 'bi-discord', placeholder: "https://discord.com/channels/@me" },
	{ key: 'email', label: 'email', icon: 'bi-envelope-at', placeholder: 'test@example.com' },
	{ key: 'mobile', label: 'mobile', icon: 'bi-phone', placeholder: '+91 123 1234 123' },
]

function upperFirst(str) {
	return str.slice(0, 1).toUpperCase() + str.slice(1)
}

function PageButtonForm({ page, user }) {

	// const pageSavedButtonsKeys = Object?.keys(page?.buttons)
	const pageSavedButtonsKeys = page?.buttons && Object.keys(page.buttons)
	const pageSavedButtonsInfo = pageSavedButtonsKeys?.map(key => allButtons.find(btn => btn.key === key))

	/**initial state */
	const [activeButtons, setActiveButtons] = useState(pageSavedButtonsInfo)

	/**Add buttons to the profile */
	function addButtonToProfile(button) {
		setActiveButtons(prevButtons => {
			return [...prevButtons, button]
		})
	}

	const availableButtons = allButtons.filter(b1 => !activeButtons?.find(b2 => b1.key === b2.key))

	/**Save buttons to the profile */
	async function saveButtons(formData) {
		await savePageButtons(formData);
		toast.success('Settings saved!')
	}

	/**Remove buttons to the profile */
	function removeButton({ key: keyToRemove }) {
		setActiveButtons(prevButtons => {
			return prevButtons.filter(button => button.key !== keyToRemove)
		})
	}

	return (
		<div className='card border-0 shadow-sm mb-3'>
			<div className='card-body'>
				<form action={saveButtons}>
					<div className='mb-3 border-bottom pb-2'>
						<h2 className='mb-0 fw-bold fs-4 '>Buttons</h2>
						<small className='text-body-tertiary fw-semibold'>Add your favorite social media to your profile.</small>
					</div>
					<ReactSortable
						list={activeButtons || []}
						setList={setActiveButtons}
						handle={'.handle'}
					>
						{activeButtons && activeButtons.length > 0 && activeButtons.map((btn) => (
							<div key={btn?.key} className='d-flex align-items-center flex-nowrap mb-3'>
								<span className='me-2 handle cursor-grabbing'>
									<i className="bi bi-grip-vertical fs-5"></i>
								</span>
								<div className="input-group">
									<span className="input-group-text">
										<i className={`bi pe-2 ${btn?.icon}`}></i>{upperFirst(btn?.label)}
									</span>
									<input
										type={`${btn?.key === "email" ? 'email' : 'text'}`}
										placeholder={btn?.placeholder}
										required
										className="form-control text-truncate"
										name={btn?.key}
										defaultValue={btn && page.buttons && btn.key ? page.buttons[btn.key] : ''}
									/>
									{/* <input type="text" placeholder={b?.placeholder} required className="form-control text-truncate" name={b?.key} defaultValue={page.buttons[b?.key]} /> */}
									<button
										className="btn btn-secondary"
										type="button"
										onClick={() => removeButton(btn)}
										id={btn?.key}
										aria-label={`Remove ${btn?.key}`}
									>
										<i className="bi bi-trash3"></i>
									</button>
								</div>
							</div>
						))}
					</ReactSortable>
					<div className='d-flex flex-wrap gap-3'>
						{availableButtons && availableButtons.length > 0 && availableButtons.map((button) => (
							<button
								key={button.key}
								className='btn btn-light'
								type="button"
								onClick={() => addButtonToProfile(button)}
							>
								<i className={`bi pe-2 ${button.icon}`}></i>{upperFirst(button.label)}
							</button>
						))}
					</div>
					<div className='border-top mt-3 pt-3'>
						<SubmitButton className='d-block mx-auto' loadingTxt='Saving...'>
							<i className="bi bi-floppy pe-2"></i>Save
						</SubmitButton>
					</div>
				</form>
			</div>
		</div>
	)
}

export default PageButtonForm