import {CardFooter} from '@/components/ui';
import {TrendingUp} from 'lucide-react';

export const Footer = () => {
	return (
		<CardFooter>
			<div className="flex w-full items-start gap-2 text-sm">
				<div className="grid gap-2">
					<div className="flex items-center gap-2 leading-none font-medium">
						Trending up by 5.2% this month{' '}
						<TrendingUp className="h-4 w-4" />
					</div>
					<div className="text-muted-foreground flex items-center gap-2 leading-none">
						January - June 2024
					</div>
				</div>
			</div>
		</CardFooter>
	);
};
