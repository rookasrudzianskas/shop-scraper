import React from 'react';
import {redirect} from "next/navigation";
import {SearchParams} from "@/typings";
import {getFetchUrl} from "@/lib/getFetchUrl";

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

  return (
    <div>

    </div>
  );
};

export default SearchPage;
// by Rokas with ❤️
