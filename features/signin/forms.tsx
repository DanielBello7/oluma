import {Input, Button, Label} from '@/components/ui';

export const Forms = () => {
	return (
		<div className="flex flex-col gap-6">
			<div className="grid gap-3">
				<Label htmlFor="email">Email</Label>
				<Input
					id="email"
					type="email"
					placeholder="m@example.com"
					required
				/>
			</div>
			<Button type="submit" className="w-full">
				Login
			</Button>
		</div>
	);
};
