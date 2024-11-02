import Blog from "@/components/Blog";
import Buy from "@/components/Buy";
import ImgView from "@/components/ImgView";
import Product from "@/components/Product";
import Sliders from "@/components/Sliders";
import Image from "next/image";
import Link from "next/link";

const IndexPage: React.FC = () => {
    return (
        <>
            <div className="container my-4">
                <Link
                    href="/"
                >
                    <Image
                    src="/222.jpg"
                    width={1170}
                    height={90}
                    alt="ads"
                    className="h-full w-full hover:opacity-90"
                    />
                </Link>
            </div>
            <div className="container my-4">
                <div className="flex items-center justify-between mb-2">
                    <h1 className="font-bold text-xl md:text-3xl">
                        Spintires: MudRunner (PC) - Steam Key - GLOBAL
                    </h1>
                    <Link
                        href="/"
                        className="bg-gray-200 p-3 rounded-full"
                    >
                        <svg className="text-gray-500 hover:text-gray-700" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 32 32"><path fill="currentColor" d="M3.384 7.13c2.972-4.17 9.167-4.174 12.146-.008l.465.65l.417-.593c2.955-4.195 9.16-4.236 12.17-.081A7.48 7.48 0 0 1 28 16.583L16.732 28.681a1 1 0 0 1-1.464 0L3.992 16.54a7.46 7.46 0 0 1-.608-9.41m10.52 1.155c-2.181-3.05-6.716-3.046-8.892.007a5.46 5.46 0 0 0 .446 6.887L16.002 26.53l10.534-11.31a5.48 5.48 0 0 0 .427-6.95c-2.205-3.044-6.751-3.013-8.916.06l-1.229 1.744a1 1 0 0 1-1.63.006z"/></svg>
                    </Link>
                </div>
                <div className="flex flex-col md:flex-row gap-2 md:gap-8">
                    <div className="w-full md:w-1/3">
                        <div className="relative">
                            <Sliders
                                slides={[
                                    {
                                    id: 1,
                                    image: '/product/1.jpg',
                                    link: '/',
                                    },
                                    {
                                    id: 2,
                                    image: '/product/2.jpg',
                                    link: '/',
                                    },
                                    {
                                    id: 3,
                                    image: '/product/3.jpg',
                                    link: '/',
                                    },
                                    {
                                    id: 4,
                                    image: '/product/4.jpg',
                                    link: '/',
                                    },
                                    {
                                    id: 5,
                                    image: '/product/5.jpg',
                                    link: '/',
                                    },
                                ]}
                            />
                            <ImgView
                                slides={[
                                    {
                                    id: 1,
                                    image: '/product/1.jpg',
                                    link: '/',
                                    },
                                    {
                                    id: 2,
                                    image: '/product/2.jpg',
                                    link: '/',
                                    },
                                    {
                                    id: 3,
                                    image: '/product/3.jpg',
                                    link: '/',
                                    },
                                    {
                                    id: 4,
                                    image: '/product/4.jpg',
                                    link: '/',
                                    },
                                    {
                                    id: 5,
                                    image: '/product/5.jpg',
                                    link: '/',
                                    },
                                ]}
                            />
                        </div>
                    </div>
                    <div className="w-full md:w-2/3">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="bg-black p-2">
                                <svg className="text-white" width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M23.668 7.158a4.395 4.395 0 00-.906-1.38 4.214 4.214 0 00-1.327-.935 3.936 3.936 0 00-1.632-.343 3.9 3.9 0 00-1.606.335 4.053 4.053 0 00-1.309.908A4.454 4.454 0 0016 7.104a4.76 4.76 0 00-.368 1.671l-2.71 3.969h-.028a3.135 3.135 0 00-1.658.481l-4.925-3.059a3.264 3.264 0 00-.799-1.926c-.474-.554-1.085-.898-1.821-1.044a3.381 3.381 0 00-1.282.064c-.404.1-.78.281-1.102.527a3.4 3.4 0 00-.836.927c-.226.366-.37.778-.42 1.207-.081.445-.064.882.043 1.299.11.426.28.808.513 1.153a3.16 3.16 0 002.038 1.336c.313.063.608.063.905.017.286-.056.573-.127.842-.228l5.302 3.088a3.296 3.296 0 001.047 2.08c.602.553 1.32.834 2.153.834.448 0 .862-.09 1.255-.273a3.52 3.52 0 001.023-.726c.287-.299.52-.654.698-1.063.171-.4.262-.835.262-1.298l3.64-2.943h.028c.582 0 1.13-.11 1.631-.336a3.972 3.972 0 001.328-.926c.377-.39.682-.853.905-1.38A4.224 4.224 0 0024 8.858a4.14 4.14 0 00-.332-1.698v-.002zm-3.856-.245c-.502 0-.933.191-1.292.572-.36.381-.538.835-.538 1.362 0 .526.18.972.538 1.344.359.372.79.563 1.292.563.501 0 .941-.191 1.309-.563.367-.372.556-.826.556-1.344 0-.527-.189-.98-.556-1.362a1.76 1.76 0 00-1.31-.572zM2.034 9.308c.53-.525 1.351-.6 1.965-.18h-.003l1.462.843a2.462 2.462 0 00-.834-1.443 2.232 2.232 0 00-1.497-.564c-.655 0-1.22.236-1.687.707a2.406 2.406 0 00-.698 1.745c0 .69.231 1.279.698 1.761.467.483 1.023.726 1.687.726.288 0 .573-.063.844-.181l-1.453-.817a1.481 1.481 0 01-.673-.571 1.621 1.621 0 01-.259-.908c0-.444.143-.82.448-1.118zm12.547 8.528a2.234 2.234 0 01-1.677.707 2.264 2.264 0 01-1.525-.564c-.44-.37-.698-.852-.798-1.442l1.453.846c.233.181.52.273.87.273.431 0 .79-.155 1.077-.453.287-.299.446-.7.44-1.117 0-.343-.09-.644-.26-.906a1.475 1.475 0 00-.673-.574l-1.426-.817c.25-.117.538-.18.843-.18.662 0 1.219.245 1.677.726.458.482.682 1.071.682 1.761 0 .689-.226 1.27-.683 1.742v-.002zm5.23-6.047c.8 0 1.471-.28 2.027-.844.547-.563.824-1.262.833-2.087 0-.828-.278-1.535-.835-2.11-.556-.57-1.23-.86-2.025-.86a2.591 2.591 0 00-1.094.227 2.888 2.888 0 00-1.516 1.588 3.109 3.109 0 00-.215 1.153c-.002.395.07.787.215 1.154.138.35.346.668.611.934.268.265.564.464.905.618.342.155.708.227 1.095.227z" fill="currentColor"></path></svg>
                            </div>
                            <div>
                                <p>
                                    Platform: <strong>Steam</strong>
                                </p>
                                <Link
                                    href="/"
                                    className="text-blue-500 text-sm font-bold"
                                >
                                    Check activation guide
                                </Link>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 mb-6">
                            <div className="bg-white border p-2">
                                <svg className="text-black/50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" fill="currentColor"><g stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" fill="none" stroke-miterlimit="10"><path d="M6 12l4 4 8-8"></path><circle cx="12" cy="12" r="11"></circle></g></svg>
                            </div>
                            <div>
                                <p>
                                    Platform: <strong>Bangladesh</strong>
                                </p>
                                <Link
                                    href="/"
                                    className="text-blue-500 text-sm font-bold"
                                >
                                    Check activation guide
                                </Link>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 mb-6">
                            <div className="bg-white border p-2">
                            <svg className="text-black/50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" fill="currentColor"><g stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" fill="none" stroke-miterlimit="10"><path d="M18 1L9.766 9.234A6.953 6.953 0 008 9a7 7 0 107 7c0-.891-.173-1.74-.476-2.524L17 11V8h3l3-3V1h-5z"></path><circle cx="8" cy="16" r="2"></circle></g></svg>
                            </div>
                            <div>
                                <p>
                                Type: <strong>Key</strong>
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 mb-6">
                            <div className="bg-white border p-2">
                                <svg className="text-black/50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" fill="currentColor"><g stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" fill="none" stroke-miterlimit="10"><path d="M5.11 3.425L6.722 4.75l1.645 1.756-.404 2.74-2.594 1.312L4 11.726l.667 1.138 1.307 1.4.706 2.473-1.963 1.647-.359 1.528M20.32 4.805l-1.477.838-3 .357-2.284-1.838-.62-1.813L12.127 1M19.007 12.903l-.928 2.098-.954 2.151-1.763 1.641-2.339.15-1.394-1.69.468-2.17-.403-2.143 1.593-1.997 2.227-.782 2.358.564 1.135 2.178z"></path><circle cx="12" cy="12" r="11"></circle></g></svg>
                            </div>
                            <div>
                                <p>
                                Versions: <strong>GLOBAL</strong>
                                </p>
                            </div>
                        </div>

                        <p className="text-sm text-gray-500 border-t py-2 my-4">
                            Sit behind the wheel of one of the powerful all-terrain trucks and complete map objectives alone or together with other players. Enjoy advanced driving and terrain physics and have a blast in this ultimate off-road exper ...
                        </p>
                    </div>
                    <div className="w-full md:w-1/3"></div>
                </div>
            </div>

            <Buy
                title="Offers from 28 business sellers"
                sub="Instant delivery offers"
                link=""
                items={[
                {
                    "id": 1,
                    "title": "VR Headset",
                    "description": "Experience immersive VR gaming with a high-resolution display.",
                    "price": 300,
                    "unprice": 350,
                    "img": "/buy/1.jpg",
                    "link": "/product/8",
                    "category": "Accessories",
                    "featured": "Popular",
                    "rating": 4.7
                },
                {
                    "id": 2,
                    "title": "External SSD for Gaming",
                    "description": "High-speed external SSD with 1TB storage for fast game loading.",
                    "price": 100,
                    "unprice": 130,
                    "img": "/buy/2.jpg",
                    "link": "/product/9",
                    "category": "Storage",
                    "rating": 4.6
                },
                {
                    "id": 3,
                    "title": "Gaming Console",
                    "description": "Next-gen console with stunning graphics and fast performance.",
                    "price": 500,
                    "unprice": 550,
                    "img": "/buy/3.jpg",
                    "link": "/product/10",
                    "category": "Consoles",
                    "featured": "Limited Edition",
                    "rating": 4.8
                },
                {
                    "id": 4,
                    "title": "Wireless Gaming Headset",
                    "description": "High-quality surround sound with noise cancellation.",
                    "price": 120,
                    "unprice": 150,
                    "img": "/buy/4.jpg",
                    "link": "/product/1",
                    "category": "Accessories",
                    "featured": "Best Seller",
                    "rating": 4.8
                },
                {
                    "id": 5,
                    "title": "Mechanical Gaming Keyboard",
                    "description": "RGB backlighting with programmable keys.",
                    "price": 90,
                    "unprice": 120,
                    "img": "/buy/5.jpg",
                    "link": "/product/2",
                    "category": "Accessories",
                    "featured": "Top Pick",
                    "rating": 4.5
                },
                {
                    "id": 6,
                    "title": "Gaming Mouse",
                    "description": "Ergonomic design with adjustable DPI settings.",
                    "price": 45,
                    "unprice": 60,
                    "img": "/buy/6.jpg",
                    "link": "/product/3",
                    "category": "Accessories",
                    "rating": 4.3
                },
                {
                    "id": 1,
                    "title": "VR Headset",
                    "description": "Experience immersive VR gaming with a high-resolution display.",
                    "price": 300,
                    "unprice": 350,
                    "img": "/buy/1.jpg",
                    "link": "/product/8",
                    "category": "Accessories",
                    "featured": "Popular",
                    "rating": 4.7
                },
                {
                    "id": 2,
                    "title": "External SSD for Gaming",
                    "description": "High-speed external SSD with 1TB storage for fast game loading.",
                    "price": 100,
                    "unprice": 130,
                    "img": "/buy/2.jpg",
                    "link": "/product/9",
                    "category": "Storage",
                    "rating": 4.6
                },
                {
                    "id": 3,
                    "title": "Gaming Console",
                    "description": "Next-gen console with stunning graphics and fast performance.",
                    "price": 500,
                    "unprice": 550,
                    "img": "/buy/3.jpg",
                    "link": "/product/10",
                    "category": "Consoles",
                    "featured": "Limited Edition",
                    "rating": 4.8
                },
                {
                    "id": 4,
                    "title": "Wireless Gaming Headset",
                    "description": "High-quality surround sound with noise cancellation.",
                    "price": 120,
                    "unprice": 150,
                    "img": "/buy/4.jpg",
                    "link": "/product/1",
                    "category": "Accessories",
                    "featured": "Best Seller",
                    "rating": 4.8
                },
                {
                    "id": 5,
                    "title": "Mechanical Gaming Keyboard",
                    "description": "RGB backlighting with programmable keys.",
                    "price": 90,
                    "unprice": 120,
                    "img": "/buy/5.jpg",
                    "link": "/product/2",
                    "category": "Accessories",
                    "featured": "Top Pick",
                    "rating": 4.5
                },
                {
                    "id": 6,
                    "title": "Gaming Mouse",
                    "description": "Ergonomic design with adjustable DPI settings.",
                    "price": 45,
                    "unprice": 60,
                    "img": "/buy/6.jpg",
                    "link": "/product/3",
                    "category": "Accessories",
                    "rating": 4.3
                },
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
            <div className="container my-4">
                <Link
                    href="/"
                >
                    <Image
                    src="/2222.jpg"
                    width={1170}
                    height={90}
                    alt="ads"
                    className="h-full w-full hover:opacity-90"
                    />
                </Link>
            </div>
            <Blog
                title="Get inspired by our articles!"
                sub=""
                link=""
                items={[
                {
                    "id": 2,
                    "title": "Mechanical Gaming Keyboard",
                    "description": "RGB backlighting with programmable keys.",
                    "img": "/blog/2.jpg",
                    "link": "/blog/2",
                    "category": "Accessories",
                },
                {
                    "id": 3,
                    "title": "Gaming Mouse",
                    "description": "Ergonomic design with adjustable DPI settings.",
                    "img": "/blog/1.jpg",
                    "link": "/blog/3",
                    "category": "Accessories",
                },
                {
                    "id": 4,
                    "title": "Ultra-Wide Gaming Monitor",
                    "description": "34-inch curved screen with 144Hz refresh rate.",
                    "img": "/blog/4.jpg",
                    "link": "/blog/4",
                    "category": "Monitors",
                },
                {
                    "id": 6,
                    "title": "4K Game Capture Card",
                    "description": "Record and stream in 4K quality.",
                    "img": "/blog/2.jpg",
                    "link": "/blog/6",
                    "category": "Accessories",
                },
                {
                    "id": 7,
                    "title": "Gaming Chair",
                    "description": "Ergonomic chair with lumbar support for long gaming sessions.",
                    "img": "/blog/2.jpg",
                    "link": "/blog/7",
                    "category": "Furniture",
                },
                {
                    "id": 18,
                    "title": "VR Headset",
                    "description": "Experience immersive VR gaming with a high-resolution display.",
                    "img": "/blog/1.jpg",
                    "link": "/blog/8",
                    "category": "Accessories",
                },
                {
                    "id": 19,
                    "title": "External SSD for Gaming",
                    "description": "High-speed external SSD with 1TB storage for fast game loading.",
                    "img": "/blog/3.jpg",
                    "link": "/blog/9",
                    "category": "Storage",
                },
                {
                    "id": 20,
                    "title": "Gaming Console",
                    "description": "Next-gen console with stunning graphics and fast performance.",
                    "img": "/blog/4.jpg",
                    "link": "/blog/10",
                    "category": "Consoles",
                }
                ]}
            />
        </>
    );
};
  
export default IndexPage;