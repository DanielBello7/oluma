import type { ReactNode } from 'react';
import { Exception } from './exception';
import { Pending } from './pending';

type Props = {
  error: unknown;
  isError: boolean;
  isLoading: boolean;
  children: ReactNode;
  retry?: () => void;
};
export const Render = (props: Props) => {
  return (
    <>
      {props.isLoading && <Pending />}
      {props.isLoading === false && props.isError && (
        <Exception error={props.error} occupy={true} retry={props.retry} />
      )}
      {props.isLoading === false && !props.isError && props.children}
    </>
  );
};
