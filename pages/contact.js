import React from 'react'

const contact = () => {
  return (
    <div>
      <>
  <section className="text-gray-600 body-font">
    <div className="container-fluid py-4 mx-auto">
      <img
        src={"/images/background/subheader.jpg"}
        className="max-h-80 w-full"
        alt="subheaderimage"
      />
    </div>
  </section>
  <section className="mx-auto w-1/1 p-12">
    <div className="flex flex-col md:flex-row justify-center">
      <div className="md:w-1/2 max-w-md flex flex-col justify-center">
        <div className="md:text-5xl text-xl font-black uppercase bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500  lg:text-5xl ">
          Contact-Us
        </div>
        <div className="text-xl mt-4">
          Send Us Your Query, We Will Reply You As Soon As Possible.
        </div>
      </div>
      <div className="md:w-1/2 flex justify-start mt-5 md:justify-end w-full  ">
        <div className="bg-gray-800 shadow-md border border-gray-300 flex-auto max-w-sm p-10 pb-20">
          <form action="#">
            <div className="w-full">
              <div className="font-bold h-6 mt-3 text-gray-50 text-xs leading-8 uppercase">
                <span className="text-red-400 mr-1">*</span> Name
              </div>
              <div className="my-2 bg-white p-1 flex border border-gray-200 rounded">
                <input
                  placeholder="name"
                  className="required:border-red-500 p-1 px-2 appearance-none outline-none w-full text-gray-800"
                  required=""
                />
              </div>
            </div>
            <div className="w-full">
              <div className="font-bold h-6 mt-3 text-gray-50 text-xs leading-8 uppercase">
                <span className="text-red-400 mr-1">*</span> Contact No.
              </div>
              <div className="my-2 bg-white p-1 flex border border-gray-200 rounded">
                <input
                  placeholder="number"
                  className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                  required=""
                />
              </div>
            </div>
            <div className="w-full">
              <div className="font-bold h-6 mt-3 text-gray-50 text-xs leading-8 uppercase">
                <span className="text-red-400 mr-1">*</span> Email
              </div>
              <div className="my-2 bg-white p-1 flex border border-gray-200 rounded">
                <input
                  placeholder="email"
                  className="required:border-red-500  p-1 px-2 appearance-none outline-none w-full text-gray-800"
                  required=""
                />
              </div>
            </div>
            <div className="mt-6 relative">
              <button
                className="shadow-md font-medium py-2 px-4 text-green-100 
           cursor-pointer bg-blue-700 rounded text-lg tr-mt  absolute text-center w-full focus:outline-none"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</>

    </div>
  )
}

export default contact
