"use client";
import React from 'react';
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import {MagnifyingGlassIcon} from "@heroicons/react/24/solid";

const SearchButton = ({}) => {
  const {pending} = useFormStatus();

  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded-full disabled:opacity-50 disabled:cursor-not-allowed">
      {pending && 'Searching...'}
      {!pending && <MagnifyingGlassIcon className="w-5 h-5 text-white" />}
    </button>
  );
};

export default SearchButton;
// by Rokas with ❤️
