import React from 'react'

const services = () => {
  return (
    <div>
      <>
  <header className="bg-white dark:bg-gray-800">
    <div className="container flex flex-col px-6 py-4 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
      <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
        <div className="flex justify-center order-2 mt-6 lg:mt-0 lg:space-y-3 lg:flex-col">
          <button className="w-3 h-3 mx-2 bg-blue-500 rounded-full lg:mx-0 focus:outline-none" />
          <button className="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none hover:bg-blue-500" />
          <button className="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none hover:bg-blue-500" />
          <button className="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none hover:bg-blue-500" />
        </div>
        <div className="max-w-lg lg:mx-12 lg:order-2">
          <h1 className="text-3xl font-medium tracking-wide text-gray-800 dark:text-white lg:text-4xl">
            The best Apple Watch apps
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quia
            asperiores alias vero magnam recusandae adipisci ad vitae laudantium
            quod rem voluptatem eos accusantium cumque.
          </p>
          <div className="mt-6">
            <a
              href="#"
              className="block px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-blue-500 rounded-md lg:inline hover:bg-blue-400"
            >
              Download from App Store
            </a>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
        <img
          className="object-cover w-full h-full max-w-2xl rounded-md"
          src="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
          alt="apple watch photo"
        />
      </div>
    </div>
  </header>
  <section className="bg-white dark:bg-gray-900">
    <div className="container px-6 py-10 mx-auto">
      <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
        explore our <br /> awesome Components
      </h1>
      <div className="mt-2">
        <span className="inline-block w-40 h-1 rounded-full bg-blue-500" />
        <span className="inline-block w-3 h-1 ml-1 rounded-full bg-blue-500" />
        <span className="inline-block w-1 h-1 ml-1 rounded-full bg-blue-500" />
      </div>
      <div className="mt-8 xl:mt-12 lg:flex lg:items-center">
        <div className="w-full lg:w-1/2 grid grid-cols-1 gap-8 xl:gap-16 md:grid-cols-2">
          <div className="space-y-3">
            <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </span>
            <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
              New Components
            </h1>
            <p className="text-gray-500 dark:text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              ab nulla quod dignissimos vel non corrupti doloribus voluptatum
              eveniet
            </p>
          </div>
          <div className="space-y-3">
            <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                />
              </svg>
            </span>
            <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
              elegant Dark Mode
            </h1>
            <p className="text-gray-500 dark:text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              ab nulla quod dignissimos vel non corrupti doloribus voluptatum
              eveniet
            </p>
          </div>
          <div className="space-y-3">
            <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                />
              </svg>
            </span>
            <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
              Easy to customiztions
            </h1>
            <p className="text-gray-500 dark:text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              ab nulla quod dignissimos vel non corrupti doloribus voluptatum
              eveniet
            </p>
          </div>
          <div className="space-y-3">
            <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
            </span>
            <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
              Simple &amp; clean designs
            </h1>
            <p className="text-gray-500 dark:text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              ab nulla quod dignissimos vel non corrupti doloribus voluptatum
              eveniet
            </p>
          </div>
        </div>
        <div className="hidden lg:flex lg:w-1/2 lg:justify-center">
          <img
            className="w-[28rem] h-[28rem] flex-shrink-0 object-cover xl:w-[34rem] xl:h-[34rem] rounded-full"
            src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
  <section className="m-4 md:m-8 dark:bg-coolGray-800 dark:text-coolGray-100">
    <div className="container mx-auto p-4 my-6 space-y-2 text-center">
      <h2 className="text-5xl font-bold">Built to empower every team</h2>
      <p className="dark:text-coolGray-400">Libero minima optio qui</p>
    </div>
    <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <div className="flex flex-col items-center p-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-8 h-8 dark:text-violet-400"
        >
          <path
            fillRule="evenodd"
            d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
            clipRule="evenodd"
          />
        </svg>
        <h3 className="my-3 text-3xl font-semibold">Product</h3>
        <div className="space-y-1 leading-tight">
          <p>Similique quas ea veniam</p>
          <p>Tempore quasi porro</p>
          <p>Blanditiis aut mollitia ex</p>
        </div>
      </div>
      <div className="flex flex-col items-center p-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-8 h-8 dark:text-violet-400"
        >
          <path
            fillRule="evenodd"
            d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
            clipRule="evenodd"
          />
        </svg>
        <h3 className="my-3 text-3xl font-semibold">Product</h3>
        <div className="space-y-1 leading-tight">
          <p>Similique quas ea veniam</p>
          <p>Tempore quasi porro</p>
          <p>Blanditiis aut mollitia ex</p>
        </div>
      </div>
      <div className="flex flex-col items-center p-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-8 h-8 dark:text-violet-400"
        >
          <path
            fillRule="evenodd"
            d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
            clipRule="evenodd"
          />
        </svg>
        <h3 className="my-3 text-3xl font-semibold">Product</h3>
        <div className="space-y-1 leading-tight">
          <p>Similique quas ea veniam</p>
          <p>Tempore quasi porro</p>
          <p>Blanditiis aut mollitia ex</p>
        </div>
      </div>
      <div className="flex flex-col items-center p-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-8 h-8 dark:text-violet-400"
        >
          <path
            fillRule="evenodd"
            d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
            clipRule="evenodd"
          />
        </svg>
        <h3 className="my-3 text-3xl font-semibold">Product</h3>
        <div className="space-y-1 leading-tight">
          <p>Similique quas ea veniam</p>
          <p>Tempore quasi porro</p>
          <p>Blanditiis aut mollitia ex</p>
        </div>
      </div>
      <div className="flex flex-col items-center p-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-8 h-8 dark:text-violet-400"
        >
          <path
            fillRule="evenodd"
            d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
            clipRule="evenodd"
          />
        </svg>
        <h3 className="my-3 text-3xl font-semibold">Product</h3>
        <div className="space-y-1 leading-tight">
          <p>Similique quas ea veniam</p>
          <p>Tempore quasi porro</p>
          <p>Blanditiis aut mollitia ex</p>
        </div>
      </div>
      <div className="flex flex-col items-center p-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-8 h-8 dark:text-violet-400"
        >
          <path
            fillRule="evenodd"
            d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
            clipRule="evenodd"
          />
        </svg>
        <h3 className="my-3 text-3xl font-semibold">Product</h3>
        <div className="space-y-1 leading-tight">
          <p>Similique quas ea veniam</p>
          <p>Tempore quasi porro</p>
          <p>Blanditiis aut mollitia ex</p>
        </div>
      </div>
      {/**/}
    </div>
  </section>
</>

    </div>
  )
}

export default services
