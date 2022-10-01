import { useState, useEffect } from "react";
import React from "react";
import Link from 'next/link'
import { createPopper } from '@popperjs/core';
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { Fragment } from 'react'
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const Navbar = ({logo}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start"
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <div>
      <style jsx>{`
    .hover-underline-animation {
      display: inline-block;
      position: relative;
      
    }
    
    .hover-underline-animation:after {
      content: '';
      position: absolute;
      width: 90%;
      transform: scaleX(0);
      height: 2px;
      bottom: 0;
      left: 8px;
      background-color: #000000;
      transform-origin: bottom left;
      transition: transform 0.25s ease-out;
    }
    
    .hover-underline-animation:hover:after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
    [data-theme='dark']{
      .hover-underline-animation:after{
        background-color:black;
      }
    }
    
  `}</style>
      <div>
        <nav className=" text-gray-800 bg-gray-100 fixed z-50 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0 flex">
                  {/* dynamic logo updated */}
                  <object data={'/logo.svg'} ></object>

                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <Link href={'/'} ><a
                      href="#"
                      className="hover-underline-animation   px-3 py-2 rounded-md text-base font-semibold"
                    >
                      Home
                    </a>

                    </Link>
					<Menu as="div" className="relative inline-block text-left">
                      <div>
                        <Menu.Button className=" hover-underline-animation   inline-flex justify-center w-full    px-4 py-2  text-base font-semibold text-gray-700   ">
                          Company
                          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                        </Menu.Button>
                      </div>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="origin-top-right   absolute left-2  right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="py-1 flex flex-col">
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active ? 'bg-gray-100  text-gray-900  ' : 'text-gray-700',
                                    'block px-4 py-2 font-medium  text-sm   hover-underline-animation'
                                  )}
                                >
                                  About us
                                </a>
                              )}
                            </Menu.Item>


                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                    <Link href={'/'} ><a
                      href="#"
                      className="hover-underline-animation    px-3 py-2 rounded-md text-base font-semibold"
                    >
                      Products

                    </a>
                    </Link>
                    <Link href={'/'} ><a
                      href="#"
                      className="hover-underline-animation   px-3 py-2 rounded-md text-base font-semibold"
                    >
                    Services
                    </a></Link>
                    <Link href={'/'} ><a
                      href="#"
                      className="hover-underline-animation   px-3 py-2 rounded-md text-base font-semibold"
                    >
                      Tools
                    </a></Link>
                    <Link href={'/'} ><a
                      href="#"
                      className="hover-underline-animation   px-3 py-2 rounded-md text-base font-semibold"
                    >
                      News
                    </a></Link>
					<Link href={'/'} ><a
                      href="#"
                      className="hover-underline-animation   px-3 py-2 rounded-md text-base font-semibold"
                    >
                      Blog
                    </a></Link>
					<Link href={'/'} ><a
                      href="#"
                      className="hover-underline-animation   px-3 py-2 rounded-md text-base font-semibold"
                    >
                      Contact Us
                    </a></Link>
                   
                    

                  </div>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className=" inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-gray-900  focus:outline-none  "
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
            {(ref) => (
              <div className="md:hidden" id="mobile-menu">
                <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3 ">
                <Link href={'/'} ><a
                      href="#"
                      className="hover-underline-animation   px-3 py-2 rounded-md text-base font-semibold"
                    >
                      Home
                    </a>

                    </Link>
                    <Link href={'/'} ><a
                      href="#"
                      className="hover-underline-animation   px-3 py-2 rounded-md text-base font-semibold"
                    >
                      Products

                    </a>
                    </Link>
                    <Link href={'/'} ><a
                      href="#"
                      className="hover-underline-animation   px-3 py-2 rounded-md text-base font-semibold"
                    >
                      Services
                    </a></Link>
                    <Link href={'/'} ><a
                      href="#"
                      className="hover-underline-animation   px-3 py-2 rounded-md text-base font-semibold"
                    >
                      Tools
                    </a></Link>
                    <Link href={'/'} ><a
                      href="#"
                      className="hover-underline-animation   px-3 py-2 rounded-md text-base font-semibold"
                    >
                      News
                    </a></Link>

                    <Menu as="div" className="relative inline-block text-left">
                      <div>
                        <Menu.Button className=" hover-underline-animation   inline-flex justify-center w-full rounded-md  px-4 py-2 bg-white text-base font-semibold text-gray-700 hover:bg-gray-50  ">
                          Company
                          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                        </Menu.Button>
                      </div>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="origin-top-right   absolute left-2  right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-20">
                          <div className="py-1 flex flex-col ">
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active ? 'bg-gray-100 text-gray-900   z-40' : 'text-gray-700',
                                    'block px-4 py-2 text-sm   hover-underline-animation'
                                  )}
                                >
                                  About us
                                </a>
                              )}
                            </Menu.Item>


                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                    
                    <Link  href={'/'} ><a
                      href="#"
                      className="hover-underline-animation   px-3 py-2 rounded-md text-base font-semibold"
                    >
                      News
                    </a>
                    </Link>
					<Link  href={'/'} ><a
                      href="#"
                      className="hover-underline-animation   px-3 py-2 rounded-md text-base font-semibold"
                    >
                      Blog
                    </a>
                    </Link>
					<Link  href={'/'} ><a
                      href="#"
                      className="hover-underline-animation   px-3 py-2 rounded-md text-base font-semibold"
                    >
                      Contact Us
                    </a>
                    </Link>
                </div>
              </div>
            )}
          </Transition>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;