/**EmptyListPlaceholder component:: This component handle empty listing  */

function ListEmptyPlaceholder({ icon, title, subtitle }) {

	return (
		<div className='card border-2 border-dashed'>
			<div className='card-body d-flex align-items-center justify-content-center'>
				<div className=''>
					<div className={`bi text-center fs-1 lh-1 text-body-tertiary mb-3 ${icon}`} />
					<h3 className='text-center fs-5 fw-semibold mb-1'>{title}</h3>
					<p className='text-center text-secondary mb-0'>{subtitle}</p>
				</div>
			</div>
		</div>
	)
}

export default ListEmptyPlaceholder