import React, { useState,useRef } from "react";
import emailjs from '@emailjs/browser';
const contact = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();

  //   Form validation
  const [errors, setErrors] = useState({});

  //   Setting button text
  const [buttonText, setButtonText] = useState("Send");

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (fullname.length <= 0) {
      tempErrors["fullname"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (subject.length <= 0) {
      tempErrors["subject"] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };

  //   const [form, setForm] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();  
    emailjs.sendForm('service_ek0th41', 'template_4of9hzj', form.current, 'b9Rz1KRr_N-u2-cfA')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    let isValidForm = handleValidation();
   

    if (isValidForm) {
      setButtonText("Sending");
     

      // const { error } = await res.json();
      // if (error) {
      //   console.log(error);
      //   setShowSuccessMessage(false);
      //   setShowFailureMessage(true);
      //   setButtonText("Send");

      //   // Reset form fields
      //   setFullname("");
      //   setEmail("");
      //   setMessage("");
      //   setSubject("");
      //   return;
      // }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Send");
      // Reset form fields
      setFullname("");
      setEmail("");
      setMessage("");
      setSubject("");
    }
    console.log(fullname, email,  message);
   };
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
  {/* <section className="mx-auto w-1/1 p-12">
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
  </section> */}
  <header className="p-8 grid grid-cols-1 z-0  md:grid-cols-2 gap-4 pt-10 lg:px-40 bg-blue-50  md:h-full">
        <div className="mx-auto mb-10 md:mt-20">
          <div className="badge bg-green-500 inline-block rounded-xl">
            <p className="font-light text-base px-4 py-1 text-gray-50">
              Lets talk
            </p>
          </div>
          <h1 className="text-4xl font-bold mt-4  text-gray-700">
            Lets talk about your projects.
          </h1>
          <p className="text-sm text-gray-700 mt-4 font-light ">
            Fill the form and send in your queries. I will respond as soon as I
            can. Alternatively, You can reach out to me at my email address.
          </p>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="rounded-lg shadow-xl flex flex-col px-8 py-8 bg-white "
        >
          <h1 className="text-2xl font-bold ">
            Send a message
          </h1>

          <label
            htmlFor="fullname"
            className="text-gray-500 font-light mt-8 "
          >
            Full name<span className="text-red-500 ">*</span>
          </label>
          <input
            type="text"
            value={fullname}
            name="user_name"
            onChange={(e) => {
              setFullname(e.target.value);
            }}
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
          />
          {errors?.fullname && (
            <p className="text-red-500">Fullname cannot be empty.</p>
          )}

          <label
            htmlFor="email"
            className="text-gray-500 font-light mt-4 "
          >
            E-mail<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="user_email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
          />
          {errors?.email && (
            <p className="text-red-500">Email cannot be empty.</p>
          )}

          <label
            htmlFor="subject"
            className="text-gray-500 font-light mt-4 "
          >
            Subject<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="subject"
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
          />
          {errors?.subject && (
            <p className="text-red-500">Subject cannot be empty.</p>
          )}
          <label
            htmlFor="message"
            className="text-gray-500 font-light mt-4 "
          >
            Message<span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
          ></textarea>
          {errors?.message && (
            <p className="text-red-500">Message body cannot be empty.</p>
          )}
          <div className="flex flex-row items-center justify-start">
            <button
              type="submit"
              className="px-10 mt-8 py-2 bg-[#130F49] text-gray-50 font-light rounded-md text-lg flex flex-row items-center"
            >
              {buttonText}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="text-cyan-500 ml-2"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
          <div className="text-left">
            {showSuccessMessage && (
              <p className="text-green-500 font-semibold text-sm my-2">
                Thankyou! Your Message has been delivered.
              </p>
            )}
            {showFailureMessage && (
              <p className="text-red-500">
                Oops! Something went wrong, please try again.
              </p>
            )}
          </div>
        </form>
      </header>
</>

    </div>
  )
}

export default contact
