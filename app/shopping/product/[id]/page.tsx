import React from 'react';
import {fetch} from "next/dist/compiled/@edge-runtime/primitives";
import {getFetchUrl} from "@/lib/getFetchUrl";
import {ProductData} from "@/typings";
import {notFound} from "next/navigation";
import {StarIcon} from "@heroicons/react/24/solid";

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

      {productData.content.reviews && (
        <div className="flex space-x-1">
          {[
            ...Array.from({
              length: Math.floor(productData.content.reviews.rating),
            }),
          ].map((_, i) => (
            <StarIcon key={i} className="h-5 w-5 text-yellow-500" />
          ))}

          {[
            ...Array.from({
              length: 5 - Math.floor(productData.content.reviews.rating),
            }),
          ].map((_, i) => (
            <StarIcon key={i} className="h-5 w-5 text-gray-200" />
          ))}
        </div>
      )}

      <section className="flex flex-col lg:flex-row mt-5 md:mt-0">
        <div className="md:p-10 md:pl-0 mx-auto">
          <div className="flex gap-4">
            <img src={productData.content.images?.full_size[0]} alt={productData.content.title} className="h-80 w-80 p-5 border rounded-md object-contain" />
            <div className="flex flex-col justify-between">
              {productData.content.images?.full_size.slice(1, 3).map((image) => (
                <img src={image} alt={productData.content.title} className="w-[9.5rem] h-[9.5rem] object-contain border rounded-md" />
              ))}
            </div>
          </div>

          <div className="flex space-x-6 overflow-x-scroll py-2 md:w-[30rem]">
            {productData.content.images?.full_size.slice(3).map((image) => (
              <img key={image} src={image} alt="" className="w-20 h-20 object-contain" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
// by Rokas with ❤️
