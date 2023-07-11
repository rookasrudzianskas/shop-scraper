import React from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const LoadingPage = ({}) => {
  return (
    <div>
      <div>
        <div className="w-36 md:w-64 space-y-5">
          {[...Array(4)].map((_, i) => (
            <div className="border rounded-r-lg md:rounded-lg p-5">
              <h1 className="font-bold">
                <Skeleton />
              </h1>
              <Skeleton count={(Math.random() * 5)  + 1} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
// by Rokas with ❤️
