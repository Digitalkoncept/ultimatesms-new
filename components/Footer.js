import React from 'react'
import Link from "next/link"
const Footer = () => {
  return (
    <div>
         <style jsx>{`
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
    <div className="bg-gray-900">
  <div className="px-4 pt-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
    <div className="grid row-gap-10 mb-8 lg:grid-cols-4">
      <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
        <div>
          <p className="font-medium tracking-wide text-green-500">Company</p>
          <ul className="mt-2 ">
            <li>
              <Link href={"/about"}>
              <a
                
                className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200"
                >
                About us
              </a>
              </Link>
            </li>
            <li>
              <Link href={"/news"}>
              <a
                className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200"
                >
                News
              </a>
             </Link>
            </li>
            <li>
              <Link href={"/blog"}>
              <a
                className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200"
                >
                Blog
              </a>
            </Link>
            </li>
            <li>
              <Link href={"/"}>
              <a
                className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200"
                >
                Partner with us
              </a>
              </Link>
            </li>
            <li>
              <Link href={"/contact"}>
              <a
                className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200"
                >
                Contact Us
              </a>
              </Link>
            </li>
            <li>
              <Link href={"/"}>
              <a
                className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200"
                >
                Sitemap
              </a>
            </Link>
            </li>
            <li>
              <Link href={"/faqs"}>
              <a
                className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200"
                >
                FAQs
              </a>
            </Link>
            </li>
            <li>
              <Link href={"/disclaimer"}>
              <a
                className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200"
                >
                Disclaimer
              </a>
            </Link>
            </li>
            <li>
              <Link href={"/privacypolicy"}>
              <a
                className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200"
                >
                Privacy Policy
              </a>
            </Link>
            </li>
            <li>
              <Link href={"/termsandcondition"}>
              <a
                className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200"
                >
                Terms-and-Conditions
              </a>
             </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-medium tracking-wide text-green-500">
            CASE STUDIES
          </p>
          <ul className="mt-2 ">
            <li>
              <Link href={"/politicalcampaign"}>
              <a
                className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200"
                >
                Political Campaign
              </a>
            </Link>
            </li>
            <li>
              <Link href={"/educationalintitute"}>
              <a
                className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200"
                >
                Educational Institute
              </a>
              </Link>
            </li>
            <li>
              <Link href={"/hotelindustry"}>
              <a
                className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200"
                >
                Hotel Industry
              </a>
            </Link>
            </li>
            <li>
              <Link href={"/financeindustry"}>
              <a
                className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200"
                >
                Finance Industry
              </a>
          </Link>
            </li>
            <li>
              <Link href={"/eventmanagement"}>
              <a
                className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200"
                >
                Event Management
              </a>
            </Link>
            </li>
            <li>
              <Link href={"/realestate"}>
              <a
                className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200"
                >
                Real Estate
              </a>
            </Link>
            </li>
            <li>
              <Link href={"serviceindustry"}>
              <a
                className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200"
                >
                Service Industry
              </a>
            </Link>
            </li>
            <li>
              <Link href={"/onlineaggregator"}>
              <a
                className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200"
                >
                Online Aggregator
              </a>
            </Link>
            </li>
            <li>
              <Link href={"/ecommerceservices"}>
              <a
                className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200"
                >
                E-commerce
              </a>
            </Link>
            </li>
            <li>
              <Link href={"/retailservices"}>
              <a
                className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200"
                >
                Retail
              </a>
             </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-medium tracking-wide text-green-500">SOLUTIONS</p>
          <ul className="mt-2">
            <li>
              <Link href={"/bulksmsservices"}>
              <a
                className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200"
                >
                Bulk SMS Service
              </a>
            </Link>
            </li>
            <li>
              <Link href={"/hostedsolutions"}>
              <a
                className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200"
                >
                Hosted IVR Solutions
              </a>
            </Link>
            </li>
            <li>
              <Link href={"/tollfreenumber"}>
              <a
                className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200"
                >
                Toll Free Number
              </a>
            </Link>
            </li>
            <li>
              <Link href={"Post/voice-broadcasting"}>
              <a
                className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200"
                >
                Voice Broadcasting
              </a>
            </Link>
            </li>
            <li>
              <Link href={"/clicktocall"}>
              <a
                className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200"
                >
                Click to Call
              </a>
             </Link>
            </li>
            <li>
              <Link href={"/missedcallservices"}>
              <a
                className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200"
                >
                Missed Call Services
              </a>
            </Link>
            </li>
            <li>
              <Link href={"Post/sales-crm"}>
              <a
                className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200"
                >
                Sales CRM
              </a>
             </Link>
            </li>
            <li>
              <Link href={"/emailmarketing"}>
              <a
                className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200"
                >
                Email Marketing
              </a>
             </Link>
            </li>
            <li>
              <Link href={"/telegrammarketing"}>
              <a
                className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200"
                >
                Telegram Marketing
              </a>
             </Link>
            </li>
            <li>
              <Link href={"/digitalmarketing"}>
              <a
                className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200"
                >
                Digital Marketing
              </a>
             </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="flex items-center mt-4 pb-6 space-x-4 sm:mt-0">
            <a
              href="/"
              className="text-green-500 transition-colors duration-300 hover:text-blue-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-6">
                <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
              </svg>
            </a>
            <a
              href="/"
              className="text-green-500 transition-colors duration-300 hover:text-blue-400"
            >
              <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                <circle cx={15} cy={15} r={4} />
                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
              </svg>
            </a>
            <a
              href="/"
              className="text-green-500  transition-colors duration-300 hover:text-blue-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-6">
                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
              </svg>
            </a>
          </div>
          <span className="text-2xl mt-6 font-medium tracking-wide text-white">
            chat with us
          </span>
          {/*  <div><img src="images/whatsapp2icon.png" alt="whatsapp2icon"></div>
        <div><img src="images/telegram1.png" alt="telegram"></div>
        <div><img src="images/Koo2.png" alt="Koo"></div>*/}
          <div className="flex flex-wrap space-x-2  space-y-2  ">
            <div className="" />
            <div className="bg-Koo2" />
            <div className="bg-telegram1" />
            <div className="bg-whatsapp2icon" />
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-col justify-between pt-3 pb-3 border-t border-gray-800 sm:flex-row">
      <p className="text-sm text-gray-500">
        © Copyright 2020 UltimateSMS. All rights reserved.
      </p>
      <div className="flex items-center mt-4 space-x-4 sm:mt-0">
        <a
          href="/"
          className="text-white transition-colors duration-300 hover:text-teal-accent-400"
        >
          Technology Partner @{" "}
          <img
            className="inline-block"
            src="images/digital-logo.svg"
            alt="digitallogo"
          />
        </a>
      </div>
    </div>
  </div>
        </div>

    </div>
  )
}

export default Footer
