import { flexRender, HeaderGroup } from '@tanstack/react-table';
import { TableHead, TableRow } from '../ui';

interface Props<T> {
	headerGroup: HeaderGroup<T>;
}
export const HeadItem = <TData,>(props: Props<TData>) => {
	const { headerGroup } = props;
	return (
		<TableRow key={headerGroup.id}>
			{headerGroup.headers.map((header) => {
				return (
					<TableHead
						key={header.id}
						className="border-r last:border-r-0 border-gray-200">
						{header.isPlaceholder
							? null
							: flexRender(
									header.column.columnDef.header,
									header.getContext(),
								)}
					</TableHead>
				);
			})}
		</TableRow>
	);
};
