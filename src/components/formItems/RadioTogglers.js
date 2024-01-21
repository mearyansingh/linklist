/**RadioTogglers component :: This component handles logics for color and background image */
function RadioTogglers({ options, defaultValue, onChange }) {

	return (
		<div className='radio-togglers z-1'>
			{options?.map((option) => (
				<label htmlFor={option?.id} key={option?.id}>
					<input
						type="radio"
						id={option?.id}
						name="bgType"
						value={option?.value}
						defaultChecked={defaultValue === option?.value}
						onClick={e => onChange(e.target.value)}
					/>
					<span><i className={`bi pe-2 ${option?.icon}`}></i>{option?.label}</span>
				</label>
			))}
		</div>
	)
}

export default RadioTogglers