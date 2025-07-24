import { flexRender, Row } from '@tanstack/react-table';
import { TableCell, TableRow } from '../ui';

type Props<T> = {
	row: Row<T>;
};
export const RowItem = <T,>(props: Props<T>) => {
	const { row } = props;
	return (
		<TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
			{row.getVisibleCells().map((cell) => (
				<TableCell
					key={cell.id}
					className="border-r last:border-r-0 border-gray-200">
					{flexRender(cell.column.columnDef.cell, cell.getContext())}
				</TableCell>
			))}
		</TableRow>
	);
};
