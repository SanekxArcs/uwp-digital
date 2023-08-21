import React from 'react'

const LetsDiscuss = () => {
  return (
    <>
      <section
        id="ABOUTUS"
        className="relative pt-32 mx-auto text-white  phone:w-[320px] tablet:w-[760px] laptop:w-[1650px] "
      >
        <h2 className="border-b h2 pb-14 border-middlegrey">
          Let&apos;s discuss the project
        </h2>
        <div className="grid grid-cols-1 laptop:grid-cols-4 ">
          {/*  side text */}
          <div className="pr-12 row-span-full w-96">
            <p className="pt-12 body-16">
              Marketing is often viewed as simply creating beautiful
              advertising. We want to change this impression and turn it 180°.
              If you need an SEO agency, an AdWords agency, a personal web
              programmer, or an entire digital media agency - welcome to
              UWP.Digital.
            </p>
            <a
              className="sticky top-0 flex items-center gap-5 px-10 py-3 mt-10 font-bold text-white uppercase transition-all duration-300 rounded-full justify-items-center bg-main body-16 active:bg-activeRed hover:bg-lightred hover:py-6 hover:mt-8"
              href="#"
            >
              Order a consultation
              <img loading="lazy" src="./img/link arrov.svg" alt="" />
            </a>
          </div>

          <div className="flex flex-col laptop:col-span-3">
            {/*  Implement the carousel */}
            <div className="relative ">
              {/*  Slide 1 */}
              <div className="relative slide">
                {/*  Component */}
                <div className="flex pt-12 pl-40 border-l border-middlegrey">
                  {/*  Profile Foto */}
                  <div className="relative ">
                    <img
                      loading="lazy"
                      className="w-[390px] h-[520px]"
                      src="./img/IMAGE.webp"
                      alt=""
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-activeRed to-transparent"></div>
                    {/*  Link to profile */}
                    <a
                      className="absolute bottom-[-2.5rem] left-0 grid w-20 h-20 rounded-full place-content-center rotate-45 hover:rotate-0 transition-all bg-light"
                      href="#"
                    >
                      <img loading="lazy" src="./img/arrow black.svg" alt="" />
                    </a>
                  </div>
                  {/*  Information */}
                  <div className="pl-14 w-[640px]">
                    <div className="flex pb-8">
                      <div className="grid w-16 h-16 rounded-full place-content-center bg-light">
                        <img
                          loading="lazy"
                          className="w-5 h-5"
                          src="./img/qaters .svg"
                          alt=""
                        />
                      </div>
                      {/*  Name */}
                      <p className="pl-8 text-3xl">
                        Daniella
                        <br />
                        {/*  Job */}
                        <span className="body-16 text-darkgrey">
                          {" "}
                          Project manager{" "}
                        </span>
                      </p>
                    </div>
                    {/*  Description */}
                    <p className="body-p text-start pb-44">
                      The main advantage of social networks is the lack of
                      boundaries. Even if your target audience lives in Spain or
                      Sri Lanka, you can reach them on Facebook.
                    </p>
                    <div className="">
                      <p className="body-16">
                        Працює з John Deere, STVOL, Anabel Arto, Є-Гроші, Kimito
                      </p>
                      <div className="flex pt-4">
                        <div className="flex items-center">
                          <p className="pr-2 text-6xl font-bold text-activeRed">
                            6+
                          </p>
                          <p className="body-16">
                            років у <br /> компанії
                          </p>
                        </div>
                        <div className="flex items-center pl-14">
                          <p className="pr-2 text-6xl font-bold text-activeRed">
                            150+
                          </p>
                          <p className="body-16">
                            успішних <br /> проектів
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/*  Slide2 */}
              <div className="relative slide">
                {/*  Component */}
                <div className="flex pt-12 pl-40 border-l border-middlegrey">
                  {/*  Profile Foto */}
                  <div className="relative ">
                    <img
                      loading="lazy"
                      className="w-[390px] h-[520px]"
                      src="./img/IMAGE1.webp"
                      alt=""
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-activeRed to-transparent"></div>
                    {/*  Link to profile */}
                    <a
                      className="absolute bottom-[-2.5rem] left-0 grid w-20 h-20 rounded-full place-content-center rotate-45 hover:rotate-0 transition-all bg-light"
                      href="#"
                    >
                      <img loading="lazy" src="./img/arrow black.svg" alt="" />
                    </a>
                  </div>
                  {/*  Information */}
                  <div className="pl-14 w-[640px]">
                    <div className="flex pb-8">
                      <div className="grid w-16 h-16 rounded-full place-content-center bg-light">
                        <img
                          loading="lazy"
                          className="w-5 h-5"
                          src="./img/qaters .svg"
                          alt=""
                        />
                      </div>
                      {/*  Name */}
                      <p className="pl-8 text-3xl">
                        Daniella
                        <br />
                        {/*  Job */}
                        <span className="body-16 text-darkgrey">
                          {" "}
                          Project manager{" "}
                        </span>
                      </p>
                    </div>
                    {/*  Description */}
                    <p className="body-p text-start pb-44">
                      The main advantage of social networks is the lack of
                      boundaries. Even if your target audience lives in Spain or
                      Sri Lanka, you can reach them on Facebook.
                    </p>
                    <div className="">
                      <p className="body-16">
                        Працює з John Deere, STVOL, Anabel Arto, Є-Гроші, Kimito
                      </p>
                      <div className="flex pt-4">
                        <div className="flex items-center">
                          <p className="pr-2 text-6xl font-bold text-activeRed">
                            6+
                          </p>
                          <p className="body-16">
                            років у <br /> компанії
                          </p>
                        </div>
                        <div className="flex items-center pl-14">
                          <p className="pr-2 text-6xl font-bold text-activeRed">
                            150+
                          </p>
                          <p className="body-16">
                            успішних <br /> проектів
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/*  Slide 3 */}
              <div className="relative slide">
                {/*  Component */}
                <div className="flex pt-12 pl-40 border-l border-middlegrey">
                  {/*  Profile Foto */}
                  <div className="relative ">
                    <img
                      loading="lazy"
                      className="w-[390px] h-[520px]"
                      src="./img/IMAGE.webp"
                      alt=""
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-activeRed to-transparent"></div>
                    {/*  Link to profile */}
                    <a
                      className="absolute bottom-[-2.5rem] left-0 grid w-20 h-20 rounded-full place-content-center rotate-45 hover:rotate-0 transition-all bg-light"
                      href="#"
                    >
                      <img loading="lazy" src="./img/arrow black.svg" alt="" />
                    </a>
                  </div>
                  {/*  Information */}
                  <div className="pl-14 w-[640px]">
                    <div className="flex pb-8">
                      <div className="grid w-16 h-16 rounded-full place-content-center bg-light">
                        <img
                          loading="lazy"
                          className="w-5 h-5"
                          src="./img/qaters .svg"
                          alt=""
                        />
                      </div>
                      {/*  Name */}
                      <p className="pl-8 text-3xl">
                        Daniella
                        <br />
                        {/*  Job */}
                        <span className="body-16 text-darkgrey">
                          {" "}
                          Project manager{" "}
                        </span>
                      </p>
                    </div>
                    {/*  Description */}
                    <p className="body-p text-start pb-44">
                      The main advantage of social networks is the lack of
                      boundaries. Even if your target audience lives in Spain or
                      Sri Lanka, you can reach them on Facebook.
                    </p>
                    <div className="">
                      <p className="body-16">
                        Працює з John Deere, STVOL, Anabel Arto, Є-Гроші, Kimito
                      </p>
                      <div className="flex pt-4">
                        <div className="flex items-center">
                          <p className="pr-2 text-6xl font-bold text-activeRed">
                            6+
                          </p>
                          <p className="body-16">
                            років у <br /> компанії
                          </p>
                        </div>
                        <div className="flex items-center pl-14">
                          <p className="pr-2 text-6xl font-bold text-activeRed">
                            150+
                          </p>
                          <p className="body-16">
                            успішних <br /> проектів
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/*  Slide 4 */}
              <div className="relative slide">
                {/*  Component */}
                <div className="flex pt-12 pl-40 border-l border-middlegrey">
                  {/*  Profile Foto */}
                  <div className="relative ">
                    <img
                      loading="lazy"
                      className="w-[390px] h-[520px]"
                      src="./img/IMAGE1.webp"
                      alt=""
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-activeRed to-transparent"></div>
                    {/*  Link to profile */}
                    <a
                      className="absolute bottom-[-2.5rem] left-0 grid w-20 h-20 rounded-full place-content-center rotate-45 hover:rotate-0 transition-all bg-light"
                      href="#"
                    >
                      <img loading="lazy" src="./img/arrow black.svg" alt="" />
                    </a>
                  </div>
                  {/*  Information */}
                  <div className="pl-14 w-[640px]">
                    <div className="flex pb-8">
                      <div className="grid w-16 h-16 rounded-full place-content-center bg-light">
                        <img
                          loading="lazy"
                          className="w-5 h-5"
                          src="./img/qaters .svg"
                          alt=""
                        />
                      </div>
                      {/*  Name */}
                      <p className="pl-8 text-3xl">
                        Daniella
                        <br />
                        {/*  Job */}
                        <span className="body-16 text-darkgrey">
                          {" "}
                          Project manager{" "}
                        </span>
                      </p>
                    </div>
                    {/*  Description */}
                    <p className="body-p text-start pb-44">
                      The main advantage of social networks is the lack of
                      boundaries. Even if your target audience lives in Spain or
                      Sri Lanka, you can reach them on Facebook.
                    </p>
                    <div className="">
                      <p className="body-16">
                        Працює з John Deere, STVOL, Anabel Arto, Є-Гроші, Kimito
                      </p>
                      <div className="flex pt-4">
                        <div className="flex items-center">
                          <p className="pr-2 text-6xl font-bold text-activeRed">
                            6+
                          </p>
                          <p className="body-16">
                            років у <br /> компанії
                          </p>
                        </div>
                        <div className="flex items-center pl-14">
                          <p className="pr-2 text-6xl font-bold text-activeRed">
                            150+
                          </p>
                          <p className="body-16">
                            успішних <br /> проектів
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/*  Slide 5 */}
              <div className="relative slide">
                {/*  Component */}
                <div className="flex pt-12 pl-40 border-l border-middlegrey">
                  {/*  Profile Foto */}
                  <div className="relative ">
                    <img
                      loading="lazy"
                      className="w-[390px] h-[520px]"
                      src="./img/IMAGE.webp"
                      alt=""
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-activeRed to-transparent"></div>
                    {/*  Link to profile */}
                    <a
                      className="absolute bottom-[-2.5rem] left-0 grid w-20 h-20 rounded-full place-content-center rotate-45 hover:rotate-0 transition-all bg-light"
                      href="#"
                    >
                      <img loading="lazy" src="./img/arrow black.svg" alt="" />
                    </a>
                  </div>
                  {/*  Information */}
                  <div className="pl-14 w-[640px]">
                    <div className="flex pb-8">
                      <div className="grid w-16 h-16 rounded-full place-content-center bg-light">
                        <img
                          loading="lazy"
                          className="w-5 h-5"
                          src="./img/qaters .svg"
                          alt=""
                        />
                      </div>
                      {/*  Name */}
                      <p className="pl-8 text-3xl">
                        Daniella
                        <br />
                        {/*  Job */}
                        <span className="body-16 text-darkgrey">
                          {" "}
                          Project manager{" "}
                        </span>
                      </p>
                    </div>
                    {/*  Description */}
                    <p className="body-p text-start pb-44">
                      The main advantage of social networks is the lack of
                      boundaries. Even if your target audience lives in Spain or
                      Sri Lanka, you can reach them on Facebook.
                    </p>
                    <div className="">
                      <p className="body-16">
                        Працює з John Deere, STVOL, Anabel Arto, Є-Гроші, Kimito
                      </p>
                      <div className="flex pt-4">
                        <div className="flex items-center">
                          <p className="pr-2 text-6xl font-bold text-activeRed">
                            6+
                          </p>
                          <p className="body-16">
                            років у <br /> компанії
                          </p>
                        </div>
                        <div className="flex items-center pl-14">
                          <p className="pr-2 text-6xl font-bold text-activeRed">
                            150+
                          </p>
                          <p className="body-16">
                            успішних <br /> проектів
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*  Slide 6 */}
              <div className="relative slide">
                {/*  Component */}
                <div className="flex pt-12 pl-40 border-l border-middlegrey">
                  {/*  Profile Foto */}
                  <div className="relative ">
                    <img
                      loading="lazy"
                      className="w-[390px] h-[520px]"
                      src="./img/IMAGE1.webp"
                      alt=""
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-activeRed to-transparent"></div>
                    {/*  Link to profile */}
                    <a
                      className="absolute bottom-[-2.5rem] left-0 grid w-20 h-20 rounded-full place-content-center rotate-45 hover:rotate-0 transition-all bg-light"
                      href="#"
                    >
                      <img loading="lazy" src="./img/arrow black.svg" alt="" />
                    </a>
                  </div>
                  {/*  Information */}
                  <div className="pl-14 w-[640px]">
                    <div className="flex pb-8">
                      <div className="grid w-16 h-16 rounded-full place-content-center bg-light">
                        <img
                          loading="lazy"
                          className="w-5 h-5"
                          src="./img/qaters .svg"
                          alt=""
                        />
                      </div>
                      {/*  Name */}
                      <p className="pl-8 text-3xl">
                        Daniella
                        <br />
                        {/*  Job */}
                        <span className="body-16 text-darkgrey">
                          {" "}
                          Project manager{" "}
                        </span>
                      </p>
                    </div>
                    {/*  Description */}
                    <p className="body-p text-start pb-44">
                      The main advantage of social networks is the lack of
                      boundaries. Even if your target audience lives in Spain or
                      Sri Lanka, you can reach them on Facebook.
                    </p>
                    <div className="">
                      <p className="body-16">
                        Працює з John Deere, STVOL, Anabel Arto, Є-Гроші, Kimito
                      </p>
                      <div className="flex pt-4">
                        <div className="flex items-center">
                          <p className="pr-2 text-6xl font-bold text-activeRed">
                            6+
                          </p>
                          <p className="body-16">
                            років у <br /> компанії
                          </p>
                        </div>
                        <div className="flex items-center pl-14">
                          <p className="pr-2 text-6xl font-bold text-activeRed">
                            150+
                          </p>
                          <p className="body-16">
                            успішних <br /> проектів
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            {/*  The dots */}
            <div className="flex items-center justify-center space-x-5 pt-14">
              <div
                className="w-4 h-4 rounded-full cursor-pointer dot bg-activeRed"
                onClick={currentSlide(1)}
              ></div>
              <div
                className="w-4 h-4 bg-white rounded-full cursor-pointer dot"
                onClick={currentSlide(2)}
              ></div>
              <div
                className="w-4 h-4 bg-white rounded-full cursor-pointer dot"
                onClick={currentSlide(3)}
              ></div>
              <div
                className="w-4 h-4 bg-white rounded-full cursor-pointer dot"
                onClick={currentSlide(4)}
              ></div>
              <div
                className="w-4 h-4 bg-white rounded-full cursor-pointer dot"
                onClick={currentSlide(5)}
              ></div>
              <div
                className="w-4 h-4 bg-white rounded-full cursor-pointer dot"
                onClick={currentSlide(6)}
              ></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LetsDiscuss
