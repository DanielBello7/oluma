import { AuthGate, Dashboard } from "@/features";
import { ReactNode } from "react";

type Props = {
	children: ReactNode;
};
export default function DashboardLayout(props: Props) {
	return (
		<AuthGate>
			<Dashboard>{props.children}</Dashboard>
		</AuthGate>
	);
}
