import { DataTable } from '@/components/datatable';
import { Payment, columns } from './columns';

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
];

async function getData(): Promise<Payment[]> {
	await new Promise((resolve) => {
		setTimeout(() => {
			resolve(true);
		}, 5000);
	});
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
