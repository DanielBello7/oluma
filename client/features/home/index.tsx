'use client';

import { Actions } from './actions';
import { Insight } from './insight';
import { Recents } from './recents';
import { Revenue } from './revenue';

export const Home = () => {
  return (
    <div className="w-full flex flex-col p-4 gap-4">
      <div className="h-full w-full">
        <div className="mb-4">
          <h1 className="text-xl underline">Insights</h1>
          <p className="text-muted-foreground">
            List of recent transactions performed by users
          </p>
        </div>
        <div className="w-full flex flex-col gap-4">
          <div>
            <Insight />
          </div>
          <div className="flex gap-4 max-h-[200px]">
            <div className="w-4/12">
              <Revenue />
            </div>
            <div className="w-4/12">
              <Actions />
            </div>
            <div className="w-4/12">
              <Revenue />
            </div>
          </div>
        </div>
      </div>

      <div className="h-full w-full flex flex-col">
        <div className="my-4">
          <h1 className="text-xl underline">Recent Transactions</h1>
          <p className="text-muted-foreground">
            List of recent transactions performed by users
          </p>
        </div>
        <Recents />
      </div>
    </div>
  );
};
