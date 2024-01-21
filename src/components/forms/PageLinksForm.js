'use client'
/**PageLinksForm component:: This component handles all the logics and ui of adding custom links to the profile */
import { useState } from 'react'
import { ReactSortable } from "react-sortablejs";
import toast from 'react-hot-toast';
import Image from 'next/image';
import SubmitButton from '../buttons/SubmitButton'
import { Upload } from '@/libs/Upload'
import { savePageLinks } from '@/actions/PageActions';
import ListEmptyPlaceholder from '../emptyPlaceholder/ListEmptyPlaceholder';

function PageLinksForm({ page, user }) {

	/**initial state */
	const [links, setLinks] = useState(page.links || [])

	/**function to handle to add the new link*/
	function addNewLink() {
		setLinks(prev => {
			return [...prev, { key: Date.now().toString(), title: '', subtitle: '', icon: '', url: '' }]
		})
	}

	/**function to handle to Upload the icon links */
	function handleIconUpload(e, linkKeyForUpload) {
		Upload(e, uploadedImageUrl => {
			setLinks(prevLinks => {
				const newLinks = [...prevLinks];
				newLinks.forEach((link) => {
					if (link.key === linkKeyForUpload) {
						link.icon = uploadedImageUrl;
					}
				})
				return newLinks;
			})
		})
	}

	/**function to handle to Change the page links */
	function handleLinkChange(keyOfLinkToChange, fieldToChange, e) {
		setLinks(prev => {
			const newLinks = [...prev];
			newLinks.forEach((link) => {
				if (link.key === keyOfLinkToChange) {
					link[fieldToChange] = e.target.value;
				}
			})
			return [...prev];
		})
	}

	/**function to handle save page links */
	async function save() {
		await savePageLinks(links)
		toast.success('Saved!')
	}

	/**function to handle to remove the page links */
	function removeLink(linkKeyToRemove) {
		setLinks(prevLinks => [...prevLinks].filter(link => link.key !== linkKeyToRemove))
	}

	return (
		<div className='card border-0 shadow-sm'>
			<div className='card-body'>
				<form action={save}>
					<div className='mb-3 border-bottom pb-2'>
						<h2 className='mb-0 fw-bold fs-4'>Links</h2>
						<small className='text-body-tertiary fw-semibold'>Add your custom links to your profile other than mentioned above.</small>
					</div>
					<button type="button" className='btn btn-outline-secondary mb-3 btn-sm' onClick={addNewLink}><i className="bi bi-plus-circle-fill pe-2"></i>Add New</button>
					{links && links.length > 0 ?
						<ReactSortable
							list={links}
							setList={setLinks}
							handle={'.handle'}
						>
							{links.map(link => (
								<div key={link.key}>
									<div className="row mb-4 g-3">
										<div className="col-md-4 col-xl-3 gap-3 d-flex align-items-center justify-content-center">
											<div className='cursor-grabbing handle flex-shrink-0 '><i className="bi bi-grip-vertical fs-5"></i></div>
											<div className='d-flex flex-column align-items-center justify-content-center flex-grow-1 '>
												{link?.icon ?
													<div style={{ width: "50px", height: "50px" }}>
														<Image
															alt={link.title}
															src={link.icon}
															width={50}
															height={50}
															className='img-fluid shadow-sm rounded-circle object-fit-cover h-100'
														/>
													</div>
													:
													<div
														className='d-flex align-items-center justify-content-center fs-3 lh-1 bg-primary-subtle rounded-circle shadow-sm '
														style={{ width: "50px", height: "50px" }}
													>
														<i className="bi bi-link"></i>
													</div>
												}
												<input
													id={`icon_${link.key}`}
													className='form-control d-none'
													type='file'
													onChange={e => handleIconUpload(e, link.key)}
												/>
												<div className="d-grid gap-2">
													<label htmlFor={`icon_${link.key}`} className='bg-light rounded p-2 py-1 cursor-pointer mt-2'>
														<i className="pe-1 bi bi-cloud-arrow-up-fill"></i>Change Icon
													</label>
													<button className="btn btn-secondary btn-sm" onClick={() => removeLink(link.key)}>Remove This Link</button>
												</div>
											</div>
										</div>
										{/* controlled input field*/}
										<div className="col-md-8 col-xl-9">
											<div className="mb-2">
												<label htmlFor={`${link.key}_title`} className="form-label custom-label">Title</label>
												<input
													type="text"
													className="form-control text-truncate"
													placeholder="Enter title"
													value={link.title}
													id={`${link.key}_title`}
													onChange={e => handleLinkChange(link.key, 'title', e)}
												/>
											</div>
											<div className="mb-2">
												<label htmlFor={`${link.key}_subtitle`} className="form-label custom-label">Subtitle</label>
												<input
													type="text"
													className="form-control text-truncate"
													placeholder="Enter subtitle (optional)"
													value={link.subtitle}
													id={`${link.key}_subtitle`}
													onChange={e => handleLinkChange(link.key, 'subtitle', e)}
												/>
											</div>
											<div className="mb-2">
												<label htmlFor={`${link.key}_url`} className="form-label custom-label">Url</label>
												<input
													type="text"
													className="form-control text-truncate "
													placeholder="Enter url"
													value={link.url}
													id={`${link.key}_url`}
													onChange={e => handleLinkChange(link.key, 'url', e)}
												/>
											</div>
										</div>
									</div>
								</div>
							))}
						</ReactSortable >
						:
						<ListEmptyPlaceholder
							icon="bi-link-45deg"
							title="No link"
							subtitle="Currently there is no link added. Want to add ? Please click on the add new button above."
						/>
					}
					<div className='border-top mt-3 pt-3'>
						<SubmitButton className='d-block mx-auto' loadingTxt='Saving...'>
							<i className="bi bi-floppy pe-2"></i>Save
						</SubmitButton>
					</div>
				</form >
			</div >
		</div >
	)
}

export default PageLinksForm