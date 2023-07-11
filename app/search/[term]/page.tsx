import React from 'react';
import {redirect} from "next/navigation";

type Props = {
  searchParams: any;
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
