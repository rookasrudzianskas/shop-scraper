import React from 'react';
import {fetch} from "next/dist/compiled/@edge-runtime/primitives";
import {getFetchUrl} from "@/lib/getFetchUrl";
import {ProductData} from "@/typings";
import {notFound} from "next/navigation";

export const revalidate = 300;

type Props = {
  params: {
    id: string;
  }
}

const ProductPage = async ({params: {id}}: Props) => {
  const response = await fetch(getFetchUrl(`api/shopping/product/${id}`));
  const productData = await response.json() as ProductData;

  if(!productData.content.pricing) {
    notFound();
  }

  return (
    <div className="p-12 pt-0">
      <h1 className="text-2xl">{productData.content.title}</h1>
    </div>
  );
};

export default ProductPage;
// by Rokas with ❤️
