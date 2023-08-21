import React from 'react'

const OurServices = () => {
  return (
    <>
      <section
        id="SERVICES"
        className="pt-32 pb-32 mx-auto  phone:w-[320px] tablet:w-[760px] laptop:w-[1650px] "
      >
        <h2 className="border-b h2 pb-14 border-middlegrey">Our Services</h2>
        <div className="grid grid-cols-4 ">
          {/*  Side text */}
          <div className="relative h-full pr-12 row-span-full w-96">
            <p className="pt-12 body-16">
              Our advantage is not in one-time contact with the customer, but in
              complex interaction with him. It allows for attracting attention
              and forming a trusting relationship between the company and
              customers for a long time.
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
                  UWP Digital knows how to combine creativity and effectiveness
                  in one solution. We reveal the unique story of your brand
                  through graphic design, the tone of voice of your brand,
                  developing logos, corporate identity, and creating a brand
                  book for companies. The brand stories start with UWP.Digital.
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
                  Digital marketing is a complete immersion of your business in
                  the online space: from developing the most productive digital
                  strategy to creating influential creatives for Facebook ads,
                  ads on Instagram, LinkedIn ads, and advertisement on Google.
                  Digital marketing includes marketing analysis, developing
                  digital strategies, copywriting, rewriting, and creating
                  different types of advertising: on social networks, contextual
                  or banner ads.
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
                  Websites are the business card of your company in the digital
                  world. What can we do for you? Make your own website, build a
                  website on WordPress and other constructors, make web
                  analytics, create and integrate payment systems for e-commerce
                  projects, and make a web design.
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
                  34% higher conversion rate for marketing campaigns with video
                  ads. Tempting? UWP.Digital turns an idea into a finished
                  product about your company. We create video presentations,
                  promos, commercials, motion videos, and even youtube produced
                  videos. It&apos;s easier to become memorable with powerful
                  effects.
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
                  There are millions of websites, but not all of them make it to
                  the top of Google searches. UWP.Digital knows the secrets of
                  search engine optimization and is ready to show them to you.
                  We offer technical SEO analysis, keyword analysis, writing SEO
                  texts, keyword optimization, and link promotion. Internal and
                  external SEO optimization of your website in the complex.
                  Become visible not only to the Google system but also to
                  online customers.
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
                  Digital marketing is a complete immersion of your business in
                  the online space: from developing the most productive digital
                  strategy to creating influential creatives for Facebook ads,
                  ads on Instagram, LinkedIn ads, and advertisement on Google.
                  Digital marketing includes marketing analysis, developing
                  digital strategies, copywriting, rewriting, and creating
                  different types of advertising: on social networks, contextual
                  or banner ads.
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
                  Open a new sales channel for your business with the help of
                  SMM promotion. UWP.Digital provides a full range of services
                  in social networks: developing Social Media Marketing
                  strategy, creating and maintaining social networks from
                  scratch, developing a unified design and USP for your social
                  platforms, launching targeted advertising, advertising on
                  LinkedIn, and attracting traffic from social networks to your
                  website.
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
                  Mobile promotion is a separate marketing instrument that can
                  increase your sales. UWP.Digital offers you mobile video
                  advertising, mobile media advertising, and promotion of
                  applications to the top of the App Store and Google Play. We
                  know how to attract users attention to your product, finding
                  them even while watching YouTube.
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
                  TikTok is a fairly new platform with a young audience. Can a
                  site with light content be used to promote a business? Yes!
                  UWP.Digital offers you promotion through ads and video posting
                  on TikTok. We know how to draw the attention of a young
                  audience to your product. Working with us, you are not hiring
                  an adsmanager, but an entire advertising agency that works for
                  your success.
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
                  PPC marketing attracts only targeted users who see the ads,
                  become interested in the product, click on the link and go to
                  the landing page. We know how to save advertising budget on
                  irrelevant traffic and attract the maximum number of leads. We
                  create and set up AdWords advertising for different niches,
                  and banner ad, optimize the budget, increase conversion and
                  attract only high-quality leads.
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OurServices
