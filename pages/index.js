import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Slideshow from '../components/Slideshow'
import Footer from '../components/Footer'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ultimate-SMS</title>
        <meta name="description" content="Ultimate SMS | Promotional and Transactional Services | Bulk SMS & WhatsApp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <style jsx>{`
            .btn-main{
              background-color: #00927c;
            }
            .btn-main:hover {
            color: #fff;
            background-color: #126c5f;
            -webkit-box-shadow: 2px 2px 20px 0px rgba(#359b8c, 0.5);
            -moz-box-shadow: 2px 2px 20px 0px rgba(#359b8c, 0.5);
            box-shadow: 2px 2px 20px 0px rgba(#359b8c, 0.5);
        }
        .logo-1 {
          width: 75px; height: 62px;
            background: url('images/css_sprites.png') -10px -10px;
        }
        .logo-2{
          width: 75px; height: 62px;
            background: url('images/css_sprites.png') -105px -10px;
        }
        .logo-3{
          width: 75px; height: 62px;
            background: url('images/css_sprites.png') -10px -92px;
        }
        .logo-4{
          width: 75px; height: 62px;
            background: url('images/css_sprites.png') -105px -92px;
        }
        .logo-5{
          width: 75px; height: 62px;
            background: url('images/css_sprites.png') -200px -10px;
        }
        .logo-6{
           width: 75px; height: 62px;
            background: url('images/css_sprites.png') -200px -92px;
        }
        
        .bg-whatsapp2icon {
            width: 50px; height: 50px;
            background: url('images/social_sprites.png') -10px -85px;
        }
        .bg-telegram1 {
            width: 50px; height: 50px;
            background: url('images/social_sprites.png') -85px -10px;
        }
        .bg-Koo2 {
            width: 55px; height: 55px;
            background: url('images/social_sprites.png') -10px -10px;
        }
      `}</style>
      <main>
        <Slideshow/>
        <section className="text-gray-600 body-font">
    <div className=" px-5 py-2 mx-auto">
      <h2 className="inline-flex items-center w-full py-8 my-auto justify-center px-auto text-4xl font-bold tracking-tight text-gray-800  ">
              Promotional
                        </h2>
      <div className="flex flex-wrap -m-4">
        <div className="p-4 md:w-1/3">
          <div className="h-full border-2 border-gray-400 border-opacity-60  overflow-hidden">
            <img loading="lazy" className="lg:h-60  md:h-36 w-full object-fill object-center"
              src="images/misc/bulk-sms-marketing-500x336.webp" alt="blog" />
            <div className="p-6">

              <Link href={"Post/promotionalsms"} >
                <div
                className="flex items-center mt-auto font-bold text-white bg-red-600  border-0 py-2 px-3 w-4/6 focus:outline-none  rounded">
                Promotional SMS
                </div>
              </Link>
              <p className="leading-relaxed mb-3 text-gray-800">You can generate awareness and notify about the live sale through
                promotional SMS to your target customers in no time.</p>
                <p className="flex items-center font-bold text-gray-700 mb-2">
                  <span
                    className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-700 text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round"
                      stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3"
                      viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Marketing SMS
                </p>
                <p className="flex items-center font-bold text-gray-700 mb-2">
                  <span
                    className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-700 text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round"
                      stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3"
                      viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  SMS Solution
                </p> <p className="flex items-center font-bold text-gray-700 mb-2">
                  <span
                    className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-700 text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round"
                      stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3"
                      viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Election SMS
                </p>
              <div className="flex items-center flex-wrap ">
             <Link href={"Post/promotional-sms"} >
                <div
                className="flex items-center mt-auto font-bold text-white btn-main border-0 py-2 px-4 w-3/6 focus:outline-none  rounded">
                read more
                <svg fill="none" stroke="currentColor" stroke-linecap="round"
                  stroke-linejoin="round" stroke-width="2"
                  className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </div>
              </Link> 
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 md:w-1/3">
          <div className="h-full border-2 border-gray-400 border-opacity-60  overflow-hidden">
            <img loading="lazy" className="lg:h-60  md:h-36 w-full object-fill object-center"
              src="images/misc/WhatsApp-1Marketing.webp" alt="blog" />
            <div className="p-6">

              <Link href="Post/whatspp-marketing" >  
                <div className="flex items-center mt-auto font-bold text-white bg-red-600  border-0 py-2 px-3 w-4/6 focus:outline-none  rounded" >
                WhatsApp Marketing </div>
              </Link>
              <p className="leading-relaxed mb-3 text-gray-800">You can generate awareness and notify about the live sale through
                promotional SMS to your target customers in no time.</p>
                <p className="flex items-center font-bold text-gray-700 mb-2">
                  <span
                    className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-700  text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round"
                      stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3"
                      viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Marketing SMS
                </p>
                <p className="flex items-center font-bold text-gray-700 mb-2">
                  <span
                    className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-700 text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round"
                      stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3"
                      viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  SMS Solution
                </p> <p className="flex items-center font-bold text-gray-700 mb-2">
                  <span
                    className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-700 text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round"
                      stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3"
                      viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Election SMS
                </p>
              <div className="flex items-center flex-wrap ">
              <Link href="Post/whatspp-marketing" >
                <div
                className="flex items-center mt-auto font-bold text-white btn-main border-0 py-2 px-4 w-3/6 focus:outline-none  rounded">
                read more
                <svg fill="none" stroke="currentColor" stroke-linecap="round"
                  stroke-linejoin="round" stroke-width="2"
                  className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
                </div>
              </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 md:w-1/3">
          <div className="h-full border-2 border-gray-400 border-opacity-60  overflow-hidden">
            <img  className="lg:h-60  md:h-36 w-full object-fill object-center"
              src="images/misc/Voice-Message1-Broadcasting.webp" alt="blog" />
            <div className="p-6">

            <Link href="Post/voice-broadcasting" >
            <div
                className="flex items-center mt-auto font-bold text-white bg-red-600  border-0 py-2 px-3 w-4/6 focus:outline-none  rounded">
                Voice Broadcasting
                </div>
              </Link>
              <p className="leading-relaxed mb-3 text-gray-800">You can generate awareness and notify about the live sale through
                promotional SMS to your target customers in no time.</p>
                <p className="flex items-center font-bold text-gray-700 mb-2">
                  <span
                    className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-700 text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round"
                      stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3"
                      viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Marketing SMS
                </p>
                <p className="flex items-center font-bold text-gray-700 mb-2">
                  <span
                    className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-700 text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round"
                      stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3"
                      viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  SMS Solution
                </p> <p className="flex items-center font-bold text-gray-700 mb-2">
                  <span
                    className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-700 text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round"
                      stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3"
                      viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Election SMS
                </p>
              <div className="flex items-center flex-wrap ">
              <Link href="Post/voice-broadcasting" >
                <div
                className="flex items-center mt-auto font-bold text-white btn-main border-0 py-2 px-4 w-3/6 focus:outline-none  rounded">
                read more
                <svg fill="none" stroke="currentColor" stroke-linecap="round"
                  stroke-linejoin="round" stroke-width="2"
                  className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
                </div>
              </Link>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
        </section>
        <section className="text-gray-600 body-font">
  <div className=" px-5 py-2 mx-auto">
    <h2 className="inline-flex items-center w-full py-8 my-auto justify-center px-auto text-4xl font-bold tracking-tight text-gray-800  ">
      Transactional
    </h2>
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-400 border-opacity-60  overflow-hidden">
          <img
            loading="lazy"
            className="lg:h-60  md:h-36 w-full object-fill object-center"
            src="images/misc/OTP-SMS-500x336.webp"
            alt="blog"
            style={{}}
          />
          <div className="p-6">
            <Link href="Post/otp-sms"
              > 
              <div
              className="flex items-center mt-auto font-bold text-white bg-red-600  border-0 py-2 px-3 w-3/6 focus:outline-none  rounded">
              OTP SMS
              </div>
            </Link>
            <p className="leading-relaxed mb-3 text-gray-800">
              You can generate awareness and notify about the live sale through
              promotional SMS to your target customers in no time.
            </p>
            <p className="flex items-center font-bold text-gray-700 mb-2">
              <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-700 text-white rounded-full flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  className="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </span>
              Marketing SMS
            </p>
            <p className="flex items-center font-bold text-gray-700 mb-2">
              <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-700 text-white rounded-full flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  className="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </span>
              SMS Solution
            </p>{" "}
            <p className="flex items-center font-bold text-gray-700 mb-2">
              <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-700 text-white rounded-full flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  className="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </span>
              Election SMS
            </p>
            <div className="flex items-center flex-wrap ">
              <Link
                href="Post/otp-sms">
              <div
                className="flex items-center mt-auto font-bold text-white btn-main border-0 py-2 px-4 w-3/6 focus:outline-none  rounded"
              >
                read more
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 ml-auto"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-400 border-opacity-60  overflow-hidden">
          <img
            loading="lazy"
            className="lg:h-60  md:h-36 w-full object-fill object-center"
            src="images/misc/Transactional SMS-500x336.webp"
            alt="blog"
            style={{}}
          />
          <div className="p-6">
            <Link 
              href="Post/transactional-sms">
              <div
              className="flex items-center mt-auto font-bold text-white bg-red-600  border-0 py-2 px-3 w-4/6 focus:outline-none  rounded"
            >
              Transactional SMS </div>
            </Link>
            <p className="leading-relaxed mb-3 text-gray-800">
              You can generate awareness and notify about the live sale through
              promotional SMS to your target customers in no time.
            </p>
            <p className="flex items-center font-bold text-gray-700 mb-2">
              <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-700  text-white rounded-full flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  className="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </span>
              Marketing SMS
            </p>
            <p className="flex items-center font-bold text-gray-700 mb-2">
              <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-700 text-white rounded-full flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  className="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </span>
              SMS Solution
            </p>{" "}
            <p className="flex items-center font-bold text-gray-700 mb-2">
              <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-700 text-white rounded-full flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  className="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </span>
              Election SMS
            </p>
            <div className="flex items-center flex-wrap ">
              <Link
                href="Post/transactional-sms"
                ><div
                className="flex items-center mt-auto font-bold text-white btn-main border-0 py-2 px-4 w-3/6 focus:outline-none  rounded"
              >
                read more
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 ml-auto"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
                  </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-400 border-opacity-60  overflow-hidden">
          <img
            loading="lazy"
            className="lg:h-60  md:h-36 w-full object-fill object-center"
            src="images/misc/WhatsApp-Business-API.webp"
            alt="blog"
            style={{}}
          />
          <div className="p-6">
            <Link
              href="Post/whatsapp-business-api"
              ><div
              className="flex items-center mt-auto font-bold text-white bg-red-600  border-0 py-2 px-3 w-4/6 focus:outline-none  rounded"
            >
              WhatsApp Bussiness API
              </div>
            </Link>
            <p className="leading-relaxed mb-3 text-gray-800">
              You can generate awareness and notify about the live sale through
              promotional SMS to your target customers in no time.
            </p>
            <p className="flex items-center font-bold text-gray-700 mb-2">
              <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-700 text-white rounded-full flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  className="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </span>
              Marketing SMS
            </p>
            <p className="flex items-center font-bold text-gray-700 mb-2">
              <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-700 text-white rounded-full flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  className="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </span>
              SMS Solution
            </p>{" "}
            <p className="flex items-center font-bold text-gray-700 mb-2">
              <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-700 text-white rounded-full flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  className="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </span>
              Election SMS
            </p>
            <div className="flex items-center flex-wrap ">
              <Link
                href="Post/whatsapp-business-api"
                ><div
                className="flex items-center mt-auto font-bold text-white btn-main border-0 py-2 px-4 w-3/6 focus:outline-none  rounded"
              >
                read more
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 ml-auto"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
        </section>
<section className="text-gray-600 body-font">
  <div className=" px-5 py-8 mx-auto">
    <h2 className="inline-flex items-center w-full py-8 my-auto justify-center px-auto text-4xl font-bold tracking-tight text-gray-800  ">
      Tracking &amp; Reporting
    </h2>
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-400 border-opacity-60  overflow-hidden">
          <img
            loading="lazy"
            className="lg:h-60  md:h-36 w-full object-fill object-center"
            src="images/misc/CRM.webp"
            alt="blog"
            style={{}}
          />
          <div className="p-6">
            <Link
              href="Post/sales-crm"
              ><div
              className="flex items-center mt-auto font-bold text-white bg-red-600  border-0 py-2 px-3 w-3/6 focus:outline-none  rounded"
            >
              Sales CRM
              </div>
            </Link>
            <p className="leading-relaxed mb-3 text-gray-800">
              You can generate awareness and notify about the live sale through
              promotional SMS to your target customers in no time.
            </p>
            <p className="flex items-center font-bold text-gray-700 mb-2">
              <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-700 text-white rounded-full flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  className="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </span>
              Marketing SMS
            </p>
            <p className="flex items-center font-bold text-gray-700 mb-2">
              <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-700 text-white rounded-full flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  className="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </span>
              SMS Solution
            </p>{" "}
            <p className="flex items-center font-bold text-gray-700 mb-2">
              <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-700 text-white rounded-full flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  className="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </span>
              Election SMS
            </p>
            <div className="flex items-center flex-wrap ">
              <Link
                href="sales-crm"
                ><div
                className="flex items-center mt-auto font-bold text-white btn-main border-0 py-2 px-4 w-3/6 focus:outline-none  rounded"
              >
                read more
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 ml-auto"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-400 border-opacity-60  overflow-hidden">
          <img
            loading="lazy"
            className="lg:h-60  md:h-36 w-full object-fill object-center"
            src="images/misc/Audio-Confrencing.webp"
            alt="blog"
            style={{}}
          />
          <div className="p-6">
            <Link
              href="audio-confrencing"
              ><div
              className="flex items-center mt-auto font-bold text-white bg-red-600  border-0 py-2 px-3 w-4/6 focus:outline-none  rounded"
            >
              Audio Conferencing
              </div>
            </Link>
            <p className="leading-relaxed mb-3 text-gray-800">
              You can generate awareness and notify about the live sale through
              promotional SMS to your target customers in no time.
            </p>
            <p className="flex items-center font-bold text-gray-700 mb-2">
              <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-700  text-white rounded-full flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  className="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </span>
              Marketing SMS
            </p>
            <p className="flex items-center font-bold text-gray-700 mb-2">
              <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-700 text-white rounded-full flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  className="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </span>
              SMS Solution
            </p>{" "}
            <p className="flex items-center font-bold text-gray-700 mb-2">
              <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-700 text-white rounded-full flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  className="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </span>
              Election SMS
            </p>
            <div className="flex items-center flex-wrap ">
              <Link
                href="Post/audio-confrencing"
                ><div
                className="flex items-center mt-auto font-bold text-white btn-main border-0 py-2 px-4 w-3/6 focus:outline-none  rounded"
              >
                read more
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 ml-auto"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-400 border-opacity-60  overflow-hidden">
          <img
            loading="lazy"
            className="lg:h-60  md:h-36 w-full object-fill object-center"
            src="images/misc/Miss-Call-and-IVR.webp"
            alt="blog"
            style={{}}
          />
          <div className="p-6">
            <Link
              href="ivr-and-miss-call-services"
              ><div
              className="flex items-center mt-auto font-bold text-white bg-red-600  border-0 py-2 px-3 w-3/6 focus:outline-none  rounded"
            >
              IVR &amp; Miss Call
              </div>
            </Link>
            <p className="leading-relaxed mb-3 text-gray-800">
              You can generate awareness and notify about the live sale through
              promotional SMS to your target customers in no time.
            </p>
            <p className="flex items-center font-bold text-gray-700 mb-2">
              <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-700 text-white rounded-full flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  className="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </span>
              Marketing SMS
            </p>
            <p className="flex items-center font-bold text-gray-700 mb-2">
              <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-700 text-white rounded-full flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  className="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </span>
              SMS Solution
            </p>{" "}
            <p className="flex items-center font-bold text-gray-700 mb-2">
              <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-700 text-white rounded-full flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  className="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </span>
              Election SMS
            </p>
            <div className="flex items-center flex-wrap ">
              <Link
                href="Post/ivr-and-miss-call-services"
                ><div
                className="flex items-center mt-auto font-bold text-white btn-main border-0 py-2 px-4 w-3/6 focus:outline-none  rounded"
              >
                read more
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 ml-auto"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="text-gray-600 body-font">
  <div className=" px-5 py-8 mx-auto">
    <h2 className="inline-flex items-center w-full py-8 my-auto justify-center px-auto text-4xl font-bold tracking-tight text-gray-800  ">
      Why Choose Us?
    </h2>
    <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
      <div>
        <img
          src="images/misc/Why-Chose-Us.webp"
          alt="whychooseus"
          loading="lazy"
        />
      </div>
      {/* ... */}
      <div className="">
        <h4 className="inline-flex  w-full py-2   justify-start px-4 text-2xl font-semibold tracking-tight text-gray-700  ">
          Platforms
        </h4>
        {/*  <div class="grid grid-cols-6 gap-2">
        <div><img  class=" border border-gray-400 rounded p-1" src="images/css_sprites.png" alt="whatsapp-75x62-1" loading="lazy"></div>
        <div><img  class=" border border-gray-400 rounded p-1" src="images/css_sprites.png" alt="ivr-75x62" loading="lazy"></div>
        <div><img  class=" border border-gray-400 rounded p-1" src="images/css_sprites.png" alt="email-75x62" loading="lazy"></div>
        <div><img  class=" border border-gray-400 rounded p-1" src="images/css_sprites.png" alt="sms-1n" loading="lazy"></div>
        <div><img  class=" border border-gray-400 rounded p-1" src="images/css_sprites.png" alt="Miss-Call-75x62" loading="lazy"></div>
        <div><img  class=" border border-gray-400 rounded p-1" src="images/css_sprites.png" alt="telegram-75x62" loading="lazy"></div>
        </div> */}
        <div className="flex flex-wrap space-x-4 space-y-2 mx-auto ">
          <div className="" />
          <div className="logo-1 p-1  border border-gray-400 rounded" />
          <div className="logo-2 p-1  border border-gray-400 rounded" />
          <div className="logo-3 p-1  border border-gray-400 rounded" />
          <div className="logo-4 p-1  border border-gray-400 rounded" />
          <div className="logo-5 p-1  border border-gray-400 rounded" />
          <div className="logo-6 p-1  border border-gray-400 rounded" />
        </div>
        <div>
          {" "}
          <h4 className="inline-flex  w-full py-2   justify-start px-4 text-2xl font-semibold tracking-tight text-gray-700  ">
            Background
          </h4>
          <p className="px-6">
            Ultimate SMS is a part of Technology Company-Digital Koncept where
            our main focus is to offer Solution and Products which are Practical
            and Solve Real Problem???s. Solution should be Justified in terms of
            Cost, Performance and Easy to Use.
          </p>
          <ul className="list-disc list-inside py-2 px-6">
            <li> Fast Service </li>
            <li> Easy Interface </li>
            <li> Vast Varity of Services and Product </li>
            <li> Technology Proficient and Future Ready</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
<Footer/>
      </main>

      
    </div>
  )
}
