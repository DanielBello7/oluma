'use client';
import {
	Button,
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
	ChartContainer,
} from '@/components/ui';
import { Area, AreaChart } from 'recharts';
import { useLogic } from './use-logic';

export const Actions = () => {
	const { chart, data } = useLogic();
	return (
		<Card className="pb-0 shadow-none border w-full h-full">
			<CardHeader>
				<CardDescription>Subscriptions</CardDescription>
				<CardTitle className="text-3xl">+2,350</CardTitle>
				<CardDescription>+180.1% from last month</CardDescription>
				<CardAction>
					<Button variant="ghost" size="sm">
						View More
					</Button>
				</CardAction>
			</CardHeader>
			<CardContent className="w-full mt-auto flex p-0 overflow-hidden">
				<ChartContainer config={chart} className="w-full">
					<AreaChart data={data} margin={{ left: 0, right: 0 }}>
						<Area
							dataKey="subscription"
							fill="var(--color-subscription)"
							fillOpacity={0.05}
							stroke="var(--color-subscription)"
							strokeWidth={2}
							type="monotone"
						/>
					</AreaChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
};
