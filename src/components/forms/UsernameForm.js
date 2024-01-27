'use client'
/**UsernameForm component::This component handles username form */
import { useState } from 'react';
import { redirect } from 'next/navigation';
import GrabUsername from '@/actions/GrabUsername'
import SubmitButton from '../buttons/SubmitButton';

function UsernameForm({ desiredUsername }) {

	const [taken, setTaken] = useState(false)

	/**Function handles form submission */
	async function handleSubmit(formData) {

		const result = await GrabUsername(formData);

		setTaken(result === false)
		if (result) {
			redirect('/account?created=' + formData.get('username'))
		}
	}

	return (
		<form className='mt-4' action={handleSubmit}>
			<div className='mb-3'>
				<input
					name="username"
					type="text"
					defaultValue={desiredUsername}
					className={`form-control ${taken && 'is-invalid '}`}
					placeholder='Enter username'
				/>
				{taken &&
					<div className="invalid-feedback">
						This username is taken
					</div>
				}
			</div>
			<SubmitButton className='d-block mx-auto w-100' loadingTxt='Claiming...'>
				Claim your Username<i className="ps-2 bi bi-arrow-right"></i>
			</SubmitButton>
		</form>
	)
}

export default UsernameForm