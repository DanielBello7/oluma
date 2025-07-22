import {ReactNode} from 'react';

type Props = {
	children: ReactNode;
};
export default function AuthLayout(props: Props) {
	return <>{props.children}</>;
}
