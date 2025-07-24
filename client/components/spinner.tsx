import { Loader2 } from 'lucide-react';

type Props = {
  size?: number;
};
export const Spinner = (props: Props) => {
  const { size = 15 } = props;
  return <Loader2 className="animate-spin" size={size} />;
};
