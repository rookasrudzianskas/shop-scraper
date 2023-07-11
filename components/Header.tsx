import React from 'react';
import Image from "next/image";
import Link from "next/link";

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
    </header>
  );
};

export default Header;
// by Rokas with ❤️
