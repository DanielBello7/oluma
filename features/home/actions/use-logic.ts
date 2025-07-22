import { ChartConfig } from '@/components/ui';

export const useLogic = () => {
	const data = [
		{
			revenue: 10400,
			subscription: 40,
		},
		{
			revenue: 14405,
			subscription: 90,
		},
		{
			revenue: 9400,
			subscription: 200,
		},
		{
			revenue: 8200,
			subscription: 278,
		},
		{
			revenue: 7000,
			subscription: 89,
		},
		{
			revenue: 9600,
			subscription: 239,
		},
		{
			revenue: 11244,
			subscription: 78,
		},
		{
			revenue: 26475,
			subscription: 89,
		},
	];

	const chart = {
		revenue: {
			label: 'Revenue',
			color: 'var(--primary)',
		},
		subscription: {
			label: 'Subscriptions',
			color: 'var(--primary)',
		},
	} satisfies ChartConfig;

	return {
		data,
		chart,
	};
};
