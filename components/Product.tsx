"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface ProductItem {
  id: number;
  title: string;
  description: string;
  price: number | string;
  unprice?: number | string;
  img: string;
  link: string;
  category: string;
  featured?: string;
  rating: number;
}

interface ProductProps {
  title: string;
  sub: string;
  link: string;
  items: ProductItem[];
}

const Product: React.FC<ProductProps> = ({ title, sub, link, items }) => {
  const [visibleCount, setVisibleCount] = useState(5);

  const showMore = () => setVisibleCount((prev) => prev + 5);

  const calculateDiscount = (unprice: number | string | undefined, price: number | string): string | null => {
    if (unprice && Number(unprice) > Number(price)) {
      const discount = ((Number(unprice) - Number(price)) / Number(unprice)) * 100;
      return `${Math.round(discount)}% OFF`;
    }
    return null;
  };

  return (
    <div className="py-4 container">
      <div className="mb-4 flex flex-col md:flex-row items-center justify-between">
        <div>
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="text-sm text-gray-600">{sub}</p>
        </div>
        <Link href={link} className="bg-blue-500 rounded-md text-white font-medium px-4 text-xs py-1">Explore All</Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
        {items.slice(0, visibleCount).map((item) => (
            <Link href={item.link} key={item.id} className="bg-white relative rounded-md overflow-hidden hover:shadow-xl">
                {item.featured && <span className="text-xs bg-black/50 rounded-br-md text-white px-2 py-1 absolute top-0 left-0 font-semibold">{item.featured}</span>}
                <Image width={265} height={365} src={item.img} alt={item.title} className="w-full h-72 object-cover" />
                <div className='p-2'>
                    <h3 className="text-base font-medium line-clamp-3">{item.title}</h3>
                    <div className="text-sm text-gray-500 my-1">Category: {item.category}</div>
                    <div className="mt-2 flex items-end justify-between">
                        <div className="mt-2 flex flex-col">
                            {item.unprice && <del className="text-gray-400 mr-2">${item.unprice}</del>}
                            <div>
                                <span className="text-gray-800 text-xl font-semibold">
                                    ${item.price}
                                </span>
                                {calculateDiscount(item.unprice, item.price) && (
                                    <span className="ml-2 text-gray-400 text-sm">
                                        {calculateDiscount(item.unprice, item.price)}
                                    </span>
                                )}
                            </div>
                        </div>
                        <div className='flex items-center space-x-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><path fill="#ffb636" d="m252.5 381l-128 49c-5.9 2.2-12.1-2.3-11.8-8.6l7-136.9c.1-2.1-.6-4.2-1.9-5.9L31.6 172c-4-4.9-1.6-12.2 4.5-13.9l132.4-35.6c2.1-.6 3.9-1.9 5-3.7L248.3 4c3.4-5.3 11.2-5.3 14.6 0l74.8 114.9c1.2 1.8 3 3.1 5 3.7l132.4 35.6c6.1 1.6 8.5 9 4.5 13.9l-86.1 106.6c-1.3 1.7-2 3.8-1.9 5.9l7 136.9c.3 6.3-5.9 10.8-11.8 8.6l-128-49c-2.1-.8-4.3-.8-6.3-.1"/><path fill="#ffd469" d="m456.1 51.7l-41-41c-1.2-1.2-2.8-1.7-4.4-1.5s-3.1 1.2-3.9 2.6l-42.3 83.3c-1.2 2.1-.8 4.6.9 6.3c1 1 2.4 1.5 3.7 1.5c.9 0 1.8-.2 2.6-.7L454.9 60c1.4-.8 2.4-2.2 2.6-3.9c.3-1.6-.3-3.2-1.4-4.4m-307 43.5l-42.3-83.3c-.8-1.4-2.2-2.4-3.9-2.6c-1.6-.2-3.3.3-4.4 1.5l-41 41c-1.2 1.2-1.7 2.8-1.5 4.4s1.2 3.1 2.6 3.9l83.3 42.3c.8.5 1.7.7 2.6.7c1.4 0 2.7-.5 3.7-1.5c1.7-1.8 2-4.4.9-6.4m140.7 410l-29-88.8c-.2-.9-.7-1.7-1.3-2.3c-1-1-2.3-1.5-3.7-1.5c-2.4 0-4.4 1.6-5.1 3.9l-29 88.8c-.4 1.6-.1 3.3.9 4.6s2.5 2.1 4.2 2.1h57.9c1.6 0 3.2-.8 4.2-2.1c1.1-1.4 1.4-3.1.9-4.7"/></svg>
                            <p>
                                {item.rating}
                            </p>
                        </div>
                    </div>
                </div>
            </Link>
        ))}
      </div>

      {visibleCount < items.length && (
        <div className='flex justify-center w-full'>
            <button onClick={showMore} className="mt-4 px-4 py-1 bg-white border-blue-500 mx-auto text-blue-500 font-medium uppercase rounded-lg">
            Show more
            </button>
        </div>
      )}
    </div>
  );
};

export default Product;