import { useFormState } from 'react-dom';

function UsernameFormResult() {

	const [state, formAction] = useFormState(action, null);

	return (
		<div className="invalid-feedback">
			Taken username
		</div>
	)
}

export default UsernameFormResult