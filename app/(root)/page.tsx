import Image from "next/image";
import Link from "next/link";

const IndexPage: React.FC = () => {
  return (
    <>
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

    <div className="bg-[url('/bg-2.jpg')] bg-cover md:bg-center bg-left bg-no-repeat">
      <div className="container md:py-6 py-20">
        <div className="flex flex-col md:flex-row md:justify-between gap-6">
          <div className="w-full md:w-[30%] mb-14">
            <Image
              src="/11.png"
              width={200}
              height={50}
              alt="ads"
              className="mb-16 mt-10"
            />
            <div>
            <h2 className="text-2xl mb-4 font-bold text-wrap text-white">
              Horizon Zero Dawn Remastered (PC) - Steam Account - GLOBAL
            </h2>
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-wrap text-white">
                $55.98
              </h2>
              <Link
                href="/"
                className="bg-blue-500 px-4 py-2 rounded text-white"
              >
                Add to cart
              </Link>
            </div>
            </div>
          </div>
          <div className="w-full md:w-[30%] mb-14">
            <Image
              src="/11.png"
              width={200}
              height={50}
              alt="ads"
              className="mb-16 mt-10"
            />
            <div>
              <h2 className="text-2xl mb-4 font-bold text-wrap text-white">
                Horizon Zero Dawn Remastered (PC) - Steam Account - GLOBAL
              </h2>
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-wrap text-white">
                  $55.98
                </h2>
                <Link
                  href="/"
                  className="bg-blue-500 px-4 py-2 rounded text-white"
                >
                  Add to cart
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default IndexPage;