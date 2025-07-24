import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/';
import { Transaction } from '@/types';
import { Ellipsis } from 'lucide-react';

type Props = {
  data: Transaction;
};
export const Options = (props: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={'ghost'} size={'sm'} className="cursor-pointer">
          <Ellipsis size={15} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>Approve</DropdownMenuItem>
        <DropdownMenuItem>Reject</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
