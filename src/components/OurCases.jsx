import React from 'react'

const OurCases = () => {
  return (
    <>
      <section
        id="CASES"
        className="relative pt-32 mx-auto  phone:w-[320px] tablet:w-[760px] laptop:w-[1650px] "
      >
        <h2 className="border-b h2 pb-14 border-middlegrey">Our Cases</h2>
        <div className="grid grid-cols-1 laptop:grid-cols-4 laptop:grid-rows-6 ">
          {/*  side text */}
          <div className="pr-12 row-span-full w-96">
            <p className="pt-12 body-16">
              Whether you need to create a website, develop a UX UI design,
              conduct SEO optimization, develop a marketing strategy for your
              business, set up Google ads, and Facebook ads, or get more
              followers on Instagram - welcome to UWP Digital.
            </p>
            <a
              className="sticky top-0 flex items-center gap-5 px-10 py-3 mt-10 font-bold text-white uppercase transition-all duration-300 rounded-full justify-items-center bg-main body-16 active:bg-activeRed hover:bg-lightred hover:py-6 hover:mt-8"
              href="#"
            >
              All Cases
              <img loading="lazy" src="./img/link arrov.svg" alt="" />
            </a>
          </div>

          {/*  Component */}
          <div className="transition-all laptop:col-span-3 ">
            {/*  Article 1 */}
            <a href="#">
              <div className="grid grid-cols-1 border-b laptop:grid-cols-2 group border-middlegrey">
                {/*  Text */}
                <div className="w-full relative pt-12 pl-12 h-[590px] border-l border-middlegrey">
                  {/*  Arrow (absolute)*/}
                  <div className="absolute p-6 transition-all duration-300 rounded-full top-6 right-6 group-hover:bg-main">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className=" group-hover:fill-light"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15.8545 3.6H2.20003V0H22V19.8H18.4V6.14559L3.47283 21.0728L0.927246 18.5272L15.8545 3.6Z"
                        fill="black"
                      />
                    </svg>
                  </div>

                  <div className="w-[450px]">
                    {/*   Article Name*/}
                    <h3 className="pb-3 transition-all duration-300 border-b-4 border-white h3 group-hover:border-main ">
                      Gambling vs. Marketing: when advertising boosts betting
                      revenue
                    </h3>
                    {/*  Article Text */}
                    <p className="pt-8 body-16">
                      Establishing a Next-Level Geosocial Networking App
                      Establishing a Next-Level Geosocial Networking
                      AppEstablishing a Next-Level Geosocial Networking App
                    </p>
                  </div>
                  {/*  Tags */}
                  <p className="absolute uppercase bottom-12 left-12">
                    marketing strategy, design
                  </p>
                </div>
                {/*  Image with text */}
                <div className="relative border-l border-middlegrey ">
                  {/*  Image */}
                  <img
                    loading="lazy"
                    className="pt-12 pb-12 pl-12 after:bg-gradient-to-r after:from-black after:to-transparent"
                    src="./img/Иконки кейсов_Монтажная область 1 копия 6 (5).webp"
                    alt=""
                  />
                  <div className="absolute inset-12 bg-gradient-to-r from-black to-transparent"></div>
                  {/*  Text on top */}
                  <div className="absolute z-10 w-full h-full top-12 left-12">
                    <div className="flex items-center pt-6 pl-6 text-white">
                      <p className="pr-4 text-6xl font-bold">7X</p>
                      <p className="text-xl">
                        cost of attracting <br />a customer
                      </p>
                    </div>
                    <div className="pl-6 text-white pt-7">
                      <p className="text-xl">
                        CR
                        <span className="pl-4 pr-4 text-6xl font-bold">
                          30%
                        </span>
                        <br />
                        <span className="pt-4">audience</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>

          {/*  Component */}
          <div className="col-span-3 transition-all ">
            {/*  Article 2 */}
            <a href="#">
              <div className="grid grid-cols-2 border-b group border-middlegrey">
                {/*  Text */}
                <div className="w-full relative pt-12 pl-12 h-[590px] border-l border-middlegrey">
                  {/*  Arrow (absolute)*/}
                  <div className="absolute p-6 transition-all duration-300 rounded-full top-6 right-6 group-hover:bg-main">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className=" group-hover:fill-light"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15.8545 3.6H2.20003V0H22V19.8H18.4V6.14559L3.47283 21.0728L0.927246 18.5272L15.8545 3.6Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                  <div className="w-[450px]">
                    {/*   Article Name*/}
                    <h3 className="pb-3 transition-all duration-300 border-b-4 border-white h3 group-hover:border-main ">
                      INGRAD: Advertising campaign for mobile games
                    </h3>
                    {/*  Article Text */}
                    <p className="pt-8 body-16">
                      Establishing a Next-Level Geosocial Networking App
                      Establishing a Next-Level Geosocial Networking
                      AppEstablishing a Next-Level Geosocial Networking App
                    </p>
                  </div>
                  {/*  Tags */}
                  <p className="absolute uppercase bottom-12 left-12">
                    marketing strategy, design
                  </p>
                </div>
                {/*  Image with text */}
                <div className="relative row-start-1 border-l border-middlegrey">
                  {/*  Image */}
                  <img
                    loading="lazy"
                    className="pt-12 pb-12 pl-12 after:bg-gradient-to-r after:from-black after:to-transparent"
                    src="./img/Иконки кейсов_Монтажная область 1 копия 6 (1).webp"
                    alt=""
                  />
                  <div className="absolute inset-12 bg-gradient-to-r from-black to-transparent"></div>
                  {/*  Text on top */}
                  <div className="absolute z-10 w-full h-full top-12 left-12">
                    <div className="flex items-center pt-6 pl-6 text-white">
                      <p className="pr-4 text-6xl font-bold">7X</p>
                      <p className="text-xl">
                        cost of attracting <br />a customer
                      </p>
                    </div>
                    <div className="pl-6 text-white pt-7">
                      <p className="text-xl">
                        CR
                        <span className="pl-4 pr-4 text-6xl font-bold">
                          30%
                        </span>
                        <br />
                        <span className="pt-4">audience</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>

          {/*  Component */}
          <div className="col-span-3 transition-all ">
            {/*  Article 3 */}
            <a href="#">
              <div className="grid grid-cols-2 border-b group border-middlegrey">
                {/*  Text */}
                <div className="w-full relative pt-12 pl-12 h-[590px] border-l border-middlegrey">
                  {/*  Arrow (absolute)*/}
                  <div className="absolute p-6 transition-all duration-300 rounded-full top-6 right-6 group-hover:bg-main">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className=" group-hover:fill-light"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15.8545 3.6H2.20003V0H22V19.8H18.4V6.14559L3.47283 21.0728L0.927246 18.5272L15.8545 3.6Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                  <div className="w-[450px]">
                    {/*   Article Name*/}
                    <h3 className="pb-3 transition-all duration-300 border-b-4 border-white h3 group-hover:border-main ">
                      Gambling vs. Marketing: when advertising boosts betting
                      revenue
                    </h3>
                    {/*  Article Text */}
                    <p className="pt-8 body-16">
                      Establishing a Next-Level Geosocial Networking App
                      Establishing a Next-Level Geosocial Networking
                      AppEstablishing a Next-Level Geosocial Networking App
                    </p>
                  </div>
                  {/*  Tags */}
                  <p className="absolute uppercase bottom-12 left-12">
                    marketing strategy, design
                  </p>
                </div>
                {/*  Image with text */}
                <div className="relative border-l border-middlegrey ">
                  {/*  Image */}
                  <img
                    loading="lazy"
                    className="pt-12 pb-12 pl-12 after:bg-gradient-to-r after:from-black after:to-transparent"
                    src="./img/Иконки кейсов_Монтажная область 1 копия 6 (2).webp"
                    alt=""
                  />
                  <div className="absolute inset-12 bg-gradient-to-r from-black to-transparent"></div>
                  {/*  Text on top */}
                  <div className="absolute z-10 w-full h-full top-12 left-12">
                    <div className="flex items-center pt-6 pl-6 text-white">
                      <p className="pr-4 text-6xl font-bold">7X</p>
                      <p className="text-xl">
                        cost of attracting <br />a customer
                      </p>
                    </div>
                    <div className="pl-6 text-white pt-7">
                      <p className="text-xl">
                        CR
                        <span className="pl-4 pr-4 text-6xl font-bold">
                          30%
                        </span>
                        <br />
                        <span className="pt-4">audience</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>

          {/*  Component */}
          <div className="col-span-3 transition-all ">
            {/*  Article 4 */}
            <a href="#">
              <div className="grid grid-cols-2 border-b group border-middlegrey">
                {/*  Text */}
                <div className="w-full relative pt-12 pl-12 h-[590px] border-l border-middlegrey">
                  {/*  Arrow (absolute)*/}
                  <div className="absolute p-6 transition-all duration-300 rounded-full top-6 right-6 group-hover:bg-main">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className=" group-hover:fill-light"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15.8545 3.6H2.20003V0H22V19.8H18.4V6.14559L3.47283 21.0728L0.927246 18.5272L15.8545 3.6Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                  <div className="w-[450px]">
                    {/*   Article Name*/}
                    <h3 className="pb-3 transition-all duration-300 border-b-4 border-white h3 group-hover:border-main ">
                      BEATYSTORY: easy sales with minimum effort
                    </h3>
                    {/*  Article Text */}
                    <p className="pt-8 body-16">
                      Establishing a Next-Level Geosocial Networking App
                      Establishing a Next-Level Geosocial Networking
                      AppEstablishing a Next-Level Geosocial Networking App
                    </p>
                  </div>
                  {/*  Tags */}
                  <p className="absolute uppercase bottom-12 left-12">
                    marketing strategy, design
                  </p>
                </div>
                {/*  Image with text */}
                <div className="relative row-start-1 border-l border-middlegrey">
                  {/*  Image */}
                  <img
                    loading="lazy"
                    className="pt-12 pb-12 pl-12 after:bg-gradient-to-r after:from-black after:to-transparent"
                    src="./img/Иконки кейсов_Монтажная область 1 копия 6 (3).webp"
                    alt=""
                  />
                  <div className="absolute inset-12 bg-gradient-to-r from-black to-transparent"></div>
                  {/*  Text on top */}
                  <div className="absolute z-10 w-full h-full top-12 left-12">
                    <div className="flex items-center pt-6 pl-6 text-white">
                      <p className="pr-4 text-6xl font-bold">7X</p>
                      <p className="text-xl">
                        cost of attracting <br />a customer
                      </p>
                    </div>
                    <div className="pl-6 text-white pt-7">
                      <p className="text-xl">
                        CR
                        <span className="pl-4 pr-4 text-6xl font-bold">
                          30%
                        </span>
                        <br />
                        <span className="pt-4">audience</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>

          {/*  Component */}
          <div className="col-span-3 transition-all ">
            {/*  Article 5 */}
            <a href="#">
              <div className="grid grid-cols-2 border-b group border-middlegrey">
                {/*  Text */}
                <div className="w-full relative pt-12 pl-12 h-[590px] border-l border-middlegrey">
                  {/*  Arrow (absolute)*/}
                  <div className="absolute p-6 transition-all duration-300 rounded-full top-6 right-6 group-hover:bg-main">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className=" group-hover:fill-light"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15.8545 3.6H2.20003V0H22V19.8H18.4V6.14559L3.47283 21.0728L0.927246 18.5272L15.8545 3.6Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                  <div className="w-[450px]">
                    {/*   Article Name*/}
                    <h3 className="pb-3 transition-all duration-300 border-b-4 border-white h3 group-hover:border-main ">
                      HR agency: full range of marketing services to get
                      international
                    </h3>
                    {/*  Article Text */}
                    <p className="pt-8 body-16">
                      Establishing a Next-Level Geosocial Networking App
                      Establishing a Next-Level Geosocial Networking
                      AppEstablishing a Next-Level Geosocial Networking App
                    </p>
                  </div>
                  {/*  Tags */}
                  <p className="absolute uppercase bottom-12 left-12">
                    marketing strategy, design
                  </p>
                </div>
                {/*  Image with text */}
                <div className="relative border-l border-middlegrey ">
                  {/*  Image */}
                  <img
                    loading="lazy"
                    className="pt-12 pb-12 pl-12 after:bg-gradient-to-r after:from-black after:to-transparent"
                    src="./img/Иконки кейсов_Монтажная область 1 копия 6 (4).webp"
                    alt=""
                  />
                  <div className="absolute inset-12 bg-gradient-to-r from-black to-transparent"></div>
                  {/*  Text on top */}
                  <div className="absolute z-10 w-full h-full top-12 left-12">
                    <div className="flex items-center pt-6 pl-6 text-white">
                      <p className="pr-4 text-6xl font-bold">7X</p>
                      <p className="text-xl">
                        cost of attracting <br />a customer
                      </p>
                    </div>
                    <div className="pl-6 text-white pt-7">
                      <p className="text-xl">
                        CR
                        <span className="pl-4 pr-4 text-6xl font-bold">
                          30%
                        </span>
                        <br />
                        <span className="pt-4">audience</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>

          {/*  Component */}
          <div className="col-span-3 transition-all ">
            {/*  Article 6 */}
            <a href="#">
              <div className="grid grid-cols-2 group">
                {/*  Text */}
                <div className="w-full relative pt-12 pl-12 h-[590px] border-l border-middlegrey">
                  {/*  Arrow (absolute)*/}
                  <div className="absolute p-6 transition-all duration-300 rounded-full top-6 right-6 group-hover:bg-main">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className=" group-hover:fill-light"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15.8545 3.6H2.20003V0H22V19.8H18.4V6.14559L3.47283 21.0728L0.927246 18.5272L15.8545 3.6Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                  <div className="w-[450px]">
                    {/*   Article Name*/}
                    <h3 className="pb-3 transition-all duration-300 border-b-4 border-white h3 group-hover:border-main ">
                      HR agency: full range of marketing services to get
                      international
                    </h3>
                    {/*  Article Text */}
                    <p className="pt-8 body-16">
                      Establishing a Next-Level Geosocial Networking App
                      Establishing a Next-Level Geosocial Networking
                      AppEstablishing a Next-Level Geosocial Networking App
                    </p>
                  </div>
                  {/*  Tags */}
                  <p className="absolute uppercase bottom-12 left-12">
                    marketing strategy, design
                  </p>
                </div>
                {/*  Image with text */}
                <div className="relative row-start-1 border-l border-middlegrey">
                  {/*  Image */}
                  <img
                    loading="lazy"
                    className="pt-12 pb-12 pl-12 after:bg-gradient-to-r after:from-black after:to-transparent"
                    src="./img/Иконки кейсов_Монтажная область 1 копия 6 (1).webp"
                    alt=""
                  />
                  <div className="absolute inset-12 bg-gradient-to-r from-black to-transparent"></div>
                  {/*  Text on top */}
                  <div className="absolute z-10 w-full h-full top-12 left-12">
                    <div className="flex items-center pt-6 pl-6 text-white">
                      <p className="pr-4 text-6xl font-bold">7X</p>
                      <p className="text-xl">
                        cost of attracting <br />a customer
                      </p>
                    </div>
                    <div className="pl-6 text-white pt-7">
                      <p className="text-xl">
                        CR
                        <span className="pl-4 pr-4 text-6xl font-bold">
                          30%
                        </span>
                        <br />
                        <span className="pt-4">audience</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default OurCases
