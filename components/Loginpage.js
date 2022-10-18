import React, { useEffect } from "react";
import Head from "next/head";
export default function index() {
    
    return (
        <>
            <div className="flex flex-wrap items-center justify-center  gap-7 py-20 sm:px-6 px-4">
                <Head>
                    <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
                </Head>
                {/* use   <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script> in order to use charts*/}
                <div className="w-64 p-4  rounded border hover:shadow-lg">
                    <div className="flex justify-center items-center flex-col ">
                        <div>
                            <img src="/images/misc/WhatsApp-1Marketing.webp" alt="avatar" />
                        </div>
                        <div className="flex justify-center items-center flex-col mt-3">
                            <h2 className="text-sm font-medium leading-none text-gray-800">Whatsapp Marketing</h2>
                            
                        </div>
                    </div>
                  
                    
                    <div className="w-56 h-9">
                        <button role="button" aria-label="Log In" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 hover:bg-gray-100 flex items-center justify-center flex-1 h-full py-3 px-20 bg-gray-50 border rounded border-gray-200">
                            <p className="text-sm font-medium leading-none text-gray-600">Log In</p>
                        </button>
                    </div>
                </div>
                <div className="w-64 p-4  rounded border hover:shadow-lg">
                    <div className="flex justify-center items-center flex-col ">
                        <div>
                            <img src="https://i.ibb.co/99gx0CZ/Mask-Group-1.png" alt="avatar-2" />
                        </div>
                        <div className="flex justify-center items-center flex-col mt-3">
                            <p className="text-sm font-medium leading-none text-gray-800">Charlie Jill</p>
                            <p className="text-sm font-medium leading-none text-gray-600 mt-1">Front End Developer</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-8">
                        <h1 className="text-2xl font-semibold leading-normal text-gray-800">74</h1>
                        <div className="p-1 flex justify-between">
                            <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 14V2" stroke="#059669" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M10 4L8 2L6 4" stroke="#059669" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M6 14H10" stroke="#059669" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <p className="text-xs leading-3 text-green-700">1.98%</p>
                        </div>
                    </div>
                    <p className="text-sm leading-none text-gray-600">Projects done</p>
                    <div className="h-16 mt-14">
                        <canvas height={56} tabIndex={0} className="focus:outline-none" aria-label="graph" role="img" id="myChart2" />
                    </div>
                    <div className="w-56 h-9">
                        <button role="button" aria-label="Log In" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 hover:bg-gray-100 flex items-center justify-center flex-1 h-full py-3 px-20 bg-gray-50 border rounded border-gray-200">
                            <p className="text-sm font-medium leading-none text-gray-600">Log In</p>
                        </button>
                    </div>
                </div>
                <div className="w-64 p-4  rounded border hover:shadow-lg">
                    <div className="flex justify-center items-center flex-col ">
                        <div>
                            <img src="https://i.ibb.co/4YpPvd8/Mask-Group-2.png" alt="avatar-3" />
                        </div>
                        <div className="flex justify-center items-center flex-col mt-3">
                            <p className="text-sm font-medium leading-none text-gray-800">Amy Jackson</p>
                            <p className="text-sm font-medium leading-none text-gray-600 mt-1">Back End Developer</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-8">
                        <h1 className="text-2xl font-semibold leading-normal text-gray-800">190</h1>
                        <div className="p-1 flex justify-between">
                            <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 14V2" stroke="#059669" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M10 4L8 2L6 4" stroke="#059669" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M6 14H10" stroke="#059669" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <p className="text-xs leading-3 text-green-700">2.90%</p>
                        </div>
                    </div>
                    <p className="text-sm leading-none text-gray-600">Projects done</p>
                    <div className="h-16 mt-14">
                        <canvas height={56} tabIndex={0} className="focus:outline-none" aria-label="graph" role="img" id="myChart3" />
                    </div>
                    <div className="w-56 h-9">
                        <button role="button" aria-label="Log In" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 hover:bg-gray-100 flex items-center justify-center flex-1 h-full py-3 px-20 bg-gray-50 border rounded border-gray-200">
                            <p className="text-sm font-medium leading-none text-gray-600">Log In</p>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
