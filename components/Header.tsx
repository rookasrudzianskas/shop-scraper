"use client";

import React from 'react';
import Image from "next/image";
import Link from "next/link";
import {MagnifyingGlassIcon} from "@heroicons/react/24/solid";
import SearchButton from "@/components/SearchButton";
import {SearchSelect, SearchSelectItem, Select, SelectItem} from "@tremor/react";
import Avatar from "react-avatar";

const SORT_BY_MAP = {
  r: 'Default',
  rv: 'By Review',
  p: 'By Price, (low to high)',
  pd: 'By Price, (high to low)',
}

const Header = ({}) => {

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

            <div>
              <SearchSelect
                className="min-w-4"
                placeholder="# of pages"
              >
                {[...Array(100)].map((_, i) => (
                  <SearchSelectItem key={i} value={(i + 1).toString()}>
                    {(i + 1).toString()} pages
                  </SearchSelectItem>
                ))}
              </SearchSelect>

              <Select className="min-w-4" placeholder="Sort">
                {Object.entries(SORT_BY_MAP).map(([key, value]) => (
                  <SelectItem key={key} value={key}>
                    {value}
                  </SelectItem>
                ))}
              </Select>

              <Select className="min-w-4" placeholder={'Min Price...'}>
                {["", "100", "250", "500", "750", "900", "1000+"].map((_, i) => (
                  <SelectItem key={i} value={(_).toString()}>
                    {i === 0 ? 'No Minimum': `$${_.toString()}`}
                  </SelectItem>
                ))}
              </Select>

              <SearchSelect
                className="min-w-4"
                placeholder="Max Price..."
              >
                {["", "100", "250", "500", "750", "900", "1000+"].map((_, i) => (
                  <SelectItem key={i} value={(_).toString()}>
                    {i === 0 ? 'No Max': `$${_.toString()}`}
                  </SelectItem>
                ))}
              </SearchSelect>

            </div>
          </form>
        </div>
      <div className="hidden lg:flex flex-1 justify-end">
        <Avatar name="Rokas Rudzianskas" round size="50" />
      </div>
    </header>
  );
};

export default Header;
// by Rokas with ❤️
