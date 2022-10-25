import React, { useState } from "react";
import Link from 'next/link'
const Modal = () => {
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };
  return (
    <>
      {/* <button
        className="bg-blue-200 text-black active:bg-blue-500 
      font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Fill Details
      </button> */}

        <>
        <style jsx>{`
         .logo-1{
            width: 75px; height: 62px;
              background: url('images/css_sprites.png') -105px -92px;
          }
          .logo-2{
            width: 75px; height: 62px;
             background: url('images/css_sprites.png') -200px -92px;
         }
         .logo-3{
            width: 75px; height: 62px;
              background: url('images/css_sprites.png') -105px -10px;
          }
          .logo-4 {
            width: 75px; height: 62px;
              background: url('images/css_sprites.png') -10px -10px;
          }
        `}

        </style>
           <div className="flex items-center space-y-2 justify-center py-20 px-4">
                <div className="md:w-96 space-y-4 flex-col gap-4 rounded-md shadow-lg p-5  bg-white">
                    <h1 className="pt-2 pb-7 text-rose-600  font-bold text-2xl  text-center">Log In</h1>
                    <div className="space-y-6 space-x-3 justify-around">
                        <div></div>
                    <div className="flex items-center  justify-between">
                        <div className="flex items-center">
                            <div className=" flex items-center justify-center ">
                                <div className="logo-1"></div>
                            {/* <img src="/images/sms-1n.png" className="h-[80px] w-[100px]"  alt="bulk-sms" /> */}
                            </div>
                            <p className="text-gray-600  text-sm font-bold pl-3 mx-2 ">Bulk SMS</p>
                        </div>
                        
                            <a href="https://bulk-sms-1.ultimatesms.in/login.php" target="_blank" rel="noopener noreferrer">
                                
                        <button className="py-2 px-4 text-xs font-semibold leading-3 bg-indigo-700 rounded hover:bg-indigo-600 focus:outline-none text-white">Log In</button>
                        </a>
                        
                    </div>
                    <hr class="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
                    <div className="flex items-center  justify-between">
                        <div className="flex items-center">
                            <div className=" flex items-center justify-center ">
                                <div className="logo-2"></div>
                                {/* <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#A78BFA" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <circle cx={9} cy={19} r={2} />
                                    <circle cx={17} cy={19} r={2} />
                                    <path d="M3 3h2l2 12a3 3 0 0 0 3 2h7a3 3 0 0 0 3 -2l1 -7h-15.2" />
                                </svg> */}
                                {/* <img src="/images/whatsapp2icon.png" className="" style={{height:"50px", width:"50px"}} alt="" /> */}
                            </div>
                            <p className="text-gray-600  text-sm font-bold pl-3 mx-2">Whatsapp Marketing</p>
                            
                        </div>
                        <button className="py-2 px-4 text-xs font-semibold leading-3 bg-indigo-700 rounded hover:bg-indigo-600 focus:outline-none text-white">Log In</button>
                    </div>
                    <hr class="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
                    <div className="flex items-center  justify-between">
                        <div className="flex items-center">
                            <div className=" flex items-center justify-center ">
                                <div className="logo-3"></div>
                                {/* <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#A78BFA" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <circle cx={9} cy={19} r={2} />
                                    <circle cx={17} cy={19} r={2} />
                                    <path d="M3 3h2l2 12a3 3 0 0 0 3 2h7a3 3 0 0 0 3 -2l1 -7h-15.2" />
                                </svg> */}
                                {/* <img src="/images/whatsapp2icon.png"  alt="" /> */}
                            </div>
                            <p className="text-gray-600  text-sm font-bold pl-3 mx-2">Voice Broadcasting</p>
                        </div>
                        <button className="py-2 px-4 text-xs font-semibold leading-3 bg-indigo-700 rounded hover:bg-indigo-600 focus:outline-none text-white">Log In</button>
                    </div>
                    <hr class="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
                    <div className="flex items-center  justify-between">
                        <div className="flex items-center">
                            <div className=" flex items-center justify-center ">
                                <div className="logo-4"></div>
                            </div>
                            <p className="text-gray-600  text-sm font-bold pl-3 mx-2">Email Marketing</p>
                        </div>
                        <button className="py-2 px-4 text-xs font-semibold leading-3 bg-indigo-700 rounded hover:bg-indigo-600 focus:outline-none text-white">Log In</button>
                    </div>
                    
                    </div>
                </div>
            </div>
        </>
  
    </>
  );
};

export default Modal;
