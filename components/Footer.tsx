import Image from "next/image";
import Link from "next/link";
import FooterMenu from "./FooterMenu";
interface FooterProps {
  menu: number;
}

const Footer: React.FC<FooterProps> = ({ menu }) => {
  
    return (
      <>
        <FooterMenu
          items={
          [
            {
              icon: <svg fill="none" stroke="currentColor" width="30" height="30" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" stroke-linecap="round" stroke-linejoin="round"></path></svg>,
              title: "Home",
              link: "/"
            },
            {
              icon: <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M21 19v1H3v-1l2-2v-6c0-3.1 2.03-5.83 5-6.71V4a2 2 0 0 1 2-2a2 2 0 0 1 2 2v.29c2.97.88 5 3.61 5 6.71v6zm-7 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2" />
                    </svg>,
              title: "Coupons",
              link: "/coupons"
            },
            {
              icon: <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 32 32">
                      <path fill="currentColor" d="M19.05 5.06c0-1.68-1.37-3.06-3.06-3.06s-3.07 1.38-3.06 3.06v7.87H5.06C3.38 12.93 2 14.3 2 15.99c0 1.68 1.38 3.06 3.06 3.06h7.87v7.86c0 1.68 1.37 3.06 3.06 3.06c1.68 0 3.06-1.37 3.06-3.06v-7.86h7.86c1.68 0 3.06-1.37 3.06-3.06c0-1.68-1.37-3.06-3.06-3.06h-7.86z" />
                    </svg>,
              title: "Post a Deal",
              link: "/post-a-deal"
            },
            {
              icon: <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 36 36">
                      <path fill="currentColor" d="M25 4H11a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m-6 26h-2v-2h2Zm-8-4V6h14v20Z" />
                      <path fill="none" d="M0 0h36v36H0z" />
                    </svg>,
              title: "Go Mobile",
              link: "/mobile"
            },
            {
              icon: <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" width="30" height="30" xmlns="http://www.w3.org/2000/svg"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>,
              title: "Account",
              link: "/account"
            }
          ]}
        />
        {menu === 1 && (
          <div className="bg-white py-4">
            <div className="container">
              <div className="text-gray-500 grid grid-cols-2 md:grid-cols-8 gap-2 px-2 py-6">
                <div className="flex flex-col space-y-1 text-sm font-normal">
                  <h1 className="text-xl">
                  Follow Us
                  </h1>
                  <Link
                    href="/"
                  >
                    Twitter
                  </Link>
                  <Link
                    href="/"
                  >
                    Facebook
                  </Link>
                  <Link
                    href="/"
                  >
                    Instagram
                  </Link>
                  <Link
                    href="/"
                  >
                    YouTube
                  </Link>
                </div>
                <div className="flex flex-col space-y-1 text-sm font-normal">
                  <h1 className="text-xl">
                  About
                  </h1>
                  <Link
                    href="/"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/"
                  >
                    Help Center
                  </Link>
                  <Link
                    href="/"
                  >
                    Advertising Opportunities
                  </Link>
                  <Link
                    href="/"
                  >
                    Careers
                  </Link>
                  <Link
                    href="/"
                  >
                    Contact Us
                  </Link>
                </div>
                <div className="flex flex-col space-y-1 text-sm font-normal">
                  <h1 className="text-xl">
                  Follow Us
                  </h1>
                  <Link
                    href="/"
                  >
                    Twitter
                  </Link>
                  <Link
                    href="/"
                  >
                    Facebook
                  </Link>
                  <Link
                    href="/"
                  >
                    Instagram
                  </Link>
                  <Link
                    href="/"
                  >
                    YouTube
                  </Link>
                </div>
                <div className="flex flex-col space-y-1 text-sm font-normal">
                  <h1 className="text-xl">
                  More
                  </h1>
                  <Link
                    href="/"
                  >
                    Deal Alerts
                  </Link>
                  <Link
                    href="/"
                  >
                    JQDeals Live
                  </Link>
                  <Link
                    href="/"
                  >
                    Black Friday Deals 2024
                  </Link>
                  <Link
                    href="/"
                  >
                    JQDeals Cashback Rewards
                  </Link>
                </div>
                <div className="flex flex-col space-y-1 text-sm font-normal">
                  <h1 className="text-xl">
                  Follow Us
                  </h1>
                  <Link
                    href="/"
                  >
                    Twitter
                  </Link>
                  <Link
                    href="/"
                  >
                    Facebook
                  </Link>
                  <Link
                    href="/"
                  >
                    Instagram
                  </Link>
                  <Link
                    href="/"
                  >
                    YouTube
                  </Link>
                </div>
                <div className="flex flex-col space-y-1 text-sm font-normal">
                  <h1 className="text-xl">
                  Legal
                  </h1>
                  <Link
                    href="/"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    href="/"
                  >
                    Other Terms and Policies
                  </Link>
                  <Link
                    href="/"
                  >
                    Interest-Based Ads
                  </Link>
                  <Link
                    href="/"
                  >
                    Do Not Sell or Share My Personal Information
                  </Link>
                  <Link
                    href="/"
                  >
                    Website Accessibility
                  </Link>
                </div>
                <div className="flex flex-col col-span-2 gap-2">
                  <h1 className="font-bold">
                    Install the G2A app
                  </h1>
                  <p className="text-xs">
                  Get great deals on games wherever you go!
                  </p>
                  <div className="flex items-center space-x-1 py-2 border-y">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512"><path fill="#ffb636" d="m252.5 381l-128 49c-5.9 2.2-12.1-2.3-11.8-8.6l7-136.9c.1-2.1-.6-4.2-1.9-5.9L31.6 172c-4-4.9-1.6-12.2 4.5-13.9l132.4-35.6c2.1-.6 3.9-1.9 5-3.7L248.3 4c3.4-5.3 11.2-5.3 14.6 0l74.8 114.9c1.2 1.8 3 3.1 5 3.7l132.4 35.6c6.1 1.6 8.5 9 4.5 13.9l-86.1 106.6c-1.3 1.7-2 3.8-1.9 5.9l7 136.9c.3 6.3-5.9 10.8-11.8 8.6l-128-49c-2.1-.8-4.3-.8-6.3-.1"/><path fill="#ffd469" d="m456.1 51.7l-41-41c-1.2-1.2-2.8-1.7-4.4-1.5s-3.1 1.2-3.9 2.6l-42.3 83.3c-1.2 2.1-.8 4.6.9 6.3c1 1 2.4 1.5 3.7 1.5c.9 0 1.8-.2 2.6-.7L454.9 60c1.4-.8 2.4-2.2 2.6-3.9c.3-1.6-.3-3.2-1.4-4.4m-307 43.5l-42.3-83.3c-.8-1.4-2.2-2.4-3.9-2.6c-1.6-.2-3.3.3-4.4 1.5l-41 41c-1.2 1.2-1.7 2.8-1.5 4.4s1.2 3.1 2.6 3.9l83.3 42.3c.8.5 1.7.7 2.6.7c1.4 0 2.7-.5 3.7-1.5c1.7-1.8 2-4.4.9-6.4m140.7 410l-29-88.8c-.2-.9-.7-1.7-1.3-2.3c-1-1-2.3-1.5-3.7-1.5c-2.4 0-4.4 1.6-5.1 3.9l-29 88.8c-.4 1.6-.1 3.3.9 4.6s2.5 2.1 4.2 2.1h57.9c1.6 0 3.2-.8 4.2-2.1c1.1-1.4 1.4-3.1.9-4.7"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512"><path fill="#ffb636" d="m252.5 381l-128 49c-5.9 2.2-12.1-2.3-11.8-8.6l7-136.9c.1-2.1-.6-4.2-1.9-5.9L31.6 172c-4-4.9-1.6-12.2 4.5-13.9l132.4-35.6c2.1-.6 3.9-1.9 5-3.7L248.3 4c3.4-5.3 11.2-5.3 14.6 0l74.8 114.9c1.2 1.8 3 3.1 5 3.7l132.4 35.6c6.1 1.6 8.5 9 4.5 13.9l-86.1 106.6c-1.3 1.7-2 3.8-1.9 5.9l7 136.9c.3 6.3-5.9 10.8-11.8 8.6l-128-49c-2.1-.8-4.3-.8-6.3-.1"/><path fill="#ffd469" d="m456.1 51.7l-41-41c-1.2-1.2-2.8-1.7-4.4-1.5s-3.1 1.2-3.9 2.6l-42.3 83.3c-1.2 2.1-.8 4.6.9 6.3c1 1 2.4 1.5 3.7 1.5c.9 0 1.8-.2 2.6-.7L454.9 60c1.4-.8 2.4-2.2 2.6-3.9c.3-1.6-.3-3.2-1.4-4.4m-307 43.5l-42.3-83.3c-.8-1.4-2.2-2.4-3.9-2.6c-1.6-.2-3.3.3-4.4 1.5l-41 41c-1.2 1.2-1.7 2.8-1.5 4.4s1.2 3.1 2.6 3.9l83.3 42.3c.8.5 1.7.7 2.6.7c1.4 0 2.7-.5 3.7-1.5c1.7-1.8 2-4.4.9-6.4m140.7 410l-29-88.8c-.2-.9-.7-1.7-1.3-2.3c-1-1-2.3-1.5-3.7-1.5c-2.4 0-4.4 1.6-5.1 3.9l-29 88.8c-.4 1.6-.1 3.3.9 4.6s2.5 2.1 4.2 2.1h57.9c1.6 0 3.2-.8 4.2-2.1c1.1-1.4 1.4-3.1.9-4.7"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512"><path fill="#ffb636" d="m252.5 381l-128 49c-5.9 2.2-12.1-2.3-11.8-8.6l7-136.9c.1-2.1-.6-4.2-1.9-5.9L31.6 172c-4-4.9-1.6-12.2 4.5-13.9l132.4-35.6c2.1-.6 3.9-1.9 5-3.7L248.3 4c3.4-5.3 11.2-5.3 14.6 0l74.8 114.9c1.2 1.8 3 3.1 5 3.7l132.4 35.6c6.1 1.6 8.5 9 4.5 13.9l-86.1 106.6c-1.3 1.7-2 3.8-1.9 5.9l7 136.9c.3 6.3-5.9 10.8-11.8 8.6l-128-49c-2.1-.8-4.3-.8-6.3-.1"/><path fill="#ffd469" d="m456.1 51.7l-41-41c-1.2-1.2-2.8-1.7-4.4-1.5s-3.1 1.2-3.9 2.6l-42.3 83.3c-1.2 2.1-.8 4.6.9 6.3c1 1 2.4 1.5 3.7 1.5c.9 0 1.8-.2 2.6-.7L454.9 60c1.4-.8 2.4-2.2 2.6-3.9c.3-1.6-.3-3.2-1.4-4.4m-307 43.5l-42.3-83.3c-.8-1.4-2.2-2.4-3.9-2.6c-1.6-.2-3.3.3-4.4 1.5l-41 41c-1.2 1.2-1.7 2.8-1.5 4.4s1.2 3.1 2.6 3.9l83.3 42.3c.8.5 1.7.7 2.6.7c1.4 0 2.7-.5 3.7-1.5c1.7-1.8 2-4.4.9-6.4m140.7 410l-29-88.8c-.2-.9-.7-1.7-1.3-2.3c-1-1-2.3-1.5-3.7-1.5c-2.4 0-4.4 1.6-5.1 3.9l-29 88.8c-.4 1.6-.1 3.3.9 4.6s2.5 2.1 4.2 2.1h57.9c1.6 0 3.2-.8 4.2-2.1c1.1-1.4 1.4-3.1.9-4.7"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512"><path fill="#ffb636" d="m252.5 381l-128 49c-5.9 2.2-12.1-2.3-11.8-8.6l7-136.9c.1-2.1-.6-4.2-1.9-5.9L31.6 172c-4-4.9-1.6-12.2 4.5-13.9l132.4-35.6c2.1-.6 3.9-1.9 5-3.7L248.3 4c3.4-5.3 11.2-5.3 14.6 0l74.8 114.9c1.2 1.8 3 3.1 5 3.7l132.4 35.6c6.1 1.6 8.5 9 4.5 13.9l-86.1 106.6c-1.3 1.7-2 3.8-1.9 5.9l7 136.9c.3 6.3-5.9 10.8-11.8 8.6l-128-49c-2.1-.8-4.3-.8-6.3-.1"/><path fill="#ffd469" d="m456.1 51.7l-41-41c-1.2-1.2-2.8-1.7-4.4-1.5s-3.1 1.2-3.9 2.6l-42.3 83.3c-1.2 2.1-.8 4.6.9 6.3c1 1 2.4 1.5 3.7 1.5c.9 0 1.8-.2 2.6-.7L454.9 60c1.4-.8 2.4-2.2 2.6-3.9c.3-1.6-.3-3.2-1.4-4.4m-307 43.5l-42.3-83.3c-.8-1.4-2.2-2.4-3.9-2.6c-1.6-.2-3.3.3-4.4 1.5l-41 41c-1.2 1.2-1.7 2.8-1.5 4.4s1.2 3.1 2.6 3.9l83.3 42.3c.8.5 1.7.7 2.6.7c1.4 0 2.7-.5 3.7-1.5c1.7-1.8 2-4.4.9-6.4m140.7 410l-29-88.8c-.2-.9-.7-1.7-1.3-2.3c-1-1-2.3-1.5-3.7-1.5c-2.4 0-4.4 1.6-5.1 3.9l-29 88.8c-.4 1.6-.1 3.3.9 4.6s2.5 2.1 4.2 2.1h57.9c1.6 0 3.2-.8 4.2-2.1c1.1-1.4 1.4-3.1.9-4.7"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512"><path fill="#ffb636" d="m252.5 381l-128 49c-5.9 2.2-12.1-2.3-11.8-8.6l7-136.9c.1-2.1-.6-4.2-1.9-5.9L31.6 172c-4-4.9-1.6-12.2 4.5-13.9l132.4-35.6c2.1-.6 3.9-1.9 5-3.7L248.3 4c3.4-5.3 11.2-5.3 14.6 0l74.8 114.9c1.2 1.8 3 3.1 5 3.7l132.4 35.6c6.1 1.6 8.5 9 4.5 13.9l-86.1 106.6c-1.3 1.7-2 3.8-1.9 5.9l7 136.9c.3 6.3-5.9 10.8-11.8 8.6l-128-49c-2.1-.8-4.3-.8-6.3-.1"/><path fill="#ffd469" d="m456.1 51.7l-41-41c-1.2-1.2-2.8-1.7-4.4-1.5s-3.1 1.2-3.9 2.6l-42.3 83.3c-1.2 2.1-.8 4.6.9 6.3c1 1 2.4 1.5 3.7 1.5c.9 0 1.8-.2 2.6-.7L454.9 60c1.4-.8 2.4-2.2 2.6-3.9c.3-1.6-.3-3.2-1.4-4.4m-307 43.5l-42.3-83.3c-.8-1.4-2.2-2.4-3.9-2.6c-1.6-.2-3.3.3-4.4 1.5l-41 41c-1.2 1.2-1.7 2.8-1.5 4.4s1.2 3.1 2.6 3.9l83.3 42.3c.8.5 1.7.7 2.6.7c1.4 0 2.7-.5 3.7-1.5c1.7-1.8 2-4.4.9-6.4m140.7 410l-29-88.8c-.2-.9-.7-1.7-1.3-2.3c-1-1-2.3-1.5-3.7-1.5c-2.4 0-4.4 1.6-5.1 3.9l-29 88.8c-.4 1.6-.1 3.3.9 4.6s2.5 2.1 4.2 2.1h57.9c1.6 0 3.2-.8 4.2-2.1c1.1-1.4 1.4-3.1.9-4.7"/></svg>
                    <span className=" text-nowrap"> 4.4 - 55,900</span>
                    <span> votes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Link
                      href="/"
                    >
                      <Image
                        src="/google_play.svg"
                        width={120}
                        height={35}
                        alt='logo'
                      />
                    </Link>
                    <Link
                      href="/"
                    >
                      <Image
                        src="/app_store.svg"
                        width={120}
                        height={35}
                        alt='logo'
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div className="bg-main text-white py-4">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
              <Link
                href="/"
                className='flex items-center mb-2 md:mb-0'
              >
                <Image
                  src="/logo.svg"
                  width={105}
                  height={30}
                  alt='logo'
                  className=''
                />
              </Link>
              <div>
              Copyright © 2024 G2A. All rights reserved.
              </div>              
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Footer;