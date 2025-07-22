import { columns } from './columns';
import { DataTable } from './table';

type Payment = {
	id: string;
	amount: number;
	status: 'pending' | 'processing' | 'success' | 'failed';
	email: string;
};

export const payments: Payment[] = [
	{
		id: '728ed52f',
		amount: 100,
		status: 'pending',
		email: 'm@example.com',
	},
	{
		id: '489e1d42',
		amount: 125,
		status: 'processing',
		email: 'example@gmail.com',
	},
	// ...
];

async function getData(): Promise<Payment[]> {
	// Fetch data from your API here.
	return payments;
}
export const Recents = async () => {
	const data = await getData();
	return (
		<div className="grow">
			<DataTable columns={columns} data={data} />
		</div>
	);
};
