import { ensure_error } from '@/lib';
import { AlertCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '../ui';

type Props = {
  occupy?: boolean;
  error: unknown;
  retry?: () => void;
};
export const Exception = (props: Props) => {
  const [error, setError] = useState<Error>(
    new Error('Unknown Error Occured'),
  );

  const click = () => {
    if (props.retry) {
      props.retry();
    }
  };

  useEffect(() => {
    const err = ensure_error(props.error);
    setError(err);
  }, [props.error]);

  return (
    <div className="w-full flex flex-col items-center justify-center py-20">
      <p className="flex items-center space-x-1 font-extrabold">
        <AlertCircle size={15} />
        <span className="tracking-tighter text-3xl">error occured</span>
      </p>
      <p className="mb-2 text-center">
        {error.name}, {error.message}
      </p>
      {props.retry && (
        <Button onClick={click} size={'sm'}>
          Retry
        </Button>
      )}
    </div>
  );
};
