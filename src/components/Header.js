/**Header component:: This is a Header component */
import Link from 'next/link'
import Image from 'next/image';
import { getServerSession } from 'next-auth'
import mongoose from 'mongoose';
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import LogoutButton from '@/components/buttons/LogoutButton'

async function Header() {

	mongoose.connect(process.env.MONGODB_URI)
	const session = await getServerSession(authOptions)

	return (
		<header className=' bg-body-tertiary'>
			<nav className="navbar navbar-dark bg-dark fixed-top">
				<div className="container-fluid">
					<Link href={'/'} className='navbar-brand fs-4 fw-bold d-flex align-items-center'>
						<Image src="/images/maskable_icon.png" priority={true} alt="brand_logo" width={32} height={32} className='img-fluid rounded-circle me-2' />LinkList
					</Link>
					<div className='d-flex align-items-center flex-grow-1 justify-content-sm-end justify-content-between gap-3'>
						{!!session && (
							<div className="dropdown dropdown-end">
								<Link href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
									<Image
										src={session?.user?.image}
										alt='avatar'
										width={32}
										height={32}
										className="img-fluid rounded-circle me-2"
										priority={true}
									/>
									<em>Hi&#128075;,</em>&nbsp;&nbsp;<strong>{session?.user?.name}</strong>
								</Link>
								<ul className="dropdown-menu dropdown-menu-dark text-small shadow dropdown-menu-end">
									<li>
										<Link href='/account' className='dropdown-item'>
											<i className="bi bi-gear pe-2"></i>Page settings
										</Link>
									</li>
									<li><hr className="dropdown-divider" /></li>
									<li className='mx-3'><LogoutButton /></li>
								</ul>
							</div>
						)}
						{!session && (
							<>
								<Link href={'/login'} className='text-light'>Sign In</Link>
								<Link href={'/login'} className='text-light'>Create Account</Link>
							</>
						)}
						<button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>
					</div>
					<div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
						<div className="offcanvas-header">
							<Link href='/' className='flex-grow-1 d-flex align-items-center h5'>
								<Image priority={true} src="/images/maskable_icon.png" alt="brand_logo" width={32} height={32} className='img-fluid rounded-circle me-2 ' />
								<h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">LinkList</h5>
							</Link>
							<button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
						</div>
						<div className="offcanvas-body">
							<ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
								<li className="nav-item">
									<Link href={'/features'} className="nav-link">Features</Link>
								</li>
								<li className="nav-item">
									<Link href={'/contact'} className="nav-link">Contact</Link>
								</li>
								<li className="nav-item">
									<Link href='/about' className='nav-link'>About</Link>
								</li>
								<li className="nav-item">
									<Link href='/pricing' className="nav-link">Pricing</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
		</header>
	)
}

export default Header