import React from 'react';
import {redirect} from "next/navigation";
import {SearchParams} from "@/typings";

type Props = {
  searchParams: SearchParams;
  params: {
    term: string;
  }
}

const SearchPage = ({searchParams, params: {term}}: Props) => {
  if(!term) redirect("/");
  // fetch from api

  return (
    <div>

    </div>
  );
};

export default SearchPage;
// by Rokas with ❤️
