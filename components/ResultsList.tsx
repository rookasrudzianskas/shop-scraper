import React from 'react';
import {PageResult} from "@/typings";
import Link from "next/link";

type Props = {
  results: PageResult[];
  term: string;
}

const ResultsList = ({results, term}: Props) => {
  return (
    <div className="flex md:px-5">
      {/* sidebar */}
      <div>
        {/* for each page */}
        {results.map((pageResult) => (
          <div key={pageResult.job_id} className="space-y-2">
            {pageResult.content.results.filters?.map((filter, i) => (
              <div key={i} className="border rounded-r-lg md:rounded-lg p-5">
                <p className="font-bold">{filter.name}</p>
                <div className="flex flex-col">
                  {filter.values.map((value) => (
                    <Link prefetch={false} href={`https://www.google.com${value.url}`}>
                      {value.value}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      {/* results */}
      <div className="">
        {results.map((pageResult, i) => (
          <div key={pageResult.job_id} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid">
            {i !== 0 && <hr className="w-full col-span-full" />}

            <div className="md:col-span-2 lg:col-span-3 xl:col-span-4 py-5">
              <div className="flex space-x-2 items-center divide-x-2">
                <h1>Shop on Google</h1>
                <h2 className="text-xl font-semibold pl-2">Search Results for Page {i + 1}</h2>
              </div>

              <h3 className="font-extralight">
                Showing results for <span className="font-bold">{decodeURIComponent(term)}</span>
              </h3>
            </div>

            {pageResult?.content?.results?.organic?.map((item, i) => (
              <Link prefetch={false} href={item.url.includes("url?url=") ?
                item.url.split("url?url=")?.[1] :
                item.url.split("?")?.[0]
              } key={item.pos}>
                <div>
                  <p>{item.title}</p>
                </div>
                <div>
                  <p>{item.price_str} {item.currency}</p>
                  <p>{item.merchant.name}</p>
                </div>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultsList;
// by Rokas with ❤️
