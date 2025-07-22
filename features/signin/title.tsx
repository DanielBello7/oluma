import {GalleryVerticalEnd} from 'lucide-react';
export const Title = () => {
	return (
		<div className="flex flex-col items-center gap-2">
			<a href="#" className="flex flex-col items-center gap-2 font-medium">
				<div className="flex size-8 items-center justify-center rounded-md">
					<GalleryVerticalEnd className="size-6" />
				</div>
				<span className="sr-only">Acme Inc.</span>
			</a>
			<h1 className="text-xl font-bold">Welcome to Acme Inc.</h1>
			<div className="text-center text-sm">
				Don&apos;t have an account?{' '}
				<a href="#" className="underline underline-offset-4">
					Sign up
				</a>
			</div>
		</div>
	);
};
