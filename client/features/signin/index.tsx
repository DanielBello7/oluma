import { Forms } from './forms';
import { Title } from './title';
import { Under } from './under';

export const SignIn = () => {
  return (
    <div className="p-4 md:p-0 w-full sm:w-2/3 md:w-3/6 lg:w-2/6 xl:w-[350px] mx-auto my-20">
      <div className="flex flex-col gap-6">
        <Title />
        <Forms />
      </div>
      <Under />
    </div>
  );
};
