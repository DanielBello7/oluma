import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui';
import { Form } from './form';
import { useLogic } from './use-logic';

export const SignUp = () => {
  // prettier-ignore
  const {
		setShow,
		show
	} = useLogic()
  return (
    <Dialog open={show} onOpenChange={setShow}>
      <div>
        <DialogTrigger asChild>
          <Button variant="link" className="cursor-pointer">
            Register User
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Register New User</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re done.
            </DialogDescription>
          </DialogHeader>
          <Form />
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </div>
    </Dialog>
  );
};
