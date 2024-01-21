'use client'
/**This is a client component */
/**AppSidebar component */
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function AppSidebar() {

	const path = usePathname()

	return (
		<ul className="nav nav-pills custom-nav flex-column mb-auto">
			<li className="nav-item mb-2">
				<Link href={'/account'} className={`nav-link text-white ${path === '/account' ? 'active' : ""}`}>
					<span className='pe-2'>
						<i className="bi bi-file-earmark-text"></i>
					</span>
					My Page
				</Link>
			</li>
			<li>
				<Link href={'/analytics'} className={`nav-link text-white ${path === '/analytics' ? 'active' : ""}`}>
					<span className='pe-2'>
						<i className="bi bi-graph-up"></i>
					</span>
					Analytics
				</Link>
			</li>
		</ul>
	)
}

export default AppSidebar