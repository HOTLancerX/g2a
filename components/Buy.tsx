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

const Buy: React.FC<ProductProps> = ({ title, sub, link, items }) => {
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
        {link && <Link href={link} className="bg-blue-500 rounded-md text-white font-medium px-4 text-xs py-1">Explore All</Link>}
      </div>

      <div className="grid grid-cols-1 gap-4 md:gap-6">
        {items.slice(0, visibleCount).map((item) => (
            <Link href={item.link} key={item.id} className="group bg-white hover:bg-blue-50 relative flex flex-col md:flex-row md:items-center md:justify-between w-full overflow-hidden p-2 border rounded-md hover:border-blue-500 hover:shadow-md">
                <div className='flex items-center gap-3 w-full md:w-1/2'>
                  <Image width={100} height={100} src={item.img} alt={item.title} className="w-12 md:w-16 md:h-16 h-12 rounded-full object-cover" />
                  <div>
                    <h3 className="text-base font-medium line-clamp-1">{item.title}</h3>
                    <p className="text-sm text-gray-500 md:block hidden line-clamp-1">{item.description}</p>
                    <span className="text-sm text-gray-500">Category: {item.category}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between md:justify-end md:w-1/2 w-full">
                  <div className="flex flex-row items-center gap-2">
                    {item.unprice && <del className="text-gray-400 text-base">${item.unprice}</del>}
                    <span className="text-gray-800 text-xl font-semibold">
                        ${item.price}
                    </span>
                    {calculateDiscount(item.unprice, item.price) && (
                        <span className="text-gray-400 text-sm">
                            {calculateDiscount(item.unprice, item.price)}
                        </span>
                    )}
                  </div>
                  <div className='flex items-center ml-4'>
                    <Link
                      href="/"
                      className='bg-blue-500 group-hover:bg-blue-700 rounded-md text-white font-semibold'
                    >
                      <svg className='md:group-hover:hidden hidden md:block p-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" ><g stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor"><circle cx="6" cy="22" r="1" stroke="none"></circle><circle cx="20" cy="22" r="1" stroke="none"></circle><circle cx="6" cy="22" r="1" fill="none" stroke-miterlimit="10"></circle><circle cx="20" cy="22" r="1" fill="none" stroke-miterlimit="10"></circle><path fill="none" stroke-miterlimit="10" d="M4.8 7H22l-2 10H6L4 2H1"></path></g></svg>
                      <p className='md:group-hover:block md:hidden px-4 py-2'>
                        Add to cart
                      </p>
                    </Link>
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

export default Buy;