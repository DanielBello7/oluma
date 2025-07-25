import { User, UserRole } from '@/types';

type Props = {
  user: User;
};
export const Content = (props: Props) => {
  const { user } = props;
  return (
    <div className="p-4 pt-0">
      <div className="tracking-tighter">
        <div className="flex items-center justify-between">
          <h1 className="text-xl pb-0">{user.name}</h1>
          <p className="text-red-700 text-sm font-bold">{UserRole[user.role]}</p>
        </div>
        <p className="text-muted-foreground p-0 -mt-2">{user.email}</p>
        <div className="mt-5">
          <p className="text-muted-foreground text-xs">Address</p>
          <p className="">{user.walletAddress}</p>
        </div>
      </div>
    </div>
  );
};
