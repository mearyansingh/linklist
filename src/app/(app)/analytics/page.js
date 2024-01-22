/**This is a page component */
/**This component handles the ui part of page-analytics to show clicks/views */
import { isToday } from 'date-fns'
import { redirect } from 'next/navigation'
import mongoose from 'mongoose'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import Charts from '@/components/Charts'
import ListEmptyPlaceholder from '@/components/emptyPlaceholder/ListEmptyPlaceholder'
import { Event } from '@/models/Event'
import { Page } from '@/models/Page'

export const metadata = {
	title: 'Analytics',
}

async function Analytics() {

	mongoose.connect(process.env.MONGODB_URI)

	const session = await getServerSession(authOptions)

	if (!session) {
		return redirect('/')
	}

	const page = await Page.findOne({ owner: session?.user?.email })

	// aggregate mongodb logic for views data
	const groupedViews = await Event.aggregate([
		{
			$match: {
				type: 'view',
				uri: page?.uri
			}
		},
		{
			$group: {
				_id: {
					$dateToString: {
						date: '$createdAt',
						format: '%Y-%m-%d'
					}
				},
				count: {
					'$count': {}
				}
			}
		},
		{
			$sort: { _id: 1 }
		}
	])

	const clicks = await Event.find({ page: page?.uri, type: 'click' })

	return (
		<>
			<div className='card border-0 shadow-sm mb-3'>
				<div className='card-body'>
					<h2 className='mb-3 fs-5 fw-bold text-center'>Views</h2>
					<Charts
						data={groupedViews.map(obj => ({
							'date': obj._id,
							'views': obj.count
						})
						)}
					/>
				</div>
			</div>
			{/* {For clicks} */}
			<div className='card border-0 shadow-sm'>
				<div className='card-body'>
					<h2 className='mb-3 fs-5 fw-bold text-center'>Clicks</h2>
					{page?.links && page.links.length > 0 ?
						<ul className="list-group list-group-flush">
							{page?.links.map(link => (
								<li key={link.key} className="list-group-item d-lg-flex align-items-center gap-3  ">
									<span
										className="d-flex flex-shrink-0 align-items-center justify-content-center fs-3 lh-1 bg-body-tertiary shadow-sm rounded-circle"
										style={{ width: "50px", height: '50px' }} >
										<i className="bi bi-link"></i>
									</span>
									<div className='flex-grow-1'>
										<h3 className="mb-0 fs-5 fw-semibold">{link.title || 'no title'}</h3>
										<p className="mb-0 text-secondary text-opacity-75">{link.subtitle || 'no title'}</p>
										<a href={link.url}
											target='_blank'
											className='icon-link icon-link-hover link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover'
										>
											{link.url}<i className="bi bi-arrow-right"></i>
										</a>
									</div>
									<div className='text-nowrap d-flex gap-3 mt-1 mt-lg-0'>
										<p className="mb-0 fw-semibold fs-14px text-secondary text-opacity-75 text-center">
											Today clicks:
											<span className='d-block text-dark fw-light fs-4'>
												{clicks.filter(click => click.uri === link.url && isToday(click.createdAt)).length}
											</span>
										</p>
										<p className="mb-0 fw-semibold fs-14px text-secondary text-opacity-75 text-center">
											Total clicks:
											<span className='d-block text-dark fw-light fs-4'>
												{clicks.filter(click => click.uri === link.url).length}
											</span>
										</p>
									</div>
								</li>
							))}
						</ul>
						:
						<ListEmptyPlaceholder icon="bi-ban" title="No click" subtitle="Currently there is no click on any of the link." />
					}
				</div>
			</div>
		</>
	)
}

export default Analytics