import { useRouter } from 'next/router'
import Head from 'next/head'
import Footer from '../../components/Footer'

const Post = () => {
  const router = useRouter()
  const { pid } = router.query

  return <>
  <Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
      </Head>
     <section
    className=" "
    style={{ backgroundColor: "#f5f6fe" }}
  >
    <div className="container flex flex-col justify-center p-6 mx-auto sm:py-10 lg:py-16 lg:flex-row lg:justify-between">
      <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-xl lg:text-left">
        <h1 className="text-5xl font-bold leading-none sm:text-6xl font-sans">
          OTP SMS
          <span className=" font-sans">
            Service Provider
          </span>
        </h1>
        <p className="mt-6 mb-8 text-lg sm:mb-12 font-sans">
          We provide the best workspace for your company.
          <br className="hidden md:inline lg:hidden font-mono" />
          Over 150 locations around the world. Find your best place to work in
          CoSpace.
        </p>
        <div className="flex flex-col space-y-2 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
          <a
            href="promotional-sms.php"
            target="_blank"
            className="flex items-center mt-auto font-bold text-white duration-500 btn-main border-0 py-2 px-4 w-2/6 focus:outline-none "
          >
            Explore
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
          </a>
        </div>
        <section className=" ">
          <div className="container lg:mt-8 py-4  mx-auto">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div>
                <i
                  className="fa fa-shield"
                  style={{ fontSize: 36, color: "#61ce70" }}
                />
                <h1 className="mt-4 text-xl font-semibold text-gray-800  font-sans">
                  Safe and Secure
                </h1>
                <p className="mt-2 text-gray-500  font-sans">
                  Send OTP in a secure manner using HTTPS protocols.
                </p>
              </div>
              <div>
                <i
                  className="fa fa-link"
                  style={{ fontSize: 36, color: "#61ce70" }}
                />
                <h1 className="mt-4 text-xl font-semibold text-gray-800 ">
                  Robust API
                </h1>
                <p className="mt-2 text-gray-500 ">
                  Get OTP status through a validator API.
                </p>
              </div>
              <div>
                <i
                  className="fa fa-plane"
                  style={{ fontSize: 36, color: "#61ce70" }}
                />
                <h1 className="mt-4 text-xl font-semibold text-gray-800 ">
                  Lightning Fast
                </h1>
                <p className="mt-2 text-gray-500 ">
                  Pay only for OTP’s delivered within 30 seconds.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
        <img
          src={"/images/basic-sms.png"}
          alt=""
          className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
        />
      </div>
    </div>
  </section>
  <section className=" ">
    <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl ">
          Aliquip definiebas ad est
        </h2>
        <p className="max-w-3xl mx-auto mt-4 text-xl text-center ">
          Quando cetero his ne, eum admodum sapientem ut.
        </p>
      </div>
      <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
        <div>
          <h3 className="text-2xl font-bold tracking-tight sm:text-3xl ">
            Ad vix debet docendi
          </h3>
          <p className="mt-3 text-lg ">
            Ne dicta praesent ocurreret has, diam theophrastus at pro. Eos etiam
            regione ut, persius eripuit quo id. Sit te euismod tacimates.
          </p>
          <div className="mt-12 space-y-12">
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 rounded-md  ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-7 h-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium leading-6 ">
                  Per ei quaeque sensibus
                </h4>
                <p className="mt-2 ">
                  Ex usu illum iudico molestie. Pro ne agam facete
                  mediocritatem, ridens labore facete mea ei. Pro id apeirian
                  dignissim.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 rounded-md  ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-7 h-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium leading-6 ">
                  Cu imperdiet posidonium sed
                </h4>
                <p className="mt-2 ">
                  Amet utinam aliquando ut mea, malis admodum ocurreret nec et,
                  elit tibique cu nec. Nec ex maluisset inciderint, ex quis.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 rounded-md  ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-7 h-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium leading-6 ">
                  Nulla omittam sadipscing mel ne
                </h4>
                <p className="mt-2 ">
                  At sed possim oporteat probatus, justo graece ne nec, minim
                  commodo legimus ut vix. Ut eos iudico quando soleat, nam
                  modus.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="mt-10 lg:mt-0">
          <img
            src="https://source.unsplash.com/random/360x480"
            alt=""
            className="mx-auto rounded-lg shadow-lg "
          />
        </div>
      </div>
      <div>
        <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
          <div className="lg:col-start-2">
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl ">
              Eam nibh gloriatur ex
            </h3>
            <p className="mt-3 text-lg ">
              Per odio fabellas consulatu cu. Utroque detracto mel ea, quo te
              latine theophrastus. Ea his tale nibh dissentias, mei exerci
              tamquam euripidis cu.
            </p>
            <div className="mt-12 space-y-12">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md  ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-7 h-7"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium leading-6 ">
                    Cibo augue offendit has ad
                  </h4>
                  <p className="mt-2 ">
                    An per velit appellantur, ut utinam minimum nominavi sit,
                    odio nostro habemus ne nec. Ne sonet regione contentiones
                    est.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md  ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-7 h-7"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium leading-6 ">
                    At eum ferri luptatum lobortis
                  </h4>
                  <p className="mt-2 ">
                    Te per quidam maiorum ocurreret, etiam delicatissimi usu ad.
                    Ne has quod periculis. Te sit primis iisque efficiantur.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md  ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-7 h-7"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium leading-6 ">
                    Dicunt verterem evertitur eu sea
                  </h4>
                  <p className="mt-2 ">
                    Audire principes rationibus eam an, autem nominavi luptatum
                    per te. Sumo fabulas vim eu, sonet saperet eleifend ut vix.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
            <img
              src="https://source.unsplash.com/random/361x481"
              alt=""
              className="mx-auto rounded-lg shadow-lg "
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer/>
  </>
}

export default Post