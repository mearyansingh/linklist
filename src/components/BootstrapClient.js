'use client'
/**This is a Client component */
/**BootstrapClient component::bootstrap-bundle files */
import { useEffect } from 'react'

function BootstrapClient() {

	useEffect(() => {
		import('bootstrap/dist/js/bootstrap.bundle.min.js')
	}, [])

	return null;
}

export default BootstrapClient