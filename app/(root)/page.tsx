import Product from "@/components/Product";
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

      <div className="container bg-white">
        <div className="flex items-center justify-between py-6">
          <h2 className="font-bold text-xl md:text-2xl">
            Choose your platform
          </h2>
          <div className="flex items-center justify-end gap-4 md:gap-6">
            <Link
              href="/"
              className="flex items-center"
            >
              <Image
                src="/1.svg"
                width={30}
                height={30}
                alt="ads"
              />
              <h1 className="text-sm pl-2">
              PC
              </h1>
            </Link>
            <Link
              href="/"
              className="flex items-center"
            >
              <Image
                src="/2.svg"
                width={30}
                height={30}
                alt="ads"
              />
              <h1 className="text-sm pl-2">
              Xbox
              </h1>
            </Link>
            <Link
              href="/"
              className="flex items-center"
            >
              <Image
                src="/3.svg"
                width={30}
                height={30}
                alt="ads"
              />
              <h1 className="text-sm pl-2">
              Playstation
              </h1>
            </Link>
            <Link
              href="/"
              className="flex items-center"
            >
              <Image
                src="/4.svg"
                width={30}
                height={30}
                alt="ads"
              />
              <h1 className="text-sm pl-2">
              Nintendo
              </h1>
            </Link>
          </div>
        </div>
      </div>

      <Product
        title="Bestsellers"
        sub="The hottest items on our marketplace – discover what captured our users' hearts!"
        link="/"
        items={[
          {
            "id": 1,
            "title": "Wireless Gaming Headset",
            "description": "High-quality surround sound with noise cancellation.",
            "price": 120,
            "unprice": 150,
            "img": "/product/1.jpg",
            "link": "/product/1",
            "category": "Accessories",
            "featured": "Best Seller",
            "rating": 4.8
          },
          {
            "id": 2,
            "title": "Mechanical Gaming Keyboard",
            "description": "RGB backlighting with programmable keys.",
            "price": 90,
            "unprice": 120,
            "img": "/product/2.jpg",
            "link": "/product/2",
            "category": "Accessories",
            "featured": "Top Pick",
            "rating": 4.5
          },
          {
            "id": 3,
            "title": "Gaming Mouse",
            "description": "Ergonomic design with adjustable DPI settings.",
            "price": 45,
            "unprice": 60,
            "img": "/product/3.jpg",
            "link": "/product/3",
            "category": "Accessories",
            "rating": 4.3
          },
          {
            "id": 4,
            "title": "Ultra-Wide Gaming Monitor",
            "description": "34-inch curved screen with 144Hz refresh rate.",
            "price": 500,
            "unprice": 600,
            "img": "/product/4.jpg",
            "link": "/product/4",
            "category": "Monitors",
            "featured": "New Arrival",
            "rating": 4.9
          },
          {
            "id": 5,
            "title": "Gaming Laptop",
            "description": "High-performance laptop with dedicated GPU and 16GB RAM.",
            "price": 1500,
            "unprice": 1800,
            "img": "/product/5.jpg",
            "link": "/product/5",
            "category": "Laptops",
            "rating": 4.7
          },
          {
            "id": 6,
            "title": "4K Game Capture Card",
            "description": "Record and stream in 4K quality.",
            "price": 200,
            "unprice": 250,
            "img": "/product/6.jpg",
            "link": "/product/6",
            "category": "Accessories",
            "rating": 4.4
          },
          {
            "id": 7,
            "title": "Gaming Chair",
            "description": "Ergonomic chair with lumbar support for long gaming sessions.",
            "price": 180,
            "unprice": 220,
            "img": "/product/7.jpg",
            "link": "/product/7",
            "category": "Furniture",
            "rating": 4.6
          },
          {
            "id": 8,
            "title": "VR Headset",
            "description": "Experience immersive VR gaming with a high-resolution display.",
            "price": 300,
            "unprice": 350,
            "img": "/product/8.jpg",
            "link": "/product/8",
            "category": "Accessories",
            "featured": "Popular",
            "rating": 4.7
          },
          {
            "id": 9,
            "title": "External SSD for Gaming",
            "description": "High-speed external SSD with 1TB storage for fast game loading.",
            "price": 100,
            "unprice": 130,
            "img": "/product/9.jpg",
            "link": "/product/9",
            "category": "Storage",
            "rating": 4.6
          },
          {
            "id": 10,
            "title": "Gaming Console",
            "description": "Next-gen console with stunning graphics and fast performance.",
            "price": 500,
            "unprice": 550,
            "img": "/product/10.jpg",
            "link": "/product/10",
            "category": "Consoles",
            "featured": "Limited Edition",
            "rating": 4.8
          },
          {
            "id": 11,
            "title": "Wireless Gaming Headset",
            "description": "High-quality surround sound with noise cancellation.",
            "price": 120,
            "unprice": 150,
            "img": "/product/11.jpg",
            "link": "/product/1",
            "category": "Accessories",
            "featured": "Best Seller",
            "rating": 4.8
          },
          {
            "id": 12,
            "title": "Mechanical Gaming Keyboard",
            "description": "RGB backlighting with programmable keys.",
            "price": 90,
            "unprice": 120,
            "img": "/product/12.jpg",
            "link": "/product/2",
            "category": "Accessories",
            "featured": "Top Pick",
            "rating": 4.5
          },
          {
            "id": 13,
            "title": "Gaming Mouse",
            "description": "Ergonomic design with adjustable DPI settings.",
            "price": 45,
            "unprice": 60,
            "img": "/product/13.jpg",
            "link": "/product/3",
            "category": "Accessories",
            "rating": 4.3
          },
          {
            "id": 14,
            "title": "Ultra-Wide Gaming Monitor",
            "description": "34-inch curved screen with 144Hz refresh rate.",
            "price": 500,
            "unprice": 600,
            "img": "/product/14.jpg",
            "link": "/product/4",
            "category": "Monitors",
            "featured": "New Arrival",
            "rating": 4.9
          },
          {
            "id": 15,
            "title": "Gaming Laptop",
            "description": "High-performance laptop with dedicated GPU and 16GB RAM.",
            "price": 1500,
            "unprice": 1800,
            "img": "/product/15.jpg",
            "link": "/product/5",
            "category": "Laptops",
            "rating": 4.7
          },
          {
            "id": 16,
            "title": "4K Game Capture Card",
            "description": "Record and stream in 4K quality.",
            "price": 200,
            "unprice": 250,
            "img": "/product/16.jpg",
            "link": "/product/6",
            "category": "Accessories",
            "rating": 4.4
          },
          {
            "id": 17,
            "title": "Gaming Chair",
            "description": "Ergonomic chair with lumbar support for long gaming sessions.",
            "price": 180,
            "unprice": 220,
            "img": "/product/17.jpg",
            "link": "/product/7",
            "category": "Furniture",
            "rating": 4.6
          },
          {
            "id": 18,
            "title": "VR Headset",
            "description": "Experience immersive VR gaming with a high-resolution display.",
            "price": 300,
            "unprice": 350,
            "img": "/product/18.jpg",
            "link": "/product/8",
            "category": "Accessories",
            "featured": "Popular",
            "rating": 4.7
          },
          {
            "id": 19,
            "title": "External SSD for Gaming",
            "description": "High-speed external SSD with 1TB storage for fast game loading.",
            "price": 100,
            "unprice": 130,
            "img": "/product/19.jpg",
            "link": "/product/9",
            "category": "Storage",
            "rating": 4.6
          },
          {
            "id": 20,
            "title": "Gaming Console",
            "description": "Next-gen console with stunning graphics and fast performance.",
            "price": 500,
            "unprice": 550,
            "img": "/product/20.jpg",
            "link": "/product/10",
            "category": "Consoles",
            "featured": "Limited Edition",
            "rating": 4.8
          }
        ]}
      />

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

      <Product
        title="Upcoming games"
        sub="The hottest items on our marketplace – discover what captured our users' hearts!"
        link="/"
        items={[
          {
            "id": 11,
            "title": "Wireless Gaming Headset",
            "description": "High-quality surround sound with noise cancellation.",
            "price": 120,
            "unprice": 150,
            "img": "/product/11.jpg",
            "link": "/product/1",
            "category": "Accessories",
            "featured": "Best Seller",
            "rating": 4.8
          },
          {
            "id": 12,
            "title": "Mechanical Gaming Keyboard",
            "description": "RGB backlighting with programmable keys.",
            "price": 90,
            "unprice": 120,
            "img": "/product/12.jpg",
            "link": "/product/2",
            "category": "Accessories",
            "featured": "Top Pick",
            "rating": 4.5
          },
          {
            "id": 13,
            "title": "Gaming Mouse",
            "description": "Ergonomic design with adjustable DPI settings.",
            "price": 45,
            "unprice": 60,
            "img": "/product/13.jpg",
            "link": "/product/3",
            "category": "Accessories",
            "rating": 4.3
          },
          {
            "id": 14,
            "title": "Ultra-Wide Gaming Monitor",
            "description": "34-inch curved screen with 144Hz refresh rate.",
            "price": 500,
            "unprice": 600,
            "img": "/product/14.jpg",
            "link": "/product/4",
            "category": "Monitors",
            "featured": "New Arrival",
            "rating": 4.9
          },
          {
            "id": 15,
            "title": "Gaming Laptop",
            "description": "High-performance laptop with dedicated GPU and 16GB RAM.",
            "price": 1500,
            "unprice": 1800,
            "img": "/product/15.jpg",
            "link": "/product/5",
            "category": "Laptops",
            "rating": 4.7
          },
          {
            "id": 16,
            "title": "4K Game Capture Card",
            "description": "Record and stream in 4K quality.",
            "price": 200,
            "unprice": 250,
            "img": "/product/16.jpg",
            "link": "/product/6",
            "category": "Accessories",
            "rating": 4.4
          },
          {
            "id": 17,
            "title": "Gaming Chair",
            "description": "Ergonomic chair with lumbar support for long gaming sessions.",
            "price": 180,
            "unprice": 220,
            "img": "/product/17.jpg",
            "link": "/product/7",
            "category": "Furniture",
            "rating": 4.6
          },
          {
            "id": 18,
            "title": "VR Headset",
            "description": "Experience immersive VR gaming with a high-resolution display.",
            "price": 300,
            "unprice": 350,
            "img": "/product/18.jpg",
            "link": "/product/8",
            "category": "Accessories",
            "featured": "Popular",
            "rating": 4.7
          },
          {
            "id": 19,
            "title": "External SSD for Gaming",
            "description": "High-speed external SSD with 1TB storage for fast game loading.",
            "price": 100,
            "unprice": 130,
            "img": "/product/19.jpg",
            "link": "/product/9",
            "category": "Storage",
            "rating": 4.6
          },
          {
            "id": 20,
            "title": "Gaming Console",
            "description": "Next-gen console with stunning graphics and fast performance.",
            "price": 500,
            "unprice": 550,
            "img": "/product/20.jpg",
            "link": "/product/10",
            "category": "Consoles",
            "featured": "Limited Edition",
            "rating": 4.8
          },
          {
            "id": 1,
            "title": "Wireless Gaming Headset",
            "description": "High-quality surround sound with noise cancellation.",
            "price": 120,
            "unprice": 150,
            "img": "/product/1.jpg",
            "link": "/product/1",
            "category": "Accessories",
            "featured": "Best Seller",
            "rating": 4.8
          },
          {
            "id": 2,
            "title": "Mechanical Gaming Keyboard",
            "description": "RGB backlighting with programmable keys.",
            "price": 90,
            "unprice": 120,
            "img": "/product/2.jpg",
            "link": "/product/2",
            "category": "Accessories",
            "featured": "Top Pick",
            "rating": 4.5
          },
          {
            "id": 3,
            "title": "Gaming Mouse",
            "description": "Ergonomic design with adjustable DPI settings.",
            "price": 45,
            "unprice": 60,
            "img": "/product/3.jpg",
            "link": "/product/3",
            "category": "Accessories",
            "rating": 4.3
          },
          {
            "id": 4,
            "title": "Ultra-Wide Gaming Monitor",
            "description": "34-inch curved screen with 144Hz refresh rate.",
            "price": 500,
            "unprice": 600,
            "img": "/product/4.jpg",
            "link": "/product/4",
            "category": "Monitors",
            "featured": "New Arrival",
            "rating": 4.9
          },
          {
            "id": 5,
            "title": "Gaming Laptop",
            "description": "High-performance laptop with dedicated GPU and 16GB RAM.",
            "price": 1500,
            "unprice": 1800,
            "img": "/product/5.jpg",
            "link": "/product/5",
            "category": "Laptops",
            "rating": 4.7
          },
          {
            "id": 6,
            "title": "4K Game Capture Card",
            "description": "Record and stream in 4K quality.",
            "price": 200,
            "unprice": 250,
            "img": "/product/6.jpg",
            "link": "/product/6",
            "category": "Accessories",
            "rating": 4.4
          },
          {
            "id": 7,
            "title": "Gaming Chair",
            "description": "Ergonomic chair with lumbar support for long gaming sessions.",
            "price": 180,
            "unprice": 220,
            "img": "/product/7.jpg",
            "link": "/product/7",
            "category": "Furniture",
            "rating": 4.6
          },
          {
            "id": 8,
            "title": "VR Headset",
            "description": "Experience immersive VR gaming with a high-resolution display.",
            "price": 300,
            "unprice": 350,
            "img": "/product/8.jpg",
            "link": "/product/8",
            "category": "Accessories",
            "featured": "Popular",
            "rating": 4.7
          },
          {
            "id": 9,
            "title": "External SSD for Gaming",
            "description": "High-speed external SSD with 1TB storage for fast game loading.",
            "price": 100,
            "unprice": 130,
            "img": "/product/9.jpg",
            "link": "/product/9",
            "category": "Storage",
            "rating": 4.6
          },
          {
            "id": 10,
            "title": "Gaming Console",
            "description": "Next-gen console with stunning graphics and fast performance.",
            "price": 500,
            "unprice": 550,
            "img": "/product/10.jpg",
            "link": "/product/10",
            "category": "Consoles",
            "featured": "Limited Edition",
            "rating": 4.8
          }
        ]}
      />

      <Product
        title="Expand your games with DLC"
        sub="The hottest items on our marketplace – discover what captured our users' hearts!"
        link="/"
        items={[
          {
            "id": 8,
            "title": "VR Headset",
            "description": "Experience immersive VR gaming with a high-resolution display.",
            "price": 300,
            "unprice": 350,
            "img": "/product/8.jpg",
            "link": "/product/8",
            "category": "Accessories",
            "featured": "Popular",
            "rating": 4.7
          },
          {
            "id": 9,
            "title": "External SSD for Gaming",
            "description": "High-speed external SSD with 1TB storage for fast game loading.",
            "price": 100,
            "unprice": 130,
            "img": "/product/9.jpg",
            "link": "/product/9",
            "category": "Storage",
            "rating": 4.6
          },
          {
            "id": 10,
            "title": "Gaming Console",
            "description": "Next-gen console with stunning graphics and fast performance.",
            "price": 500,
            "unprice": 550,
            "img": "/product/10.jpg",
            "link": "/product/10",
            "category": "Consoles",
            "featured": "Limited Edition",
            "rating": 4.8
          },
          {
            "id": 11,
            "title": "Wireless Gaming Headset",
            "description": "High-quality surround sound with noise cancellation.",
            "price": 120,
            "unprice": 150,
            "img": "/product/11.jpg",
            "link": "/product/1",
            "category": "Accessories",
            "featured": "Best Seller",
            "rating": 4.8
          },
          {
            "id": 12,
            "title": "Mechanical Gaming Keyboard",
            "description": "RGB backlighting with programmable keys.",
            "price": 90,
            "unprice": 120,
            "img": "/product/12.jpg",
            "link": "/product/2",
            "category": "Accessories",
            "featured": "Top Pick",
            "rating": 4.5
          },
          {
            "id": 13,
            "title": "Gaming Mouse",
            "description": "Ergonomic design with adjustable DPI settings.",
            "price": 45,
            "unprice": 60,
            "img": "/product/13.jpg",
            "link": "/product/3",
            "category": "Accessories",
            "rating": 4.3
          },
          {
            "id": 14,
            "title": "Ultra-Wide Gaming Monitor",
            "description": "34-inch curved screen with 144Hz refresh rate.",
            "price": 500,
            "unprice": 600,
            "img": "/product/14.jpg",
            "link": "/product/4",
            "category": "Monitors",
            "featured": "New Arrival",
            "rating": 4.9
          },
          {
            "id": 15,
            "title": "Gaming Laptop",
            "description": "High-performance laptop with dedicated GPU and 16GB RAM.",
            "price": 1500,
            "unprice": 1800,
            "img": "/product/15.jpg",
            "link": "/product/5",
            "category": "Laptops",
            "rating": 4.7
          },
          {
            "id": 16,
            "title": "4K Game Capture Card",
            "description": "Record and stream in 4K quality.",
            "price": 200,
            "unprice": 250,
            "img": "/product/16.jpg",
            "link": "/product/6",
            "category": "Accessories",
            "rating": 4.4
          },
          {
            "id": 17,
            "title": "Gaming Chair",
            "description": "Ergonomic chair with lumbar support for long gaming sessions.",
            "price": 180,
            "unprice": 220,
            "img": "/product/17.jpg",
            "link": "/product/7",
            "category": "Furniture",
            "rating": 4.6
          },
          {
            "id": 1,
            "title": "Wireless Gaming Headset",
            "description": "High-quality surround sound with noise cancellation.",
            "price": 120,
            "unprice": 150,
            "img": "/product/1.jpg",
            "link": "/product/1",
            "category": "Accessories",
            "featured": "Best Seller",
            "rating": 4.8
          },
          {
            "id": 2,
            "title": "Mechanical Gaming Keyboard",
            "description": "RGB backlighting with programmable keys.",
            "price": 90,
            "unprice": 120,
            "img": "/product/2.jpg",
            "link": "/product/2",
            "category": "Accessories",
            "featured": "Top Pick",
            "rating": 4.5
          },
          {
            "id": 3,
            "title": "Gaming Mouse",
            "description": "Ergonomic design with adjustable DPI settings.",
            "price": 45,
            "unprice": 60,
            "img": "/product/3.jpg",
            "link": "/product/3",
            "category": "Accessories",
            "rating": 4.3
          },
          {
            "id": 4,
            "title": "Ultra-Wide Gaming Monitor",
            "description": "34-inch curved screen with 144Hz refresh rate.",
            "price": 500,
            "unprice": 600,
            "img": "/product/4.jpg",
            "link": "/product/4",
            "category": "Monitors",
            "featured": "New Arrival",
            "rating": 4.9
          },
          {
            "id": 5,
            "title": "Gaming Laptop",
            "description": "High-performance laptop with dedicated GPU and 16GB RAM.",
            "price": 1500,
            "unprice": 1800,
            "img": "/product/5.jpg",
            "link": "/product/5",
            "category": "Laptops",
            "rating": 4.7
          },
          {
            "id": 6,
            "title": "4K Game Capture Card",
            "description": "Record and stream in 4K quality.",
            "price": 200,
            "unprice": 250,
            "img": "/product/6.jpg",
            "link": "/product/6",
            "category": "Accessories",
            "rating": 4.4
          },
          {
            "id": 7,
            "title": "Gaming Chair",
            "description": "Ergonomic chair with lumbar support for long gaming sessions.",
            "price": 180,
            "unprice": 220,
            "img": "/product/7.jpg",
            "link": "/product/7",
            "category": "Furniture",
            "rating": 4.6
          },
          {
            "id": 18,
            "title": "VR Headset",
            "description": "Experience immersive VR gaming with a high-resolution display.",
            "price": 300,
            "unprice": 350,
            "img": "/product/18.jpg",
            "link": "/product/8",
            "category": "Accessories",
            "featured": "Popular",
            "rating": 4.7
          },
          {
            "id": 19,
            "title": "External SSD for Gaming",
            "description": "High-speed external SSD with 1TB storage for fast game loading.",
            "price": 100,
            "unprice": 130,
            "img": "/product/19.jpg",
            "link": "/product/9",
            "category": "Storage",
            "rating": 4.6
          },
          {
            "id": 20,
            "title": "Gaming Console",
            "description": "Next-gen console with stunning graphics and fast performance.",
            "price": 500,
            "unprice": 550,
            "img": "/product/20.jpg",
            "link": "/product/10",
            "category": "Consoles",
            "featured": "Limited Edition",
            "rating": 4.8
          }
        ]}
      />

      <Link
        href="/"
        className="relative flex-none w-full"
      >
        <Image
          src="/22.jpg"
          width={1920}
          height={226}
          alt="ads"
          className="h-full w-full hover:opacity-90"
        />
      </Link>
    </>
  );
};

export default IndexPage;