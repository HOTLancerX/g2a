import Image from "next/image";
import Link from "next/link";

const IndexPage: React.FC = () => {
  return (
    <div className="bg-[url('/bg-1.jpg')] bg-cover bg-no-repeat">
      <div className="container py-6">
        <div className="flex nober overflow-x-auto md:grid grid-cols-4 gap-6">
          <Link
            href="/"
            className="relative flex-none w-full"
          >
            <Image
              src="/1.jpg"
              width={270}
              height={465}
              alt="ads"
              className="h-full w-full hover:opacity-90 rounded"
            />
            <h1 className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded absolute left-1/2 -translate-x-1/2 text-nowrap whitespace-nowrap bottom-6">
            Explore the deals
            </h1>
          </Link>
          <Link
            href="/"
            className="relative flex-none w-full"
          >
            <Image
              src="/2.jpg"
              width={270}
              height={465}
              alt="ads"
              className="h-full w-full hover:opacity-90 rounded"
            />
            <h1 className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded absolute left-1/2 -translate-x-1/2 text-nowrap whitespace-nowrap bottom-6">
            Explore the deals
            </h1>
          </Link>
          <Link
            href="/"
            className="relative flex-none w-full"
          >
            <Image
              src="/3.jpg"
              width={270}
              height={465}
              alt="ads"
              className="h-full w-full hover:opacity-90 rounded"
            />
            <h1 className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded absolute left-1/2 -translate-x-1/2 text-nowrap whitespace-nowrap bottom-6">
            Explore the deals
            </h1>
          </Link>
          <Link
            href="/"
            className="relative flex-none w-full"
          >
            <Image
              src="/4.jpg"
              width={270}
              height={465}
              alt="ads"
              className="h-full w-full hover:opacity-90 rounded"
            />
            <h1 className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded absolute left-1/2 -translate-x-1/2 text-nowrap whitespace-nowrap bottom-6">
            Explore the deals
            </h1>
          </Link>
        </div>
      </div>
      

    </div>
  );
};

export default IndexPage;