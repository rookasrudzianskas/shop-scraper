import React from 'react';
import {redirect} from "next/navigation";
import {PageResult, SearchParams} from "@/typings";
import {getFetchUrl} from "@/lib/getFetchUrl";
import ResultsList from "@/components/ResultsList";

export const revalidate = 60;

type Props = {
  searchParams: SearchParams;
  params: {
    term: string;
  }
}

const SearchPage = async ({searchParams, params: {term}}: Props) => {
  if (!term) redirect("/");

  // fetch from api
  const response = await fetch(getFetchUrl(`api/search`), {
    method: 'POST',
    body: JSON.stringify({ searchTerm: term, ...searchParams }),
  });

  const results = await response.json() as PageResult[];

  return (
    <div>
      <ResultsList results={results} term={term} />
    </div>
  );
};

export default SearchPage;
// by Rokas with ❤️
