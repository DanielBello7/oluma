import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/';
import { User } from '@/types';
import { DropdownMenuGroup, DropdownMenuItem } from '@radix-ui/react-dropdown-menu';
import { ChevronRight, Ellipsis } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

type Props = {
  data: User;
};
export const Options = (props: Props) => {
  const [position, setPosition] = useState('bottom');

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={'ghost'} size={'sm'} className="cursor-pointer">
          <Ellipsis size={15} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-32" align="start">
        <DropdownMenuGroup>
          <DropdownMenuItem className="flex" asChild>
            <Link href={`/dashboard/users/${props.data.walletAddress}`}>
              <span>Details</span>
              <DropdownMenuShortcut>
                <ChevronRight />
              </DropdownMenuShortcut>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
