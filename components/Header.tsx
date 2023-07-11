"use client";

import React from 'react';
import Image from "next/image";
import Link from "next/link";
import {MagnifyingGlassIcon} from "@heroicons/react/24/solid";
import SearchButton from "@/components/SearchButton";
import {experimental_useFormStatus as useFormStatus} from "react-dom";

const Header = ({}) => {
  const {pending} = useFormStatus();

  return (
    <header>
      <Link href={'/'}>
        <Image
          // src="https://links.papareact.com/2O8"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png"
          alt={'Logo'}
          width={150}
          height={150}
          className="object-contain mr-10"
        />
      </Link>
        <div className="w-full md:max-w-2xl">
          <form>
            <div className="flex items-center gap-2 w-full px-4">
              <div className="flex items-center space-x-2 bg-white shadow-xl rounded-full border-0 px-6 py-4 md:max-w-5xl flex-1">
                <MagnifyingGlassIcon className="w-5 h-5 text-gray-400" />
                <input type="text" placeholder={'Search'} name="searchTerm" className="outline-none flex-1"/>
              </div>
              <SearchButton />
            </div>
          </form>
        </div>
    </header>
  );
};

export default Header;
// by Rokas with ❤️
