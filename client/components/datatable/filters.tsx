import { Table } from '@tanstack/react-table';
import { Input } from '../ui';

type Props<TData> = {
  table: Table<TData>;
  column: string;
};
export const Filters = <T,>(props: Props<T>) => {
  const { table, column } = props;
  return (
    <div className="flex items-center py-4">
      <Input
        placeholder={`Filter ${column}...`}
        value={(table.getColumn(column)?.getFilterValue() as string) ?? ''}
        onChange={(event) =>
          table.getColumn(column)?.setFilterValue(event.target.value)
        }
        className="max-w-sm shadow-none"
      />
    </div>
  );
};
