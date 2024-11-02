"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface BlogItem {
  id: number;
  title: string;
  description: string;
  img: string;
  link: string;
  category: string;
}

interface BlogProps {
  title: string;
  sub: string;
  link: string;
  items: BlogItem[];
}

const Blog: React.FC<BlogProps> = ({ title, sub, link, items }) => {
  const [visibleCount, setVisibleCount] = useState(4);

  const showMore = () => setVisibleCount((prev) => prev + 4);

  return (
    <div className="py-4 container">
      <div className="mb-4 flex flex-col md:flex-row items-center justify-between">
        <div>
            <h2 className="text-2xl font-bold">{title}</h2>
            {sub && (
            <p className="text-sm text-gray-600">{sub}</p>
            )}
        </div>
        {link && (
        <Link href={link} className="bg-blue-500 rounded-md text-white font-medium px-4 text-xs py-1">Explore All</Link>
        )}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-4">
        {items.slice(0, visibleCount).map((item) => (
            <Link href={item.link} key={item.id} className="bg-white relative rounded-md overflow-hidden hover:shadow-xl">
                <Image width={163} height={720} src={item.img} alt={item.title} className="w-full" />
                <div className='p-2'>
                    <h3 className="text-base font-medium line-clamp-3">{item.title}</h3>
                    <p>
                    {item.description}
                    </p>
                    <div className="text-sm text-gray-500 my-1">Category: {item.category}</div>
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

export default Blog;