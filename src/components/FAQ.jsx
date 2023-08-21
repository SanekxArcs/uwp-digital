import React from 'react'

const FAQ = () => {
  return (
    <>
      <div className="bg-white">
        <section className="relative pt-32 mx-auto  phone:w-[320px] tablet:w-[760px] laptop:w-[1650px]  pb-36">
          <h2 className="border-b h2 pb-14 border-middlegrey">FAQ</h2>
          <div className="grid grid-cols-4 grid-rows-1">
            {/*  Side text */}
            <div className="pr-12 row-span-full w-96 ">
              <p className="pt-12 font-bold body-16 text-middlegrey">
                VI SVARAR PÅ DE VANLIGASTE FRÅGOR
              </p>
            </div>

            {/*  Accordion */}
            <div className="col-span-3 pl-12 border-l border-middlegrey">
              {/*  1 Component of accordion menu */}
              <div className="relative pt-12 pb-12 overflow-hidden border-b border-middlegrey">
                <input
                  type="checkbox"
                  className="absolute inset-x-0 top-0 z-10 w-full h-full opacity-0 cursor-pointer peer"
                />
                <div className="flex items-center w-full pl-5 transition-all peer-checked:text-main">
                  <p className="text-2xl font-bold ">
                    What is a full-service marketing agency?
                  </p>
                </div>
                {/*  SVG + */}
                <div className="absolute text-black transition-transform duration-500 rotate-0 top-12 right-3 peer-checked:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </div>
                {/*  SVG Minus */}
                <div className="absolute hidden transition-transform duration-500 text-main top-12 right-3 peer-checked:block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 12h-15"
                    />
                  </svg>
                </div>
                <p className="w-11/12 h-0 p-0 overflow-hidden transition-all duration-500 body-16 peer-checked:h-40 peer-checked:p-4">
                  It means that we provide a full range of digital marketing
                  services for your business. We offer a 360° range of any
                  project - from creating a unique name to developing a website
                  and integrating payment systems. We are your best solution and
                  trusted digital marketer if you need to promote Instagram or
                  design a website. You do not need to apply to several
                  marketing agencies to get the desired result. You just need to
                  come to us.
                </p>
              </div>

              {/*  2 Component of accordion menu */}
              <div className="relative py-10 overflow-hidden border-b border-middlegrey">
                <input
                  type="checkbox"
                  className="absolute inset-x-0 top-0 z-10 w-full h-full opacity-0 cursor-pointer peer"
                />
                <div className="flex items-center w-full pl-5 transition-all peer-checked:text-main">
                  <p className="text-2xl font-bold ">
                    How do we start our cooperation?
                  </p>
                </div>
                {/*  SVG + */}
                <div className="absolute text-black transition-transform duration-500 rotate-0 top-12 right-3 peer-checked:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </div>
                {/*  SVG Minus */}
                <div className="absolute hidden transition-transform duration-500 text-main top-12 right-3 peer-checked:block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 12h-15"
                    />
                  </svg>
                </div>
                <p className="w-11/12 h-0 p-0 overflow-hidden transition-all duration-500 body-16 peer-checked:h-40 peer-checked:p-4">
                  It means that we provide a full range of digital marketing
                  services for your business. We offer a 360° range of any
                  project - from creating a unique name to developing a website
                  and integrating payment systems. We are your best solution and
                  trusted digital marketer if you need to promote Instagram or
                  design a website. You do not need to apply to several
                  marketing agencies to get the desired result. You just need to
                  come to us.
                </p>
              </div>

              {/*  3 Component of accordion menu */}
              <div className="relative py-10 overflow-hidden border-b border-middlegrey">
                <input
                  type="checkbox"
                  className="absolute inset-x-0 top-0 z-10 w-full h-full opacity-0 cursor-pointer peer"
                />
                <div className="flex items-center w-full pl-5 transition-all peer-checked:text-main">
                  <p className="text-2xl font-bold ">
                    What information should I provide you with a project?
                  </p>
                </div>
                {/*  SVG + */}
                <div className="absolute text-black transition-transform duration-500 rotate-0 top-12 right-3 peer-checked:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </div>
                {/*  SVG Minus */}
                <div className="absolute hidden transition-transform duration-500 text-main top-12 right-3 peer-checked:block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 12h-15"
                    />
                  </svg>
                </div>
                <p className="w-11/12 h-0 p-0 overflow-hidden transition-all duration-500 body-16 peer-checked:h-40 peer-checked:p-4">
                  It means that we provide a full range of digital marketing
                  services for your business. We offer a 360° range of any
                  project - from creating a unique name to developing a website
                  and integrating payment systems. We are your best solution and
                  trusted digital marketer if you need to promote Instagram or
                  design a website. You do not need to apply to several
                  marketing agencies to get the desired result. You just need to
                  come to us.
                </p>
              </div>

              {/*  4 Component of accordion menu */}
              <div className="relative py-10 overflow-hidden border-b border-middlegrey">
                <input
                  type="checkbox"
                  className="absolute inset-x-0 top-0 z-10 w-full h-full opacity-0 cursor-pointer peer"
                />
                <div className="flex items-center w-full pl-5 transition-all peer-checked:text-main">
                  <p className="text-2xl font-bold ">
                    How can I find out what your project specialists are doing?
                  </p>
                </div>
                {/*  SVG + */}
                <div className="absolute text-black transition-transform duration-500 rotate-0 top-12 right-3 peer-checked:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </div>
                {/*  SVG Minus */}
                <div className="absolute hidden transition-transform duration-500 text-main top-12 right-3 peer-checked:block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 12h-15"
                    />
                  </svg>
                </div>
                <p className="w-11/12 h-0 p-0 overflow-hidden transition-all duration-500 body-16 peer-checked:h-40 peer-checked:p-4">
                  It means that we provide a full range of digital marketing
                  services for your business. We offer a 360° range of any
                  project - from creating a unique name to developing a website
                  and integrating payment systems. We are your best solution and
                  trusted digital marketer if you need to promote Instagram or
                  design a website. You do not need to apply to several
                  marketing agencies to get the desired result. You just need to
                  come to us.
                </p>
              </div>

              {/*  5 Component of accordion menu */}
              <div className="relative py-10 overflow-hidden border-b border-middlegrey">
                <input
                  type="checkbox"
                  className="absolute inset-x-0 top-0 z-10 w-full h-full opacity-0 cursor-pointer peer"
                />
                <div className="flex items-center w-full pl-5 transition-all peer-checked:text-main">
                  <p className="text-2xl font-bold ">
                    How do I know what type of service my business needs?
                  </p>
                </div>
                {/*  SVG + */}
                <div className="absolute text-black transition-transform duration-500 rotate-0 top-12 right-3 peer-checked:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </div>
                {/*  SVG Minus */}
                <div className="absolute hidden transition-transform duration-500 text-main top-12 right-3 peer-checked:block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 12h-15"
                    />
                  </svg>
                </div>
                <p className="w-11/12 h-0 p-0 overflow-hidden transition-all duration-500 body-16 peer-checked:h-40 peer-checked:p-4">
                  It means that we provide a full range of digital marketing
                  services for your business. We offer a 360° range of any
                  project - from creating a unique name to developing a website
                  and integrating payment systems. We are your best solution and
                  trusted digital marketer if you need to promote Instagram or
                  design a website. You do not need to apply to several
                  marketing agencies to get the desired result. You just need to
                  come to us.
                </p>
              </div>

              {/*  6 Component of accordion menu */}
              <div className="relative py-10 mb-12 overflow-hidden border-b border-middlegrey">
                <input
                  type="checkbox"
                  className="absolute inset-x-0 top-0 z-10 w-full h-full opacity-0 cursor-pointer peer"
                />
                <div className="flex items-center w-full pl-5 transition-all peer-checked:text-main">
                  <p className="text-2xl font-bold ">
                    When will I see the financial result of working on promoting
                    my business?
                  </p>
                </div>
                {/*  SVG + */}
                <div className="absolute text-black transition-transform duration-500 rotate-0 top-12 right-3 peer-checked:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </div>
                {/*  SVG Minus */}
                <div className="absolute hidden transition-transform duration-500 text-main top-12 right-3 peer-checked:block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 12h-15"
                    />
                  </svg>
                </div>
                <p className="w-11/12 h-0 p-0 overflow-hidden transition-all duration-500 body-16 peer-checked:h-40 peer-checked:p-4">
                  It means that we provide a full range of digital marketing
                  services for your business. We offer a 360° range of any
                  project - from creating a unique name to developing a website
                  and integrating payment systems. We are your best solution and
                  trusted digital marketer if you need to promote Instagram or
                  design a website. You do not need to apply to several
                  marketing agencies to get the desired result. You just need to
                  come to us.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default FAQ
