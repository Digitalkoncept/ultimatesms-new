import React from 'react'
import Footer from '../components/Footer'
const about = () => {
  return (
    <div>
      <>
  <section className="text-gray-600 body-font">
    <div className="container-fluid py-16 mx-auto">
      <img
        src="images/subheader-3.jpg"
        className="img-fluid"
        alt="subheaderimage"
      />
    </div>
  </section>
  <section className="text-gray-600 body-font">
    <div className="container flex flex-wrap px-5  mx-auto items-center">
      <div className="md:w-1/2 md:pr-10 md:py-8  md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
        <img src="images/misc/Why-Chose-Us.webp" alt="why-choose-us" />
      </div>
      <div className="flex flex-col md:w-1/2 md:pl-12">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
          We do things differently
        </h1>
        <p className="leading-relaxed text-base">
          Lorem ipsum ea ut magna nisi amet reprehenderit eu adipisicing nisi
          incididunt est sint fugiat deserunt tempor ea culpa nostrud commodo
          deserunt et do ullamco non tempor veniam id culpa mollit veniam ut non
          adipisicing ad commodo laborum esse do sunt in cillum irure incididunt
          officia quis ut reprehenderit amet est sunt culpa ut excepteur
          voluptate mollit ullamco ea consequat pariatur minim incididunt aute
          do dolor est ut cillum elit sit enim sint id magna ut dolore nulla
          officia deserunt officia aute sint dolor sit tempor consectetur
          aliquip ea non ullamco anim et dolore duis laboris sed ad nulla
          voluptate sint labore magna nisi adipisicing exercitation proident
          dolore cupidatat.
        </p>
        <a className="text-indigo-500 inline-flex items-center mt-4">
          Learn More
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  </section>
  <section className="text-gray-600 body-font">
    <div className="container px-5 py-5 mx-auto">
      <div className="flex flex-col text-center w-full mb-20">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          Master Cleanse Reliac Heirloom
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
          gentrify, subway tile poke farm-to-table. Franzen you probably haven't
          heard of them man bun deep jianbing selfies heirloom prism food truck
          ugh squid celiac humblebrag.
        </p>
      </div>
      <div className="flex flex-wrap -m-4 text-center">
        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
          <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="text-green-500 w-12 h-12 mb-3 inline-block"
              viewBox="0 0 24 24"
            >
              <path d="M8 17l4 4 4-4m-4-5v9" />
              <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
            </svg>
            <h2 className="title-font font-medium text-3xl text-gray-900">
              2.7K
            </h2>
            <p className="leading-relaxed">Downloads</p>
          </div>
        </div>
        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
          <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="text-green-500 w-12 h-12 mb-3 inline-block"
              viewBox="0 0 24 24"
            >
              <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
              <circle cx={9} cy={7} r={4} />
              <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75" />
            </svg>
            <h2 className="title-font font-medium text-3xl text-gray-900">
              1.3K
            </h2>
            <p className="leading-relaxed">Users</p>
          </div>
        </div>
        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
          <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="text-green-500 w-12 h-12 mb-3 inline-block"
              viewBox="0 0 24 24"
            >
              <path d="M3 18v-6a9 9 0 0118 0v6" />
              <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
            </svg>
            <h2 className="title-font font-medium text-3xl text-gray-900">
              74
            </h2>
            <p className="leading-relaxed">Files</p>
          </div>
        </div>
        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
          <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="text-green-500 w-12 h-12 mb-3 inline-block"
              viewBox="0 0 24 24"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <h2 className="title-font font-medium text-3xl text-gray-900">
              46
            </h2>
            <p className="leading-relaxed">Places</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="text-gray-600 body-font">
    <div className="container px-5 py-5 mx-auto">
      <div className="flex flex-col text-center w-full mb-20">
        <h1 className="text-2xl font-medium title-font mb-4 text-gray-900">
          OUR TEAM
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
          gentrify, subway tile poke farm-to-table. Franzen you probably haven't
          heard of them.
        </p>
      </div>
      <div className="flex flex-wrap -m-4">
        <div className="p-4 lg:w-1/4 md:w-1/2">
          <div className="h-full flex flex-col items-center text-center">
            <img
              loading="lazy"
              alt="team"
              className="flex-shrink-0 rounded-lg w-full h-62 object-cover object-center mb-4"
              src="images/1.jpg"
            />
            <div className="w-full">
              <h2 className="title-font font-medium text-lg text-gray-900">
                Alper Kamu
              </h2>
              <h3 className="text-gray-500 mb-3">UI Developer</h3>
              <p className="mb-4">
                DIY tote bag drinking vinegar cronut adaptogen squid fanny pack
                vaporware.
              </p>
              <span className="inline-flex">
                <a className="text-gray-500">
                  <svg
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a className="ml-2 text-gray-500">
                  <svg
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a className="ml-2 text-gray-500">
                  <svg
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="p-4 lg:w-1/4 md:w-1/2">
          <div className="h-full flex flex-col items-center text-center">
            <img
              loading="lazy"
              alt="team"
              className="flex-shrink-0 rounded-lg w-full h-62 object-cover object-center mb-4"
              src="images/2.jpg"
            />
            <div className="w-full">
              <h2 className="title-font font-medium text-lg text-gray-900">
                Holden Caulfield
              </h2>
              <h3 className="text-gray-500 mb-3">UI Developer</h3>
              <p className="mb-4">
                DIY tote bag drinking vinegar cronut adaptogen squid fanny pack
                vaporware.
              </p>
              <span className="inline-flex">
                <a className="text-gray-500">
                  <svg
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a className="ml-2 text-gray-500">
                  <svg
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a className="ml-2 text-gray-500">
                  <svg
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="p-4 lg:w-1/4 md:w-1/2">
          <div className="h-full flex flex-col items-center text-center">
            <img
              loading="lazy"
              alt="team"
              className="flex-shrink-0 rounded-lg w-full h-62 object-cover object-center mb-4"
              src="images/3.jpg"
            />
            <div className="w-full">
              <h2 className="title-font font-medium text-lg text-gray-900">
                Atticus Finch
              </h2>
              <h3 className="text-gray-500 mb-3">UI Developer</h3>
              <p className="mb-4">
                DIY tote bag drinking vinegar cronut adaptogen squid fanny pack
                vaporware.
              </p>
              <span className="inline-flex">
                <a className="text-gray-500">
                  <svg
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a className="ml-2 text-gray-500">
                  <svg
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a className="ml-2 text-gray-500">
                  <svg
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="p-4 lg:w-1/4 md:w-1/2">
          <div className="h-full flex flex-col items-center text-center">
            <img
              loading="lazy"
              alt="team"
              className="flex-shrink-0 rounded-lg w-full h-62 object-cover object-center mb-4"
              src="images/4.jpg"
            />
            <div className="w-full">
              <h2 className="title-font font-medium text-lg text-gray-900">
                Henry Letham
              </h2>
              <h3 className="text-gray-500 mb-3">UI Developer</h3>
              <p className="mb-4">
                DIY tote bag drinking vinegar cronut adaptogen squid fanny pack
                vaporware.
              </p>
              <span className="inline-flex">
                <a className="text-gray-500">
                  <svg
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a className="ml-2 text-gray-500">
                  <svg
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a className="ml-2 text-gray-500">
                  <svg
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer/>
</>

    </div>
  )
}

export default about
