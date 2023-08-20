
const Welcome = () => {
  // set the default active slide to the first one
  let slideIndex = 1;
  showSlide(slideIndex);

  // change slide with the prev/next button
  function moveSlide(moveStep) {
    showSlide((slideIndex += moveStep));
  }

  // change slide with the dots
  function currentSlide(n) {
    showSlide((slideIndex = n));
  }

  function showSlide(n) {
    let i;
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }

    // hide all slides
    for (i = 0; i < slides.length; i++) {
      slides[i].classList.add("hidden");
    }

    // remove active status from all dots
    for (i = 0; i < dots.length; i++) {
      dots[i].classList.remove("bg-activeRed");
      dots[i].classList.add("bg-white");
    }

    // show the active slide
    slides[slideIndex - 1].classList.remove("hidden");

    // highlight the active dot
    dots[slideIndex - 1].classList.remove("bg-white");
    dots[slideIndex - 1].classList.add("bg-activeRed");
  }

  // Wait for the page to finish loading
  window.addEventListener("load", function () {
    // Remove the 'hidden' class from the after-cookie div
    document.getElementById("after-cookie").classList.remove("hidden");

    // Add an event listener to the close button
    document
      .getElementById("close-after-cookie")
      .addEventListener("click", function () {
        // Hide the after-cookie div when the close button is clicked
        document.getElementById("after-cookie").classList.add("hidden");
      });

    // Wait for a short delay before adding the 'visible' class to trigger the pop up animation
    setTimeout(function () {
      document.getElementById("after-cookie").classList.add("visible");
    }, 500);
  });

  return (
    <>
      <header className="w-full text-white  phone:w-[320px] tablet:w-[760px] laptop:w-[1650px] mx-auto">
        <div className="h-[90px] flex flex-row items-center justify-between">
          {/*  LOGO & THEME*/}
          <div className="flex items-center gap-11">
            <a href="">
              <img
                className="h-10 ablet:h-12"
                src="./img/whitelogo.svg"
                alt="logo"
              />
            </a>
            <a className="transition-all group" href="">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="group-hover:stroke-main"
                  d="M8.64195 0.596191L8.64196 0.596188C9.17383 0.419053 9.43477 0.530154 9.49125 0.580176C9.50652 0.593701 9.51618 0.606276 9.51563 0.645062C9.51491 0.696961 9.49146 0.810553 9.37103 0.981583L9.37102 0.98159C7.93626 3.01927 7.37097 4.67504 7.37281 6.91965C7.37936 14.8933 16.4493 19.2952 22.798 14.4325L22.494 14.0356L22.798 14.4325C23.0445 14.2437 23.2304 14.1613 23.3487 14.1354C23.4061 14.1228 23.4361 14.1251 23.4488 14.1279C23.4582 14.1408 23.485 14.1868 23.4958 14.3021C23.5104 14.4584 23.489 14.6944 23.3958 15.0136C20.5793 24.654 7.85599 26.5776 2.38111 18.2059C-0.326425 14.0658 -0.0798655 8.21366 2.91788 4.59012C4.56619 2.59771 6.34274 1.36188 8.64195 0.596191ZM23.4564 14.1307C23.4563 14.1309 23.4546 14.1304 23.4519 14.1287C23.4552 14.1296 23.4566 14.1305 23.4564 14.1307Z"
                  stroke="white"
                />
              </svg>
            </a>
          </div>

          {/*  NAVIGATION */}
          <nav className="hidden tablet:inline-block">
            <ul className="flex flex-row gap-12 transition-all duration-300">
              <li className="hover:text-activeRed hover:underline hover:underline-offset-4 active:text-middlegrey active:underline-offset-4">
                <a href="#CASES"> CASES </a>
              </li>
              <li className="hover:text-activeRed hover:underline hover:underline-offset-4 active:text-middlegrey active:underline-offset-4">
                <a href="#SERVICES"> SERVICES </a>
                <div></div>
              </li>
              <li className="hover:text-activeRed hover:underline hover:underline-offset-4 active:text-middlegrey active:underline-offset-4">
                <a href="#ABOUTUS"> ABOUT US </a>
              </li>
              <li className="hover:text-activeRed hover:underline hover:underline-offset-4 active:text-middlegrey active:underline-offset-4">
                <a href="#BLOG"> BLOG </a>
              </li>
              <li className="hover:text-activeRed hover:underline hover:underline-offset-4 active:text-middlegrey active:underline-offset-4">
                <a href="#CONTACT">CONTACT</a>
              </li>
            </ul>
          </nav>

          {/*  CTA & LANG */}
          <div className="flex items-center gap-10">
            <a
              className="items-center gap-5 p-3 uppercase transition-all rounded-full tablet:flex tablet:px-6 tablet:py-3 group flex-nowrap bg-main hover:fill-dark active:bg-white active:border active:border-main active:text-main hover:bg-white hover:text-dark"
              href="#"
            >
              <span className="hidden tablet:inline-block">Let`s talk</span>
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="red"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="group-hover:fill-dark"
                  d="M1.65537 10.4941L0.690408 14.3267C0.65712 14.4668 0.658261 14.612 0.693748 14.7516C0.729234 14.8913 0.79817 15.0218 0.89552 15.1338C0.992869 15.2458 1.11617 15.3364 1.25642 15.3989C1.39667 15.4614 1.55033 15.4943 1.70616 15.4952C1.77877 15.5019 1.85193 15.5019 1.92454 15.4952L6.11451 14.6071L14.1593 7.23174L9.66964 3.10938L1.65537 10.4941Z"
                  fill="white"
                />
                <path
                  className="group-hover:fill-dark"
                  d="M16.689 3.53923L13.6925 0.781642C13.4955 0.601261 13.2289 0.5 12.951 0.5C12.6731 0.5 12.4065 0.601261 12.2095 0.781642L10.5437 2.31468L15.0282 6.44171L16.6941 4.90868C16.7916 4.81851 16.8688 4.71154 16.9213 4.59388C16.9738 4.47622 17.0006 4.35018 17.0001 4.22299C16.9996 4.09579 16.9719 3.96993 16.9185 3.8526C16.8651 3.73527 16.7871 3.62879 16.689 3.53923Z"
                  fill="white"
                />
              </svg>
            </a>
            <div className="hidden tablet:block">
              <a
                className="flex gap-3 peer/modal flex-nowrap hover:text-activeRed hover:underline-offset-4 active:text-middlegrey active:underline-offset-4"
                href="#"
              >
                <img className="w-6 h-6" src="./img/Eng.svg" alt="" />
                EN
              </a>
            </div>
          </div>

          {/*  Phone */}
          <div className="tablet:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </div>
      </header>

      <main className="overflow-hidden">
        {/*  HERO */}

        <section className="relative phone:w-[320px] tablet:w-[760px] laptop:w-[1650px] mx-auto text-center h-[406px] laptop:h-[700px] flex flex-col items-center">
          <h1 className="z-10 pt-12 text-4xl font-bold text-white uppercase laptop:pt-32 laptop:h1">
            Your reliable digital
            <br />
            marketing partner
          </h1>
          <p className=" z-10 body-16 pt-5 font-normal laptop:body-p laptop:w-[660px] laptop:pt-14 text-white">
            We are a full-service digital marketing agency focused on your
            success. We do not sell ideas. We sell a solution for your business
            needs.
          </p>

          {/*  blur */}
          <div
            style="background: radial-gradient(50% 50% at 50% 50%, #FF304D 0%, rgba(255, 48, 77, 0) 100%);"
            className="absolute top-10 -right-32 laptop:-right-96 tablet:h-[650px] laptop:top-30 tablet:w-[650px] w-60 h-60 blur-2xl"
          ></div>

          {/*  Form BTN */}
          <div className="">
            <a
              className=" transition-all duration-300 absolute flex flex-col gap-2 items-center justify-center laptop:font-bold h-32 w-32 laptop:h-44 laptop:w-44 hover:-bottom-[4rem] -bottom-16 laptop:-bottom-[5.5rem] hover:right-[31.5rem] right-0 laptop:right-[30rem] bg-main hover:w-32 hover:h-32  rounded-full text-white laptop:body body-16 font-normal"
              href="#"
            >
              <img src="./img/link arrov.svg" alt="" />
              Discuss the
              <br />
              project
            </a>
          </div>
        </section>

        {/*  Video */}
        <section className="">
          <img
            className="h-auto max-w-full"
            src="./img/hero.webp"
            alt="img with projects "
          />
        </section>

        <div className="bg-light">
          {/*  Welcome Text  */}
          <section className="pt-24 mx-auto  phone:w-[320px] tablet:w-[760px] laptop:w-[1650px]  ">
            <div className="grid grid-cols-1 border-t laptop:grid-cols-4 place-content-center border-middlegrey">
              <h2 className="pt-12 font-bold uppercase border-r body-p text-dark w-96 text-start border-middlegrey">
                Limitless is your new
                <br />
                rule in business
                <br />
                development
              </h2>
              <p className="laptop:col-span-3 laptop:pt-12 laptop:pl-40 laptop:body-p text-start">
                The digital world offers limitless possibilities for turning an
                idea into a successful business. We are a digital marketing
                agency that opens these opportunities to you. With the help of
                marketing tools and smart technologies, UWP.Digital connects
                customers with their favorite brands.
              </p>
            </div>
          </section>
          {/*  OUR CASES */}
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
                  conduct SEO optimization, develop a marketing strategy for
                  your business, set up Google ads, and Facebook ads, or get
                  more followers on Instagram - welcome to UWP Digital.
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
                          Gambling vs. Marketing: when advertising boosts
                          betting revenue
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
                          Gambling vs. Marketing: when advertising boosts
                          betting revenue
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

          {/*  Our Services */}
          <section
            id="SERVICES"
            className="pt-32 pb-32 mx-auto  phone:w-[320px] tablet:w-[760px] laptop:w-[1650px] "
          >
            <h2 className="border-b h2 pb-14 border-middlegrey">
              Our Services
            </h2>
            <div className="grid grid-cols-4 ">
              {/*  Side text */}
              <div className="relative h-full pr-12 row-span-full w-96">
                <p className="pt-12 body-16">
                  Our advantage is not in one-time contact with the customer,
                  but in complex interaction with him. It allows for attracting
                  attention and forming a trusting relationship between the
                  company and customers for a long time.
                </p>
                {/*  Side btn */}
                <a
                  className="sticky top-0 flex items-center gap-5 px-10 py-3 mt-10 font-bold text-white uppercase transition-all duration-300 rounded-full justify-items-center bg-main body-16 active:bg-activeRed hover:bg-lightred hover:py-6 hover:mt-8"
                  href="#"
                >
                  Order a consultation
                  <img loading="lazy" src="./img/link arrov.svg" alt="" />
                </a>
              </div>

              <div className="grid grid-cols-2 col-span-3 grid-rows-5 ">
                {/*  Component */}
                <div className="pt-16 pl-16 mr-16 border-l dorder-b border-middlegrey">
                  {/*  Articles 1 */}
                  <a href="#" className="group">
                    <div className="flex items-center rounded-full w-80 h-80 bg-middlegrey">
                      <img
                        loading="lazy"
                        className="scale-125"
                        src="./img/Image Branding.webp"
                        alt=""
                      />
                    </div>
                    {/*  NAME OF SERVICE */}
                    <h3 className="flex justify-between pb-5 border-b h4 border-middlegrey">
                      Branding
                      <div className="p-6 transition-all duration-300 rounded-full group-hover:bg-main">
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
                    </h3>
                    {/*  DESCRIPTION */}
                    <p className="pt-10 border-t body-16 border-middlegrey">
                      UWP Digital knows how to combine creativity and
                      effectiveness in one solution. We reveal the unique story
                      of your brand through graphic design, the tone of voice of
                      your brand, developing logos, corporate identity, and
                      creating a brand book for companies. The brand stories
                      start with UWP.Digital.
                    </p>
                  </a>
                </div>
                {/*  Component */}
                <div className="pt-40 pl-16 mr-16 border-l dorder-b border-middlegrey">
                  {/*  Articles 2 */}
                  <a href="#" className="group">
                    {/*  ARROW (absolute)*/}
                    <div className="flex items-center rounded-full w-80 h-80 bg-middlegrey">
                      <img
                        loading="lazy"
                        className="scale-125"
                        src="./img/Image Digital Marketing.webp"
                        alt=""
                      />
                    </div>
                    {/*  NAME OF SERVICE */}
                    <h3 className="flex justify-between pb-10 border-b h4 border-middlegrey">
                      Digital Marketing
                      <div className="p-6 transition-all duration-300 rounded-full group-hover:bg-main">
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
                    </h3>
                    {/*  DESCRIPTION */}
                    <p className="pt-10 border-t body-16 border-middlegrey">
                      Digital marketing is a complete immersion of your business
                      in the online space: from developing the most productive
                      digital strategy to creating influential creatives for
                      Facebook ads, ads on Instagram, LinkedIn ads, and
                      advertisement on Google. Digital marketing includes
                      marketing analysis, developing digital strategies,
                      copywriting, rewriting, and creating different types of
                      advertising: on social networks, contextual or banner ads.
                    </p>
                  </a>
                </div>
                {/*  Component */}
                <div className="pt-16 pl-16 mr-16 border-l dorder-b border-middlegrey">
                  {/*  Articles 3 */}
                  <a href="#" className="group">
                    {/*  ARROW (absolute)*/}
                    <div className="flex items-center rounded-full w-80 h-80 bg-middlegrey">
                      <img
                        loading="lazy"
                        className="scale-125"
                        src="./img/imageWeb-development.webp"
                        alt=""
                      />
                    </div>
                    {/*  NAME OF SERVICE */}
                    <h3 className="flex justify-between pb-10 border-b h4 border-middlegrey">
                      Web development
                      <div className="p-6 transition-all duration-300 rounded-full group-hover:bg-main">
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
                    </h3>
                    {/*  DESCRIPTION */}
                    <p className="pt-10 border-t body-16 border-middlegrey">
                      Websites are the business card of your company in the
                      digital world. What can we do for you? Make your own
                      website, build a website on WordPress and other
                      constructors, make web analytics, create and integrate
                      payment systems for e-commerce projects, and make a web
                      design.
                    </p>
                  </a>
                </div>
                {/*  Component */}
                <div className="pt-40 pl-16 mr-16 border-l dorder-b border-middlegrey">
                  {/*  Articles 4 */}
                  <a href="#" className="group">
                    {/*  ARROW (absolute)*/}
                    <div className="flex items-center rounded-full w-80 h-80 bg-middlegrey">
                      <img
                        loading="lazy"
                        className="scale-125"
                        src="./img/Image-Video-motion.webp"
                        alt=""
                      />
                    </div>
                    {/*  NAME OF SERVICE */}
                    <h3 className="flex justify-between pb-10 border-b h4 border-middlegrey">
                      Video motion
                      <div className="p-6 transition-all duration-300 rounded-full group-hover:bg-main">
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
                    </h3>
                    {/*  DESCRIPTION */}
                    <p className="pt-10 border-t body-16 border-middlegrey">
                      34% higher conversion rate for marketing campaigns with
                      video ads. Tempting? UWP.Digital turns an idea into a
                      finished product about your company. We create video
                      presentations, promos, commercials, motion videos, and
                      even youtube produced videos. It&apos;s easier to become
                      memorable with powerful effects.
                    </p>
                  </a>
                </div>

                {/*  Component */}
                <div className="pt-16 pl-16 mr-16 border-l dorder-b border-middlegrey">
                  {/*  Articles 5 */}
                  <a href="#" className="group">
                    {/*  ARROW (absolute)*/}
                    <div className="flex items-center rounded-full w-80 h-80 bg-middlegrey">
                      <img
                        loading="lazy"
                        className="scale-125"
                        src="./img/Image-SEO.webp"
                        alt=""
                      />
                    </div>
                    {/*  NAME OF SERVICE */}
                    <h3 className="flex justify-between pb-10 border-b h4 border-middlegrey">
                      SEO
                      <div className="p-6 transition-all duration-300 rounded-full group-hover:bg-main">
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
                    </h3>
                    {/*  DESCRIPTION */}
                    <p className="pt-10 border-t body-16 border-middlegrey">
                      There are millions of websites, but not all of them make
                      it to the top of Google searches. UWP.Digital knows the
                      secrets of search engine optimization and is ready to show
                      them to you. We offer technical SEO analysis, keyword
                      analysis, writing SEO texts, keyword optimization, and
                      link promotion. Internal and external SEO optimization of
                      your website in the complex. Become visible not only to
                      the Google system but also to online customers.
                    </p>
                  </a>
                </div>
                {/*  Component */}
                <div className="pt-40 pl-16 mr-16 border-l dorder-b border-middlegrey">
                  {/*  Articles 6 */}
                  <a href="#" className="group">
                    {/*  ARROW (absolute)*/}
                    <div className="flex items-center rounded-full w-80 h-80 bg-middlegrey">
                      <img
                        loading="lazy"
                        className="scale-125"
                        src="./img/Image Digital Marketing.webp"
                        alt=""
                      />
                    </div>
                    {/*  NAME OF SERVICE */}
                    <h3 className="flex justify-between pb-10 border-b h4 border-middlegrey">
                      Digital Marketing
                      <div className="p-6 transition-all duration-300 rounded-full group-hover:bg-main">
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
                    </h3>
                    {/*  DESCRIPTION */}
                    <p className="pt-10 border-t body-16 border-middlegrey">
                      Digital marketing is a complete immersion of your business
                      in the online space: from developing the most productive
                      digital strategy to creating influential creatives for
                      Facebook ads, ads on Instagram, LinkedIn ads, and
                      advertisement on Google. Digital marketing includes
                      marketing analysis, developing digital strategies,
                      copywriting, rewriting, and creating different types of
                      advertising: on social networks, contextual or banner ads.
                    </p>
                  </a>
                </div>
                {/*  Component */}
                <div className="pt-16 pl-16 mr-16 border-l dorder-b border-middlegrey">
                  {/*  Articles 7 */}
                  <a href="#" className="group">
                    {/*  ARROW (absolute)*/}
                    <div className="flex items-center rounded-full w-80 h-80 bg-middlegrey">
                      <img
                        loading="lazy"
                        className="scale-125"
                        src="./img/Image-SMM.webp"
                        alt=""
                      />
                    </div>
                    {/*  NAME OF SERVICE */}
                    <h3 className="flex justify-between pb-10 border-b h4 border-middlegrey">
                      SMM
                      <div className="p-6 transition-all duration-300 rounded-full group-hover:bg-main">
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
                    </h3>
                    {/*  DESCRIPTION */}
                    <p className="pt-10 border-t body-16 border-middlegrey">
                      Open a new sales channel for your business with the help
                      of SMM promotion. UWP.Digital provides a full range of
                      services in social networks: developing Social Media
                      Marketing strategy, creating and maintaining social
                      networks from scratch, developing a unified design and USP
                      for your social platforms, launching targeted advertising,
                      advertising on LinkedIn, and attracting traffic from
                      social networks to your website.
                    </p>
                  </a>
                </div>
                {/*  Component */}
                <div className="pt-40 pl-16 mr-16 border-l dorder-b border-middlegrey">
                  {/*  Articles 8 */}
                  <a href="#" className="group">
                    {/*  ARROW (absolute)*/}
                    <div className="flex items-center rounded-full w-80 h-80 bg-middlegrey">
                      <img
                        loading="lazy"
                        className="scale-125"
                        src="./img/Image Mobile Promotion.webp"
                        alt=""
                      />
                    </div>
                    {/*  NAME OF SERVICE */}
                    <h3 className="flex justify-between pb-10 border-b h4 border-middlegrey">
                      Mobile Promotion
                      <div className="p-6 transition-all duration-300 rounded-full group-hover:bg-main">
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
                    </h3>
                    {/*  DESCRIPTION */}
                    <p className="pt-10 border-t body-16 border-middlegrey">
                      Mobile promotion is a separate marketing instrument that
                      can increase your sales. UWP.Digital offers you mobile
                      video advertising, mobile media advertising, and promotion
                      of applications to the top of the App Store and Google
                      Play. We know how to attract users attention to your
                      product, finding them even while watching YouTube.
                    </p>
                  </a>
                </div>
                {/*  Component */}
                <div className="pt-16 pl-16 mr-16 border-l dorder-b border-middlegrey">
                  {/*  Articles 9 */}
                  <a href="#" className="group">
                    {/*  ARROW (absolute)*/}
                    <div className="flex items-center rounded-full w-80 h-80 bg-middlegrey">
                      <img
                        loading="lazy"
                        className="scale-125"
                        src="./img/Image-TikTok.webp"
                        alt=""
                      />
                    </div>
                    {/*  NAME OF SERVICE */}
                    <h3 className="flex justify-between pb-10 border-b h4 border-middlegrey">
                      TikTok
                      <div className="p-6 transition-all duration-300 rounded-full group-hover:bg-main">
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
                    </h3>
                    {/*  DESCRIPTION */}
                    <p className="pt-10 border-t body-16 border-middlegrey">
                      TikTok is a fairly new platform with a young audience. Can
                      a site with light content be used to promote a business?
                      Yes! UWP.Digital offers you promotion through ads and
                      video posting on TikTok. We know how to draw the attention
                      of a young audience to your product. Working with us, you
                      are not hiring an adsmanager, but an entire advertising
                      agency that works for your success.
                    </p>
                  </a>
                </div>
                {/*  Component */}
                <div className="pt-40 pl-16 mr-16 border-l dorder-b border-middlegrey">
                  {/*  Articles 10 */}
                  <a href="#" className="group">
                    {/*  ARROW (absolute)*/}
                    <div className="flex items-center rounded-full w-80 h-80 bg-middlegrey">
                      <img
                        loading="lazy"
                        className="scale-125"
                        src="./img/Image-PPC.webp"
                        alt=""
                      />
                    </div>
                    {/*  NAME OF SERVICE */}
                    <h3 className="flex justify-between pb-10 border-b h4 border-middlegrey">
                      PPC
                      <div className="p-6 transition-all duration-300 rounded-full group-hover:bg-main">
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
                    </h3>
                    {/*  DESCRIPTION */}
                    <p className="pt-10 border-t body-16 border-middlegrey">
                      PPC marketing attracts only targeted users who see the
                      ads, become interested in the product, click on the link
                      and go to the landing page. We know how to save
                      advertising budget on irrelevant traffic and attract the
                      maximum number of leads. We create and set up AdWords
                      advertising for different niches, and banner ad, optimize
                      the budget, increase conversion and attract only
                      high-quality leads.
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/*  LET'S DISCUSS */}
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
                        <img
                          loading="lazy"
                          src="./img/arrow black.svg"
                          alt=""
                        />
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
                        boundaries. Even if your target audience lives in Spain
                        or Sri Lanka, you can reach them on Facebook.
                      </p>
                      <div className="">
                        <p className="body-16">
                          Працює з John Deere, STVOL, Anabel Arto, Є-Гроші,
                          Kimito
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
                        <img
                          loading="lazy"
                          src="./img/arrow black.svg"
                          alt=""
                        />
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
                        boundaries. Even if your target audience lives in Spain
                        or Sri Lanka, you can reach them on Facebook.
                      </p>
                      <div className="">
                        <p className="body-16">
                          Працює з John Deere, STVOL, Anabel Arto, Є-Гроші,
                          Kimito
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
                        <img
                          loading="lazy"
                          src="./img/arrow black.svg"
                          alt=""
                        />
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
                        boundaries. Even if your target audience lives in Spain
                        or Sri Lanka, you can reach them on Facebook.
                      </p>
                      <div className="">
                        <p className="body-16">
                          Працює з John Deere, STVOL, Anabel Arto, Є-Гроші,
                          Kimito
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
                        <img
                          loading="lazy"
                          src="./img/arrow black.svg"
                          alt=""
                        />
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
                        boundaries. Even if your target audience lives in Spain
                        or Sri Lanka, you can reach them on Facebook.
                      </p>
                      <div className="">
                        <p className="body-16">
                          Працює з John Deere, STVOL, Anabel Arto, Є-Гроші,
                          Kimito
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
                        <img
                          loading="lazy"
                          src="./img/arrow black.svg"
                          alt=""
                        />
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
                        boundaries. Even if your target audience lives in Spain
                        or Sri Lanka, you can reach them on Facebook.
                      </p>
                      <div className="">
                        <p className="body-16">
                          Працює з John Deere, STVOL, Anabel Arto, Є-Гроші,
                          Kimito
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
                        <img
                          loading="lazy"
                          src="./img/arrow black.svg"
                          alt=""
                        />
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
                        boundaries. Even if your target audience lives in Spain
                        or Sri Lanka, you can reach them on Facebook.
                      </p>
                      <div className="">
                        <p className="body-16">
                          Працює з John Deere, STVOL, Anabel Arto, Є-Гроші,
                          Kimito
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

        {/*  BLOG */}
        <section
          id="BLOG"
          className="pb-20 mx-auto  phone:w-[320px] tablet:w-[760px] laptop:w-[1650px]  pt-36"
        >
          <div className="flex items-center justify-between w-full pb-10 text-white">
            <h2 className="h2">Read Blog</h2>
            <a href="#" className="flex items-center gap-2">
              <p className="font-bold body-p">Read all</p>
              <img
                loading="lazy"
                className="p-2 duration-300 border border-white rounded-full transitio hover:bg-main hover:border-main"
                src="/img/link arrov.svg"
                alt=""
              />
            </a>
          </div>
          {/*  ComponentS */}
          <div className="flex justify-between text-white">
            {/*  ! Component */}
            {/*  Link to blog post */}
            <a href="">
              <div className="flex flex-col ">
                {/*  Image blog post */}
                <img loading="lazy" src="./img/blog1.webp" alt="" />
                <div className="flex items-center gap-4 mt-6 text-sm">
                  {/*  Tag */}
                  <p className="px-3 py-2 rounded-full bg-grey">Business</p>
                  {/*  Post Date  */}
                  <p className="">24.08.2022</p>
                </div>
                {/*  Post Title  */}
                <h4 className="pt-4 body-p text-start">
                  Advertising for business
                </h4>
              </div>
            </a>
            {/*  ! Component 2 */}
            {/*  Link to blog post */}
            <a href="">
              <div className="flex flex-col ">
                {/*  Image blog post */}
                <img loading="lazy" src="./img/Rectangle 22 (1).webp" alt="" />
                <div className="flex items-center gap-4 mt-6 text-sm">
                  {/*  Tag */}
                  <p className="px-3 py-2 rounded-full bg-grey">Business</p>
                  {/*  Post Date  */}
                  <p className="">24.08.2022</p>
                </div>
                {/*  Post Title  */}
                <h4 className="pt-4 body-p text-start">
                  Social media advertising
                </h4>
              </div>
            </a>
            {/*  ! Component 3 */}
            {/*  Link to blog post */}
            <a href="">
              <div className="flex flex-col ">
                {/*  Image blog post */}
                <img loading="lazy" src="./img/blog2.webp" alt="" />
                <div className="flex items-center gap-4 mt-6 text-sm">
                  {/*  Tag */}
                  <p className="px-3 py-2 rounded-full bg-grey">Business</p>
                  {/*  Post Date  */}
                  <p className="">24.08.2022</p>
                </div>
                {/*  Post Title  */}
                <h4 className="pt-4 body-p text-start">Internet promotion</h4>
              </div>
            </a>
          </div>
        </section>

        {/*  WHY We */}
        <section className="relative pt-32 mx-auto  phone:w-[320px] tablet:w-[760px] laptop:w-[1650px]  pb-36">
          <div className="grid grid-cols-4 grid-rows-1 border-t border-middlegrey">
            {/*  side text */}
            <div className="h-full pr-12 row-span-full w-96">
              <a
                className="sticky top-0 flex items-center gap-5 px-10 py-3 mt-10 font-bold text-white uppercase transition-all duration-300 rounded-full justify-items-center bg-main body-16 active:bg-activeRed hover:bg-lightred hover:py-6 hover:mt-8"
                href="#"
              >
                Become a client
                <img loading="lazy" src="./img/link arrov.svg" alt="" />
              </a>
            </div>
            {/*  Content container */}
            <div className="col-span-3 text-white">
              {/*  Componetn  */}
              <div className="relative flex justify-end h-64 border-b border-l border-middlegrey">
                {/* Text absolute  */}
                <p className="absolute top-12 left-12 text-middlegrey body-16">
                  Why we are
                </p>

                <p className="pt-12 text-3xl text-start w-[950px]">
                  Our company is the quintessence of marketing talents and
                  Ukrainian diligence. Through our expertise, attention to
                  detail, and deep analytics, we find a solution for any
                  business problem.
                </p>
              </div>
              {/*  Grid 2 x 2 */}
              {/*  Item 1 */}
              <div className="grid grid-cols-2 grid-rows-2 border-l border-middlegrey">
                <div className="flex flex-col justify-start p-12 border-b border-middlegrey">
                  <p className="text-left body-p">
                    We help companies speak the language of the customer.
                  </p>
                  <p className="pt-4 font-medium body-16">
                    Thus, we do not rely on a one-time purchase, but attract and
                    retain customers for a long time.
                  </p>
                </div>
                {/*  Item 2 */}
                <div className="flex flex-col justify-start p-12 border-b border-l border-middlegrey">
                  <p className="text-left body-p">
                    We break the wall: transforming traditional marketing into
                    digital.
                  </p>
                  <p className="pt-4 font-medium body-16">
                    There are no boundaries in the digital world. And in your
                    ability too.
                  </p>
                </div>
                {/*  Item 3 */}
                <div className="flex flex-col justify-start p-12 border-l border-middlegrey">
                  <p className="text-left body-p">
                    We provide a full range of business promotion services:
                  </p>
                  <p className="pt-4 font-medium body-16">
                    from web development and conversion optimization to a/b
                    testing and developing marketing strategies. We know how to
                    create a website business or an entire web agency.
                  </p>
                </div>
                {/*  Item 4 */}
                <div className="flex flex-col justify-start p-12 border-l border-middlegrey">
                  <p className="text-left body-p">
                    We reveal the unique story of your brand.
                  </p>
                  <p className="pt-4 font-medium body-16">
                    We know how to make customers remember you and increase
                    brand recognition.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*  FAQ */}
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
                    project - from creating a unique name to developing a
                    website and integrating payment systems. We are your best
                    solution and trusted digital marketer if you need to promote
                    Instagram or design a website. You do not need to apply to
                    several marketing agencies to get the desired result. You
                    just need to come to us.
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
                    project - from creating a unique name to developing a
                    website and integrating payment systems. We are your best
                    solution and trusted digital marketer if you need to promote
                    Instagram or design a website. You do not need to apply to
                    several marketing agencies to get the desired result. You
                    just need to come to us.
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
                    project - from creating a unique name to developing a
                    website and integrating payment systems. We are your best
                    solution and trusted digital marketer if you need to promote
                    Instagram or design a website. You do not need to apply to
                    several marketing agencies to get the desired result. You
                    just need to come to us.
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
                      How can I find out what your project specialists are
                      doing?
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
                    project - from creating a unique name to developing a
                    website and integrating payment systems. We are your best
                    solution and trusted digital marketer if you need to promote
                    Instagram or design a website. You do not need to apply to
                    several marketing agencies to get the desired result. You
                    just need to come to us.
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
                    project - from creating a unique name to developing a
                    website and integrating payment systems. We are your best
                    solution and trusted digital marketer if you need to promote
                    Instagram or design a website. You do not need to apply to
                    several marketing agencies to get the desired result. You
                    just need to come to us.
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
                      When will I see the financial result of working on
                      promoting my business?
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
                    project - from creating a unique name to developing a
                    website and integrating payment systems. We are your best
                    solution and trusted digital marketer if you need to promote
                    Instagram or design a website. You do not need to apply to
                    several marketing agencies to get the desired result. You
                    just need to come to us.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/*  CTA */}
        <section className="relative pt-32 mx-auto text-white  phone:w-[320px] tablet:w-[760px] laptop:w-[1650px]  pb-36">
          <div className="blur-img"></div>

          <h2 className="pb-12 font-bold uppercase border-b text-7xl border-middlegrey">
            Let&apos;s promote your business
          </h2>
          <div className="grid grid-cols-5 grid-rows-1">
            {/*  side text */}
            <div className="pr-12 row-span-full w-96 ">
              <p className="pt-12 body-16 text-middlegrey w-80">
                GET A DETAILED AND COMPREHENSIVE COMMERCIAL PROPOSAL
              </p>
            </div>
            {/*  Form */}
            <div className="col-span-3 p-12">
              <div className="grid grid-cols-2 col-span-3 grid-rows-5 gap-5 gap-y-1 gap-x-5 p-14">
                {/*  Input Name */}
                <div className="relative">
                  <input
                    type="text"
                    className="peer block min-h-[auto] w-full border border-middlegrey rounded-full bg-transparent py-5 px-10 leading-[1.6] outline-none transition-all duration-200 easeLinear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="inputName"
                    placeholder="Your name?*"
                    required
                  />
                  <label
                    htmlFor="inputName"
                    className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate py-5 px-10 leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200 text-middlegrey"
                  >
                    Your name?*
                  </label>
                </div>

                {/*  Input Email */}
                <div className="relative">
                  <input
                    type="email"
                    className="peer block min-h-[auto] w-full border border-middlegrey rounded-full bg-transparent py-5 px-10 leading-[1.6] outline-none transition-all duration-200 easeLinear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="inputEmail"
                    placeholder="Your e-mail?*"
                    required
                  />
                  <label
                    htmlFor="inputEmail"
                    className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate py-5 px-10 leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200 text-middlegrey"
                  >
                    Your e-mail?*
                  </label>
                </div>

                {/*  Input Number */}
                <div className="relative">
                  <input
                    type="tel"
                    className="peer block min-h-[auto] w-full border border-middlegrey rounded-full bg-transparent py-5 px-10 leading-[1.6] outline-none transition-all duration-200 easeLinear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="inputNumber"
                    placeholder="Phone number*"
                    required
                  />
                  <label
                    htmlFor="inputNumber"
                    className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate py-5 px-10 leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200 text-middlegrey"
                  >
                    Phone number*
                  </label>
                </div>

                {/*  Input Company* */}
                <div className="relative">
                  <input
                    type="email"
                    className="peer block min-h-[auto] w-full border border-middlegrey rounded-full bg-transparent py-5 px-10 leading-[1.6] outline-none transition-all duration-200 easeLinear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="inputCompany"
                    placeholder="Company*"
                    required
                  />
                  <label
                    htmlFor="inputCompany"
                    className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate py-5 px-10 leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200 text-middlegrey"
                  >
                    Company*
                  </label>
                </div>

                {/*  Input Tell us about your project */}
                <div className="relative col-span-2 ">
                  <input
                    type="email"
                    className="peer block min-h-[auto] w-full border border-middlegrey rounded-full bg-transparent py-5 px-10 leading-[1.6] outline-none transition-all duration-200 easeLinear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="inputTell"
                    placeholder="Tell us about your project"
                    required
                  />
                  <label
                    htmlFor="inputTell"
                    className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate py-5 px-10 leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200 text-middlegrey"
                  >
                    Tell us about your project
                  </label>
                </div>

                {/*  Input file */}
                <div className="relative col-span-2">
                  {/*  Fake  */}
                  <div className="absolute top-0 left-0 flex items-center gap-5 p-2 cursor-none">
                    <div className="p-2 rounded-full bg-middlegrey">
                      <svg
                        className="text-mmiddlegrey"
                        width="20"
                        height="20"
                        viewBox="0 0 15 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.90636 19.4735C6.66579 20.7015 9.91241 19.4545 11.1382 16.6959L14.5421 9.05454C14.5643 9.00474 14.5646 8.94875 14.5451 8.89795C14.5256 8.84716 14.4879 8.8058 14.4381 8.78364L13.3571 8.30263C13.3078 8.2808 13.2518 8.2794 13.2014 8.29875C13.1511 8.3181 13.1104 8.35661 13.0884 8.40587L9.68448 16.0472C9.26213 16.9963 8.49464 17.7234 7.52531 18.0957C6.55598 18.468 5.4991 18.4416 4.55211 18.0185C3.603 17.5961 2.87592 16.8286 2.50443 15.8614C2.13212 14.8921 2.15931 13.8373 2.58165 12.8882L6.0499 5.0983L6.61173 3.83576C7.13706 2.65523 8.52333 2.12279 9.70385 2.64812C10.2751 2.90231 10.7121 3.36349 10.9364 3.94763C11.1608 4.53176 11.1449 5.1669 10.8907 5.73812L7.4498 13.4665C7.36165 13.6607 7.20548 13.8105 7.00654 13.8869L7.00442 13.8877C6.80547 13.9641 6.59127 13.9566 6.39793 13.8705C6.20167 13.7832 6.05394 13.6262 5.97753 13.4273C5.90193 13.2304 5.9087 13.0141 5.99474 12.8208L8.80811 6.50643C8.83027 6.45663 8.83062 6.40064 8.81111 6.34984C8.79161 6.29905 8.75386 6.25769 8.70406 6.23553L7.62314 5.75452C7.57379 5.73269 7.5178 5.73129 7.46743 5.75064C7.41706 5.76999 7.3764 5.8085 7.35435 5.85775L4.5439 12.1734C4.2845 12.7563 4.26841 13.4037 4.49683 13.9984C4.72525 14.5931 5.17348 15.0646 5.75349 15.3227C6.95744 15.8584 8.37041 15.3133 8.90698 14.1114L9.23988 13.3594L12.3457 6.38387C12.5573 5.91229 12.673 5.40342 12.6864 4.88675C12.6997 4.37008 12.6104 3.85591 12.4235 3.37404C12.0471 2.39413 11.3104 1.62062 10.3525 1.19436C9.3603 0.75457 8.28322 0.757816 7.34352 1.11874C6.40382 1.47967 5.6015 2.19827 5.1609 3.18838L1.12871 12.2416C0.536405 13.5766 0.496487 15.0661 1.0208 16.4312C1.54382 17.7993 2.57059 18.8791 3.90636 19.4735Z"
                          fill="#F8F8F8"
                        />
                      </svg>
                    </div>
                    <p className="text-sm text-middlegrey">Attach a file</p>
                  </div>
                  {/*  Real input */}
                  <label className="opacity-0">
                    <input
                      type="file"
                      className="text-sm text-grey-500 file:mr-5 file:py-2 file:px-6 file:rounded-full file:border-middlegrey file:border file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:cursor-pointer hover:file:bg-amber-50 hover:file:text-amber-700 "
                    />
                  </label>
                </div>

                <div className="flex items-center justify-between col-span-2">
                  <p className="text-sm text-middlegrey">
                    By clicking the &quot;Send&quot; button, you consent to the
                    <br /> processing of personal data.
                    <a
                      className="underline text-prototype underline-offset-1 hover:font-bold"
                      href=""
                    >
                      More details
                    </a>
                  </p>
                  <a
                    className="sticky flex justify-center gap-5 px-10 py-3 mt-10 font-bold text-white uppercase rounded-full top-12 body-16 bg-main active:bg-activeRed hover:bg-lightred"
                    href="#"
                  >
                    Discuss the project
                    <img loading="lazy" src="./img/link arrov.svg" alt="" />
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col pt-16 border-l border-middlegrey pl-11">
              <a
                className="body-16"
                href="https://goo.gl/maps/zhjwPWmqLJBoarJU9"
              >
                Onnekop Per Bings vag 13B, 242 98 Horby, Sweden
              </a>
              <a
                className="pt-10 text-3xl font-bold"
                href="mailto:info@uwp.digital"
              >
                info@uwp.digital
              </a>
              <p className="pt-4 body-16 text-middlegrey">Shoot us a message</p>
            </div>
          </div>
        </section>
      </main>

      {/*  FOOTER */}
      <div className="bg-white">
        <footer className="flex flex-col mx-auto  phone:w-[320px] tablet:w-[760px] laptop:w-[1650px] ">
          <div className="flex justify-between py-10 border-b border-middlegrey">
            <nav className="">
              <ul className="flex flex-wrap gap-16 uppercase body-p">
                <li className="hover:text-activeRed hover:underline hover:underline-offset-4 active:text-middlegrey active:underline-offset-4">
                  <a href="#CASES"> CASES </a>
                </li>
                <li className="hover:text-activeRed hover:underline hover:underline-offset-4 active:text-middlegrey active:underline-offset-4">
                  <a href="#SERVICES"> SERVICES </a>
                  <div></div>
                </li>
                <li className="hover:text-activeRed hover:underline hover:underline-offset-4 active:text-middlegrey active:underline-offset-4">
                  <a href="#ABOUTUS"> ABOUT US </a>
                </li>
                <li className="hover:text-activeRed hover:underline hover:underline-offset-4 active:text-middlegrey active:underline-offset-4">
                  <a href="#BLOG"> BLOG </a>
                </li>
                <li className="hover:text-activeRed hover:underline hover:underline-offset-4 active:text-middlegrey active:underline-offset-4">
                  <a href="#CONTACT">CONTACT</a>
                </li>
              </ul>
            </nav>
            <div className="flex gap-16">
              <a href="">
                <img loading="lazy" src="./img/insta.svg" alt="" />
              </a>
              <a href="">
                <img loading="lazy" src="./img/fb.svg" alt="" />
              </a>
              <a href="">
                <img loading="lazy" src="./img/linked in.svg" alt="" />
              </a>
              <a href="">
                <img loading="lazy" src="./img/upvo.webp" alt="" />
              </a>
            </div>
          </div>

          <div className="flex flex-wrap justify-between py-6 uppercase border-b body-16 border-middlegrey">
            <a href="">Branding</a>
            <a href="">DIGITAL MARKETING</a>
            <a href="">WEB design</a>
            <a href="">smm</a>
            <a href="">ppc</a>
            <a href="">tiktok</a>
            <a href="">VIDEO MOTION</a>
            <a href="">seo</a>
            <a href="">MOBILE PROMOTION</a>
          </div>
          <div className="flex justify-center gap-10 py-6 text-middlegrey">
            <p>© 2022 Unity World Platform. All rights reserved.</p>
            <a href="">Terms & Conditions</a>
            <a href="">Privacy Policy</a>
          </div>
        </footer>
      </div>

      {/*  COOKIE */}
      <div
        id="after-cookie"
        className="z-10 fixed flex hidden transition-all rounded-full h-24 bg-dark border border-white w-[490px] text-white bottom-5 right-5 justify-center items-center gap-10"
      >
        <div className="flex flex-col items-start">
          <p>THIS WEBSITE USES COOKIES.</p>
          <a
            className="font-bold text-white transition-all body hover:text-main"
            href=""
          >
            Learn more
          </a>
        </div>
        <a
          id="close-after-cookie"
          className="px-10 py-4 uppercase transition-all rounded-full bg-grey hover:bg-white hover:text-dark"
          href="#"
        >
          accept
        </a>
      </div>

      {/*  Modal window */}
      <section className="absolute top-0 left-0 hidden overflow-hidden peer-checked/modal:block">
        <div className="grid w-full h-full grid-cols-3 ">
          <div className="col-span-1 bg-main"></div>
          <div className="col-span-2 pt-24 bg-dark px-36">
            <h2 className="pb-8 text-6xl font-bold text-white uppercase">
              Låt oss diskutera projektet
            </h2>
            <p className="pb-12 body-p text-start text-middlegrey">
              Get a detailed and clear commercial proposal
            </p>
            <span className="text-sm text-middlegrey">I am interested in</span>
            <div className="flex gap-2 pt-5">
              <div className="p-2 bg-white border rounded-full border-middlegrey">
                <p className="text-sm text-dark">BRANDING</p>
              </div>
              <div className="px-4 py-2 border rounded-full border-middlegrey">
                <p className="text-sm text-white">DIGITAL MARKETING</p>
              </div>
              <div className="px-4 py-2 border rounded-full border-middlegrey">
                <p className="text-sm text-white">WEB design</p>
              </div>
              <div className="px-4 py-2 border rounded-full border-middlegrey">
                <p className="text-sm text-white">SMM</p>
              </div>
              <div className="px-4 py-2 border rounded-full border-middlegrey">
                <p className="text-sm text-white">SEO</p>
              </div>
            </div>
            {/*  inputs */}
            <div className="grid grid-cols-2 col-span-3 grid-rows-5 gap-5 gap-y-1 gap-x-5 py-14">
              {/*  Input Name */}
              <div className="relative">
                <input
                  type="text"
                  className="peer block min-h-[auto] w-full border border-middlegrey rounded-full bg-transparent py-5 px-10 leading-[1.6] outline-none transition-all duration-200 easeLinear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="inputName"
                  placeholder="Your name?*"
                  required
                />
                <label
                  htmlFor="inputName"
                  className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate py-5 px-10 leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200 text-middlegrey"
                >
                  Your name?*
                </label>
              </div>

              {/*  Input Email */}
              <div className="relative">
                <input
                  type="email"
                  className="peer block min-h-[auto] w-full border border-middlegrey rounded-full bg-transparent py-5 px-10 leading-[1.6] outline-none transition-all duration-200 easeLinear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="inputEmail"
                  placeholder="Your e-mail?*"
                  required
                />
                <label
                  htmlFor="inputEmail"
                  className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate py-5 px-10 leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200 text-middlegrey"
                >
                  Your e-mail?*
                </label>
              </div>

              {/*  Input Number */}
              <div className="relative">
                <input
                  type="tel"
                  className="peer block min-h-[auto] w-full border border-middlegrey rounded-full bg-transparent py-5 px-10 leading-[1.6] outline-none transition-all duration-200 easeLinear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="inputNumber"
                  placeholder="Phone number*"
                  required
                />
                <label
                  htmlFor="inputNumber"
                  className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate py-5 px-10 leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200 text-middlegrey"
                >
                  Phone number*
                </label>
              </div>

              {/*  Input Company* */}
              <div className="relative">
                <input
                  type="email"
                  className="peer block min-h-[auto] w-full border border-middlegrey rounded-full bg-transparent py-5 px-10 leading-[1.6] outline-none transition-all duration-200 easeLinear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="inputCompany"
                  placeholder="Company*"
                  required
                />
                <label
                  htmlFor="inputCompany"
                  className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate py-5 px-10 leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200 text-middlegrey"
                >
                  Company*
                </label>
              </div>

              {/*  Input Tell us about your project */}
              <div className="relative col-span-2 ">
                <input
                  type="email"
                  className="peer block min-h-[auto] w-full border border-middlegrey rounded-full bg-transparent py-5 px-10 leading-[1.6] outline-none transition-all duration-200 easeLinear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="inputTell"
                  placeholder="Tell us about your project"
                  required
                />
                <label
                  htmlFor="inputTell"
                  className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate py-5 px-10 leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200 text-middlegrey"
                >
                  Tell us about your project
                </label>
              </div>

              {/*  Input file */}
              <div className="relative col-span-2">
                {/*  Fake  */}
                <div className="absolute top-0 left-0 flex items-center gap-5 p-2 cursor-none">
                  <div className="p-2 rounded-full bg-middlegrey">
                    <svg
                      className="text-mmiddlegrey"
                      width="20"
                      height="20"
                      viewBox="0 0 15 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.90636 19.4735C6.66579 20.7015 9.91241 19.4545 11.1382 16.6959L14.5421 9.05454C14.5643 9.00474 14.5646 8.94875 14.5451 8.89795C14.5256 8.84716 14.4879 8.8058 14.4381 8.78364L13.3571 8.30263C13.3078 8.2808 13.2518 8.2794 13.2014 8.29875C13.1511 8.3181 13.1104 8.35661 13.0884 8.40587L9.68448 16.0472C9.26213 16.9963 8.49464 17.7234 7.52531 18.0957C6.55598 18.468 5.4991 18.4416 4.55211 18.0185C3.603 17.5961 2.87592 16.8286 2.50443 15.8614C2.13212 14.8921 2.15931 13.8373 2.58165 12.8882L6.0499 5.0983L6.61173 3.83576C7.13706 2.65523 8.52333 2.12279 9.70385 2.64812C10.2751 2.90231 10.7121 3.36349 10.9364 3.94763C11.1608 4.53176 11.1449 5.1669 10.8907 5.73812L7.4498 13.4665C7.36165 13.6607 7.20548 13.8105 7.00654 13.8869L7.00442 13.8877C6.80547 13.9641 6.59127 13.9566 6.39793 13.8705C6.20167 13.7832 6.05394 13.6262 5.97753 13.4273C5.90193 13.2304 5.9087 13.0141 5.99474 12.8208L8.80811 6.50643C8.83027 6.45663 8.83062 6.40064 8.81111 6.34984C8.79161 6.29905 8.75386 6.25769 8.70406 6.23553L7.62314 5.75452C7.57379 5.73269 7.5178 5.73129 7.46743 5.75064C7.41706 5.76999 7.3764 5.8085 7.35435 5.85775L4.5439 12.1734C4.2845 12.7563 4.26841 13.4037 4.49683 13.9984C4.72525 14.5931 5.17348 15.0646 5.75349 15.3227C6.95744 15.8584 8.37041 15.3133 8.90698 14.1114L9.23988 13.3594L12.3457 6.38387C12.5573 5.91229 12.673 5.40342 12.6864 4.88675C12.6997 4.37008 12.6104 3.85591 12.4235 3.37404C12.0471 2.39413 11.3104 1.62062 10.3525 1.19436C9.3603 0.75457 8.28322 0.757816 7.34352 1.11874C6.40382 1.47967 5.6015 2.19827 5.1609 3.18838L1.12871 12.2416C0.536405 13.5766 0.496487 15.0661 1.0208 16.4312C1.54382 17.7993 2.57059 18.8791 3.90636 19.4735Z"
                        fill="#F8F8F8"
                      />
                    </svg>
                  </div>
                  <p className="text-sm text-middlegrey">Attach a file</p>
                </div>
                {/*  Real input */}
                <label className="opacity-0">
                  <input
                    type="file"
                    className="text-sm text-grey-500 file:mr-5 file:py-2 file:px-6 file:rounded-full file:border-middlegrey file:border file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:cursor-pointer hover:file:bg-amber-50 hover:file:text-amber-700 "
                  />
                </label>
              </div>

              <div className="flex items-center justify-between col-span-2">
                <p className="text-sm text-middlegrey">
                  By clicking the &quot;Send&quot; button, you consent to the <br />{" "}
                  processing of personal data.
                  <a
                    className="underline text-prototype underline-offset-1 hover:font-bold"
                    href=""
                  >
                    More details
                  </a>
                </p>
                <a
                  className="sticky flex justify-center gap-5 px-10 py-3 mt-10 font-bold text-white uppercase rounded-full top-12 body-16 bg-main active:bg-activeRed hover:bg-lightred"
                  href="Sent.html"
                >
                  Skicka
                  <img loading="lazy" src="./img/link arrov.svg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Welcome;
