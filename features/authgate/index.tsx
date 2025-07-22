import {ReactNode} from 'react';

type Props = {
	children?: ReactNode;
};
export const AuthGate = (props: Props) => {
	return <>{props.children}</>;
};
