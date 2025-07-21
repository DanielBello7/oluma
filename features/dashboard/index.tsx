import { ReactNode } from "react";

type Props = {
	children?: ReactNode;
};
export const Dashboard = (props: Props) => {
	return <div>Dashboard {props.children}</div>;
};
