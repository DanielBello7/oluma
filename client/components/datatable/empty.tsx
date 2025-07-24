import { columns } from '@/features/home/recents/columns';
import { TableCell, TableRow } from '../ui';

export const Empty = () => {
  return (
    <TableRow>
      <TableCell colSpan={columns.length + 1} className="h-24 text-center">
        No results.
      </TableCell>
    </TableRow>
  );
};
