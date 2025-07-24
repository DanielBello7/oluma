import {SidebarProvider} from '@/components/ui';
import {ReactNode} from 'react';
import {Header} from '../header';
import {AppSidebar} from './app-sidebar';

type Props = {
	children?: ReactNode;
};
export const Dashboard = (props: Props) => {
	return (
		<SidebarProvider>
			<div className="w-full h-screen flex">
				<AppSidebar />
				<div className="grow flex flex-col">
					<Header />
					<div className="grow">{props.children}</div>
				</div>
			</div>
		</SidebarProvider>
	);
};
