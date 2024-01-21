'use client'
/**This is client component */
/**HeroForm component::This component handles the hero section form */
import { useEffect } from 'react'
import { signIn } from "next-auth/react";
import { redirect, useRouter } from 'next/navigation';


function HeroForm({ user }) {

	const router = useRouter();

	/**lifecycle method */
	useEffect(() => {
		if ('localStorage' in window && window.localStorage.getItem('desiredUsername')) {
			const username = window.localStorage.getItem('desiredUsername');
			window.localStorage.removeItem('desiredUsername');
			redirect('/account?desiredUsername=' + username)
		}
	}, [])

	/**Function to handle the form submission */
	async function handleSubmit(e) {
		e.preventDefault();
		const form = e.target;
		const input = form.querySelector('input')
		const username = input.value;
		if (username.length > 0) {
			if (user) {
				router.push('/account?desiredUsername=' + username)
			} else {
				window.localStorage.setItem('desiredUsername', username)
				await signIn('google')
			}
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className="mb-3">
				<div className="input-group">
					<span className="input-group-text" id="basic-addon3">linklist.to/</span>
					<input type="text" placeholder='username' className="form-control text-truncate " />
					<button className="btn btn-primary" type="submit">Join for Free</button>
				</div>
			</div>
		</form>
	)
}

export default HeroForm