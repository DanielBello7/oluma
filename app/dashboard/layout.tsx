import { ReactNode } from "react";

type Props = {
	children: ReactNode;
};
export default function DashboardLayout(props: Props) {
	return <>{props.children}</>;
}
