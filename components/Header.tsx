import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Account from './Account';

interface HeaderProps {
  menu: number;
}

const Header: React.FC<HeaderProps> = ({ menu }) => {

  return (
    <>
      <div>
        <div className='bg-[#f25600] text-center text-white text-sm hidden md:block py-2'>
          <h2 className='font-bold'>
            EPIC WEEKLY SALE is now live!
          </h2>
          <h3>
            Save 12% with the code <strong>WEEKLYSALE</strong>
          </h3>
        </div>
        <div className="bg-black bg-bg bg-cover bg-repeat sticky z-50 top-0">
          <div className="container">
            <div className="flex md:items-center flex-row w-full py-2">
              <Link
                href="/"
                className='w-2/12 flex items-center'
              >
                <Image
                  src="/logo.svg"
                  width={105}
                  height={30}
                  alt='logo'
                  className='hidden md:block'
                />
              </Link>
              <div className='flex md:h-12 h-10 max-w-2xl rounded-md overflow-hidden items-center bg-white w-full'>
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  className="px-4 h-7 w-full outline-none bg-white text-gray-200"
                />
                <button className='bg-blue-500 p-2.5'>
                <svg className='fill-white' stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" id="search" x="0px" y="0px" viewBox="0 0 24 24" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><g><path d="M20.031,20.79c0.46,0.46,1.17-0.25,0.71-0.7l-3.75-3.76c1.27-1.41,2.04-3.27,2.04-5.31
                  c0-4.39-3.57-7.96-7.96-7.96s-7.96,3.57-7.96,7.96c0,4.39,3.57,7.96,7.96,7.96c1.98,0,3.81-0.73,5.21-1.94L20.031,20.79z
                  M4.11,11.02c0-3.84,3.13-6.96,6.96-6.96c3.84,0,6.96,3.12,6.96,6.96c0,3.84-3.12,6.96-6.96,6.96C7.24,17.98,4.11,14.86,4.11,11.02
                  z"></path></g>
                </svg>
                </button>
              </div>
              <div className='flex items-center justify-end gap-2 md:w-1/3'>                
                <Link
                  href="/"
                  className='hidden md:flex'
                >
                  <span className='bg-gray-700 rounded-full p-2.5'>
                    <svg className='text-white' width="22" height="22" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.0521 3.05014C4.78562 0.316619 9.21779 0.316619 11.9513 3.05014C11.968 3.06688 11.9847 3.08369 12.0012 3.10055C12.0177 3.08369 12.0344 3.06689 12.0511 3.05014C14.7846 0.316619 19.2168 0.316619 21.9503 3.05014C24.6838 5.78367 24.6838 10.2158 21.9503 12.9494L12.7073 22.1924C12.5198 22.3799 12.2654 22.4853 12.0001 22.4853C11.7349 22.4852 11.4805 22.3799 11.293 22.1923L2.0521 12.9494C2.05207 12.9493 2.05205 12.9493 2.05202 12.9493C-0.681428 10.2158 -0.681402 5.78364 2.0521 3.05014ZM10.5371 4.46436C8.58462 2.51188 5.41879 2.51188 3.46631 4.46436C1.51383 6.41683 1.51383 9.58267 3.46631 11.5351L3.46639 11.5352L12.0003 20.071L20.5361 11.5351C22.4886 9.58267 22.4886 6.41683 20.5361 4.46436C18.5836 2.51188 15.4178 2.51188 13.4653 4.46436C13.2255 4.70415 13.0163 4.96306 12.8344 5.23719C12.6491 5.5164 12.3363 5.68425 12.0012 5.68425C11.6661 5.68425 11.3533 5.5164 11.168 5.23719C10.9861 4.96316 10.776 4.70323 10.5371 4.46436Z" fill="currentColor"></path></svg>
                  </span>
                </Link>
                <Link
                  href="/"
                  className='hidden md:flex'
                >
                  <span className='bg-gray-700 rounded-full p-2.5'>
                    <svg className='text-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22"><g stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor"><circle cx="6" cy="22" r="1" stroke="none"></circle><circle cx="20" cy="22" r="1" stroke="none"></circle><circle cx="6" cy="22" r="1" fill="none" stroke-miterlimit="10"></circle><circle cx="20" cy="22" r="1" fill="none" stroke-miterlimit="10"></circle><path fill="none" stroke-miterlimit="10" d="M4.8 7H22l-2 10H6L4 2H1"></path></g></svg>
                  </span>
                </Link>
                <Account
                  title={
                    <div className="flex items-center text-white">
                      <span className='bg-gray-700 rounded-full p-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 256 256">
                          <path fill="currentColor" d="M229.19 213c-15.81-27.32-40.63-46.49-69.47-54.62a70 70 0 1 0-63.44 0C67.44 166.5 42.62 185.67 26.81 213a6 6 0 1 0 10.38 6c19.21-33.19 53.15-53 90.81-53s71.6 19.81 90.81 53a6 6 0 1 0 10.38-6M70 96a58 58 0 1 1 58 58a58.07 58.07 0 0 1-58-58" />
                        </svg>
                      </span>
                      <div className='pl-2'>
                        <p className='text-xs'>Sign in</p>
                        <p className='text-xs font-bold'>Register</p>
                      </div>
                    </div>
                  }
                  sub={
                    <div>
                      <div className='p-3 border-b'>
                        <Link
                          href="/auth"
                          className='bg-main font-bold uppercase shadow-[0_4px_8px_0_rgba(0,0,0,.2)] text-white block text-center w-full py-2 rounded-md'
                        >
                          Sign In
                        </Link>
                      </div>
                      <Link href="/account" className="flex items-center p-2 hover:bg-gray-200">
                        <svg stroke="currentColor" className='mr-2' fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                        My Account
                      </Link>
                      <div className='p-3 border-t'>
                        <Link
                          href="/auth"
                          className='bg-main font-bold uppercase shadow-[0_4px_8px_0_rgba(0,0,0,.2)] text-white block text-center w-full py-2 rounded-md'
                        >
                          Logout
                        </Link>
                      </div>
                    </div>
                  }
                />
              </div>
            </div>
          </div>
        </div>
        {menu === 1 && (
        <></>
        )}
      </div>
    </>
  );
};

export default Header;

