import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/';
import { User, UserRole } from '@/types';
import classnames from 'classnames';
import { Check, ChevronRight, Ellipsis } from 'lucide-react';
import Link from 'next/link';

type Props = {
  data: User;
};
export const Options = (props: Props) => {
  const options = Object.keys(UserRole)
    .filter((i) => isNaN(Number(i)))
    .map((i, idx) => {
      const istrue = UserRole[props.data.role] === i;
      return (
        <DropdownMenuItem key={idx} className="flex items-center justify-between">
          <span
            className={classnames({
              'text-red-700': istrue,
            })}>
            {i}
          </span>
          {istrue && <Check />}
        </DropdownMenuItem>
      );
    });

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={'ghost'} size={'sm'} className="cursor-pointer w-1 h-5">
          <Ellipsis size={10} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-32" align="start">
        <DropdownMenuLabel>Options</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {options}
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href={`/dashboard/users?id=${props.data.id}`}>
            <span>Details</span>
            <DropdownMenuShortcut>
              <ChevronRight />
            </DropdownMenuShortcut>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
