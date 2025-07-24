'use client';

import { Actions } from './actions';
import { Insight } from './insight';
import { Recents } from './recents';
import { Revenue } from './revenue';

export const Home = () => {
  return (
    <div className="w-full h-full flex p-4 gap-4">
      <div className="h-full w-1/2">
        <div className="mb-4">
          <h1 className="font-bold text-xl">Insights</h1>
          <p className="text-muted-foreground">
            List of recent transactions performed by users
          </p>
        </div>
        <div className="w-full flex flex-col gap-4">
          <div>
            <Insight />
          </div>
          <div className="flex gap-4">
            <div className="w-5/12">
              <Revenue />
            </div>
            <div className="w-7/12">
              <Actions />
            </div>
          </div>
        </div>
      </div>
      <div className="h-full w-1/2 flex flex-col">
        <div className="mb-4">
          <h1 className="font-bold text-xl">Recent Transactions</h1>
          <p className="text-muted-foreground">
            List of recent transactions performed by users
          </p>
        </div>
        <Recents />
      </div>
    </div>
  );
};
