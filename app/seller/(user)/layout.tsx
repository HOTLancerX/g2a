import Image from "next/image";
import MenusUsers from "./MenusUser";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {  
  return (
    <div>
      <div className="relative my-4">
        <div className="container">
          <div className="bg-main md:rounded-xl rounded overflow-hidden h-40">
            <Image
                src="/user/cover.png"
                width={1024}
                height={300}
                alt=""
                className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="container mb-4">
          <>
            <div className="flex md:ml-4 md:-mt-16 mb-4 bg-white flex-col md:flex-row md:items-end items-center">
              <div className="border md:border-2 border-white md:rounded-md rounded overflow-hidden">
                <Image
                  src="/user/1.jpg"
                  width={100}
                  height={100}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:mb-0 md:ml-2 flex flex-col md:flex-row items-center md:justify-between w-full">
                  <div className="my-4 md:my-0 flex flex-col items-center md:items-start">
                      <h1 className="line-clamp-1 leading-none md:leading-6 text-xs md:text-xl font-bold flex items-center">
                          HeRa Khan
                      </h1>
                      <p className="text-[10px] md:text-xs leading-none">
                          Member since September 2019
                      </p>
                  </div>
                  <div className="flex items-center space-x-2">
                      <button className="border-2 border-secondary px-3 py-1 flex items-center bg-main rounded-full">
                          <svg
                              width={15}
                              height={15}
                              viewBox="0 0 24 24"
                          >
                              <g fill="none" fillRule="evenodd">
                              <path
                                  d="M0 12c0 6.633 5.367 12 12 12V0C5.367 0 0 5.367 0 12zM24 12c0-6.633-5.367-12-12-12v24c6.633 0 12-5.367 12-12z"
                                  fill="#009877"
                              />
                              <path d="M0 12c0 6.633 5.367 12 12 12V0C5.367 0 0 5.367 0 12z" />
                              <path
                                  d="M0 12c0 6.633 5.367 12 12 12V0C5.367 0 0 5.367 0 12z"
                                  fill="#FFF"
                                  opacity="0.04"
                              />
                              <g>
                                  <path
                                  d="M15.233 14.733s-1.8 3.067.367 4.734c0 0-2.833-1.367-1.867-3.267-.033.033-.066.033-.1.067-.833.466-5.833-4.034-5.833-5.2v-.2c.033-.034.067-.034.1-.067-1.767.933-3.467-1.867-3.467-1.867 2.5 1.734 4.834.267 4.834.267C8.833 5.6 7 4.233 7 4.233c-.033 0-.1.034-.133.034-.967.533-2.934 1.466-2.934 4.3 0 0 .4 5 4.234 7.866 3.833 2.867 5.466 3 5.466 3s4.3 2.134 6.2-1.9c.034-.066.034-.133.067-.166.1-1.334-4.667-2.634-4.667-2.634z"
                                  fill="#F6F6F6"
                                  />
                                  <path
                                  d="M9.3 9.167c.1-.067.433-.3.433-.567 0-.233-.366-1.867-.433-2s-.967-2.367-1.467-2.5c-.5-.133-.6 0-.6 0l-.166.1c-.034 0 1.766 1.367 2.233 4.967zM19.467 16.033c-1.034-.9-1.3-.966-1.4-1.033-.134-.067-2-.867-2.4-.667-.167.067-.3.234-.434.4 0 0 4.734 1.334 4.667 2.6.167-.266.233-.7-.433-1.3z"
                                  fill="#CDCDCD"
                                  />
                                  <path
                                  d="M15.233 14.733c-.766.5-1.233 1-1.466 1.467-1 1.9 1.866 3.267 1.866 3.267-2.166-1.7-.4-4.734-.4-4.734zM4.467 8.9s1.733 2.8 3.466 1.867c.467-.234.934-.734 1.367-1.6 0 0-2.333 1.466-4.833-.267z"
                                  fill="#CDCDCD"
                                  />
                              </g>
                              </g>
                          </svg>
                          <p className="text-xs pl-1 text-white">Call</p>
                      </button>
                      <button className="border-2 border-secondary px-3 py-1 flex items-center bg-main rounded-full">
                          <svg
                              width={15}
                              height={15}
                              viewBox="0 0 24 24"
                          >
                          <defs>
                              <path
                              d="M16.944 10.978c-5.534.378-6.876-2.923-6.876-5.623 0-.456.053-.91.158-1.355H6.04C2.903 4.167.355 6.56.034 9.643c-.322 3.082 1.68 5.937 4.717 6.73v2.667a.94.94 0 0 0 .272.673c.177.18.42.284.675.287a.931.931 0 0 0 .617-.238l3.576-3.213h2.19c2.699-.151 5.037-1.896 5.919-4.416l-1.056-1.155z"
                              id="chat-icon_svg__b"
                              />
                              <filter
                              x="-2.8%"
                              y="-3.1%"
                              width="105.6%"
                              height="112.5%"
                              filterUnits="objectBoundingBox"
                              id="chat-icon_svg__a"
                              >
                              <feOffset
                                  dy={1}
                                  in="SourceAlpha"
                                  result="shadowOffsetOuter1"
                              />
                              <feColorMatrix
                                  values="0 0 0 0 0.894117647 0 0 0 0 0.705882353 0 0 0 0 0 0 0 0 1 0"
                                  in="shadowOffsetOuter1"
                              />
                              </filter>
                              <path
                              d="M11.5 4.314C11.472 2.006 13.32.095 15.668.008V0h4.168v.005c2.214.117 3.994 1.834 4.153 4.007.158 2.173-1.353 4.123-3.528 4.549v1.78a.657.657 0 0 1-.651.659.644.644 0 0 1-.426-.163l-.022-.021-.02-.02-2.2-2.17h-1.47v-.005c-2.347-.088-4.196-1.998-4.168-4.307"
                              id="chat-icon_svg__d"
                              />
                              <filter
                              x="-4%"
                              y="-4.5%"
                              width="108%"
                              height="118.2%"
                              filterUnits="objectBoundingBox"
                              id="chat-icon_svg__c"
                              >
                              <feOffset
                                  dy={1}
                                  in="SourceAlpha"
                                  result="shadowOffsetOuter1"
                              />
                              <feColorMatrix
                                  values="0 0 0 0 0 0 0 0 0 0.454901961 0 0 0 0 0.407843137 0 0 0 1 0"
                                  in="shadowOffsetOuter1"
                              />
                              </filter>
                          </defs>
                          <g fill="none" fillRule="evenodd">
                              <g transform="translate(0 2)">
                              <use
                                  fill="#000"
                                  filter="url(#chat-icon_svg__a)"
                                  xlinkHref="#chat-icon_svg__b"
                              />
                              <use fill="#FFC700" xlinkHref="#chat-icon_svg__b" />
                              </g>
                              <g transform="translate(0 2)">
                              <use
                                  fill="#000"
                                  filter="url(#chat-icon_svg__c)"
                                  xlinkHref="#chat-icon_svg__d"
                              />
                              <use fill="#009B75" xlinkHref="#chat-icon_svg__d" />
                              </g>
                          </g>
                          </svg>
                          <p className="text-xs pl-1 text-white">Chatting</p>
                      </button>
                      <button className="border-2 border-secondary px-3 py-1 flex items-center bg-main rounded-full">
                          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 256 258"><defs><linearGradient id="logosWhatsappIcon0" x1="50%" x2="50%" y1="100%" y2="0%"><stop offset="0%" stop-color="#1FAF38"></stop><stop offset="100%" stop-color="#60D669"></stop></linearGradient><linearGradient id="logosWhatsappIcon1" x1="50%" x2="50%" y1="100%" y2="0%"><stop offset="0%" stop-color="#F9F9F9"></stop><stop offset="100%" stop-color="#FFF"></stop></linearGradient></defs><path fill="url(#logosWhatsappIcon0)" d="M5.463 127.456c-.006 21.677 5.658 42.843 16.428 61.499L4.433 252.697l65.232-17.104a123 123 0 0 0 58.8 14.97h.054c67.815 0 123.018-55.183 123.047-123.01c.013-32.867-12.775-63.773-36.009-87.025c-23.23-23.25-54.125-36.061-87.043-36.076c-67.823 0-123.022 55.18-123.05 123.004"></path><path fill="url(#logosWhatsappIcon1)" d="M1.07 127.416c-.007 22.457 5.86 44.38 17.014 63.704L0 257.147l67.571-17.717c18.618 10.151 39.58 15.503 60.91 15.511h.055c70.248 0 127.434-57.168 127.464-127.423c.012-34.048-13.236-66.065-37.3-90.15C194.633 13.286 162.633.014 128.536 0C58.276 0 1.099 57.16 1.071 127.416m40.24 60.376l-2.523-4.005c-10.606-16.864-16.204-36.352-16.196-56.363C22.614 69.029 70.138 21.52 128.576 21.52c28.3.012 54.896 11.044 74.9 31.06c20.003 20.018 31.01 46.628 31.003 74.93c-.026 58.395-47.551 105.91-105.943 105.91h-.042c-19.013-.01-37.66-5.116-53.922-14.765l-3.87-2.295l-40.098 10.513z"></path><path fill="#FFF" d="M96.678 74.148c-2.386-5.303-4.897-5.41-7.166-5.503c-1.858-.08-3.982-.074-6.104-.074c-2.124 0-5.575.799-8.492 3.984c-2.92 3.188-11.148 10.892-11.148 26.561s11.413 30.813 13.004 32.94c1.593 2.123 22.033 35.307 54.405 48.073c26.904 10.609 32.379 8.499 38.218 7.967c5.84-.53 18.844-7.702 21.497-15.139c2.655-7.436 2.655-13.81 1.859-15.142c-.796-1.327-2.92-2.124-6.105-3.716s-18.844-9.298-21.763-10.361c-2.92-1.062-5.043-1.592-7.167 1.597c-2.124 3.184-8.223 10.356-10.082 12.48c-1.857 2.129-3.716 2.394-6.9.801c-3.187-1.598-13.444-4.957-25.613-15.806c-9.468-8.442-15.86-18.867-17.718-22.056c-1.858-3.184-.199-4.91 1.398-6.497c1.431-1.427 3.186-3.719 4.78-5.578c1.588-1.86 2.118-3.187 3.18-5.311c1.063-2.126.531-3.986-.264-5.579c-.798-1.593-6.987-17.343-9.819-23.64"></path></svg>
                          <p className="text-xs pl-1 text-white">WhatsApp</p>
                      </button>
                  </div>
              </div>
            </div>
            <MenusUsers
                items={[
                  { title: 'Home', link: '/seller/hera' },
                  { title: 'About Us', link: '/seller/hera/about' },
                  { title: 'Products', link: '/seller/hera/products' },
                ]}
              />
          </>
        </div>
      </div>
      <div className="container my-4">
        {children}
      </div>
    </div>
    
  );
}