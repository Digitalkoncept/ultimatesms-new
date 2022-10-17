import React from 'react'
import Footer from '../components/Footer'
const disclaimer = () => {
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
      {/*
    <div class="md:w-1/2 md:pr-10 md:py-8  md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
     <img src="images/misc/Why-Chose-Us.webp" alt="why-choose-us">
    </div>
  <div class="flex flex-col md:w-1/2 md:pl-12">
  <h1 class="sm:text-3xl sm font-medium title-font mb-2 text-gray-900">
  We do things differently</h1>
<p class="leading-relaxed text-base">Lorem ipsum ea ut magna nisi amet reprehenderit eu adipisicing nisi incididunt est sint fugiat deserunt tempor ea culpa nostrud commodo deserunt et do ullamco non tempor veniam id culpa mollit veniam ut non adipisicing ad commodo laborum esse do sunt in cillum irure incididunt officia quis ut reprehenderit amet est sunt culpa ut excepteur voluptate mollit ullamco ea consequat pariatur minim incididunt aute do dolor est ut cillum elit sit enim sint id magna ut dolore nulla officia deserunt officia aute sint dolor sit tempor consectetur aliquip ea non ullamco anim et dolore duis laboris sed ad nulla voluptate sint labore magna nisi adipisicing exercitation proident dolore cupidatat.</p>
<a class="text-indigo-500 inline-flex items-center mt-4">Learn More
  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
    <path d="M5 12h14M12 5l7 7-7 7"></path>
  </svg>
</a>
    </div>
  </div>*/}
    </div>
  </section>
  <section className="text-gray-600 body-font">
    <div className="container px-5 py-5 mx-auto">
      <div className="flex flex-col  w-full mb-20">
        <h2 className=" font-lg sm:font-medium title-font mb-4 text-gray-900">
          Website Disclaimer
        </h2>
        <p className="lg:w-3/3 leading-relaxed text-base">
          The information contained in this website is for general information
          purposes only. The information is provided by
          <span className="sm:font-sm font-medium title-font mb-4 text-gray-900">
            [UltimateSMS.in]
          </span>
          , a property of
          <span className="sm:font-sm font-medium title-font mb-4 text-gray-900">
            {" "}
            [UltimateSMS.in]
          </span>
          . While we endeavour to keep the information up to date and correct,
          we make no representations or warranties of any kind, express or
          implied, about the completeness, accuracy, reliability, suitability or
          availability with respect to the website or the information, products,
          services, or related graphics contained on the website for any
          purpose. Any reliance you place on such information is therefore
          strictly at your own risk.
        </p>
        <br />
        <p className="lg:w-3/3 leading-relaxed text-base">
          In no event will we be liable for any loss or damage including without
          limitation, indirect or consequential loss or damage, or any loss or
          damage whatsoever arising from loss of data or profits arising out of,
          or in connection with, the use of this website.
        </p>
        <br />
        <p className="lg:w-3/3 leading-relaxed text-base">
          Through this website you are able to link to other websites which are
          not under the control of{" "}
          <span className="sm:font-sm font-medium title-font mb-4 text-gray-900">
            {" "}
            [UltimateSMS.in]
          </span>
          . We have no control over the nature, content and availability of
          those sites. The inclusion of any links does not necessarily imply a
          recommendation or endorse the views expressed within them.
        </p>
        <br />
        <p className="lg:w-3/3 leading-relaxed text-base">
          Every effort is made to keep the website up and running smoothly.
          However,{" "}
          <span className="sm:font-sm font-medium title-font mb-4 text-gray-900">
            {" "}
            [UltimateSMS.in]
          </span>
          . takes no responsibility for, and will not be liable for, the website
          being temporarily unavailable due to technical issues beyond our
          control.
        </p>
        <br />
      </div>
    </div>
  </section>
</>
<Footer/>
    </div>
  )
}
// node version update
export default disclaimer
