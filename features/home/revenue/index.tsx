'use client';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
	ChartContainer,
} from '@/components/ui';
import { Line, LineChart } from 'recharts';
import { useLogic } from './use-logic';

export const Revenue = () => {
	const { chart, data } = useLogic();
	return (
		<Card className="shadow-none border size-full">
			<CardHeader>
				<CardDescription>Total Revenue</CardDescription>
				<CardTitle className="text-3xl">$15,231.89</CardTitle>
				<CardDescription>+20.1% from last month</CardDescription>
			</CardHeader>
			<CardContent className="pb-0 w-full flex overflow-hidden">
				<ChartContainer config={chart} className="w-full">
					<LineChart data={data}>
						<Line
							type="monotone"
							strokeWidth={2}
							dataKey="revenue"
							stroke="var(--color-revenue)"
							activeDot={{
								r: 6,
							}}
						/>
					</LineChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
};
