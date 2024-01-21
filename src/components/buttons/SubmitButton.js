import { useFormStatus } from "react-dom";

function SubmitButton({ children, className = '', loadingTxt = "Loading..." }) {

	const { pending } = useFormStatus();

	return (
		<button type="submit" disabled={pending} className={`btn btn-dark  ${className}`}>
			{pending ?
				<>
					<div className="spinner-border spinner-border-sm text-light" role="status">
						<span className="visually-hidden">Loading...</span>
					</div>
					<div className='ms-2 d-inline-block'>{loadingTxt}</div>
				</>
				:
				<>
					{children}
				</>
			}
		</button>
	)
}

export default SubmitButton