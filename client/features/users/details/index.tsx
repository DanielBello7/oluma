'use client';

import { Render } from '@/components/render';
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  Separator,
} from '@/components/ui';
import { Content } from './content';
import { useLogic } from './use-logic';

export const Details = () => {
  // prettier-ignore
  const {
    data,
    error,
    isError,
    isPending,
    id,
    close
  } = useLogic()

  return (
    <Dialog open={id !== null}>
      <form>
        <DialogContent className="sm:max-w-[425px] p-0">
          <DialogHeader className="p-5 pb-0">
            <DialogTitle>User Details</DialogTitle>
            <DialogDescription>
              More details about the selected user
            </DialogDescription>
          </DialogHeader>
          <Separator />
          <div className="w-full">
            <Render error={error} isError={isError} isLoading={isPending}>
              {data && <Content user={data} />}
            </Render>
          </div>
          <DialogFooter className="p-3 pt-0">
            <Button variant="outline" onClick={close} className="cursor-pointer">
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
};
