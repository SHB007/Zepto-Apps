import React, { useState } from 'react';
import { Transition } from "@headlessui/react";
import { useNavigate, useLocation } from 'react-router-dom';



function TopNavBar() {

  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-gray-800">
        <div className="mx-auto w-[90%]">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img src="//cdn.shopify.com/s/files/1/0664/7119/8934/files/Zepto-logo.png?v=1659417999&amp;width=230" loading="lazy" className='h-auto w-[180px]' width="499" height="107" alt="zeptoapps247"></img>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <div
                    onClick={() => { navigate('/uploadFont') }}
                    className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
                    style={{ background: (location?.pathname === '/uploadFont') ? 'gray' : '' }}
                  >
                    Upload Font
                  </div>
                  <div
                    onClick={() => { navigate('/fontList') }}
                    className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
                    style={{ background: (location?.pathname === '/fontList') ? 'gray' : '' }}
                  >
                    Font List
                  </div>

                  <div
                    onClick={() => { navigate('/fontGroup') }}
                    className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
                    style={{ background: (location?.pathname === '/fontGroup') ? 'gray' : '' }}
                  >
                    Font Group
                  </div>


                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {() => (
            <div className="md:hidden" id="mobile-menu">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <div
                  onClick={() => { navigate('/uploadFont') }}
                  className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
                  style={{ background: (location?.pathname === '/uploadFont') ? 'gray' : '' }}
                >
                  Upload Font
                </div>
                <div
                  onClick={() => { navigate('/fontList') }}
                  className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
                  style={{ background: (location?.pathname === '/fontList') ? 'gray' : '' }}
                >
                  Font List
                </div>

                <div
                  onClick={() => { navigate('/fontGroup') }}
                  className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
                  style={{ background: (location?.pathname === '/fontGroup') ? 'gray' : '' }}
                >
                  Font Group
                </div>

              </div>
            </div>
          )}
        </Transition>
      </nav>

    </div>
  );
}

export default TopNavBar