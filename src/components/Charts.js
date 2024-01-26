'use client'
/**This is a client component */
/**Chart component:: This component handles the views chart */
import { Suspense } from 'react'
import { addDays, differenceInDays, formatISO9075, parseISO } from "date-fns";
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis, ResponsiveContainer } from 'recharts'
import ListEmptyPlaceholder from './emptyPlaceholder/ListEmptyPlaceholder';
import SpinnerLoader from '@/components/loaders/SpinnerLoader'


function Charts({ data }) {
	// console.log(data, "data")

	if (!data || data.length === 0) {
		// Handle the case where data is undefined or an empty array
		return <ListEmptyPlaceholder icon='bi-binoculars' title="No view" subtitle="Currently there is no view on the page." />;
	}

	const xLabelKey = Object.keys(data[0]).find(key => key !== 'date');

	const dataWithoutGaps = [];
	data.forEach((value, index) => {
		const date = value.date;
		dataWithoutGaps.push({
			date,
			[xLabelKey]: value?.[xLabelKey] || 0,
		});
		const nextDate = data?.[index + 1]?.date;
		if (date && nextDate) {
			const daysBetween = differenceInDays(
				parseISO(nextDate),
				parseISO(date)
			);
			if (daysBetween > 0) {
				for (let i = 1; i < daysBetween; i++) {
					const dateBetween = formatISO9075(
						addDays(parseISO(date), i)
					).split(' ')[0];
					dataWithoutGaps.push({
						date: dateBetween,
						[xLabelKey]: 0,
					})
				}
			}
		}
	});

	return (
		<ResponsiveContainer width={'100%'} height={300}>
			<LineChart
				width={730}
				height={300}
				data={dataWithoutGaps}
				margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
			>
				<CartesianGrid horizontal={false} strokeWidth={2} stroke='#f5f5f5' />
				<XAxis dataKey="date" axisLine={false} tickLine={false} tickMargin={10} tick={{ fill: '#aaa' }} />
				<YAxis axisLine={false} tickLine={false} tickMargin={10} tick={{ fill: '#aaa' }} />
				<Tooltip />
				<Line type="monotone" dataKey={xLabelKey} stroke='#0d6efd' strokeWidth={5} />
			</LineChart>
		</ResponsiveContainer>
	)
}

export default Charts