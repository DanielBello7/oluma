import {Under} from './under';
import {Title} from './title';
import {Forms} from './forms';
import {Navel} from './navel';
import {Other} from './other';

export const SignIn = () => {
	return (
		<div className="flex flex-col gap-6">
			<div className="flex flex-col gap-6">
				<Title />
				<Forms />
				<Navel />
				<Other />
			</div>
			<Under />
		</div>
	);
};
