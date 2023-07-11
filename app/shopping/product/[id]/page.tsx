import React from 'react';

export const revalidate = 300;

type Props = {
  params: {
    id: string;
  }
}

const ProductPage = ({params: {id}}: Props) => {
  return (
    <div>
      Hello
    </div>
  );
};

export default ProductPage;
// by Rokas with ❤️
