import { ReactNode } from "react";

type Props = {
	children?: ReactNode;
};
export const AuthGate = (props: Props) => {
	return <>AuthGate{props.children}</>;
};
