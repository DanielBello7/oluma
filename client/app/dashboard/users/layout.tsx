import { ReactNode } from 'react';

type Props = {
  id: ReactNode;
  children: ReactNode;
};
export default function UsersLayout(props: Props) {
  return (
    <>
      {props.id}
      {props.children}
    </>
  );
}
