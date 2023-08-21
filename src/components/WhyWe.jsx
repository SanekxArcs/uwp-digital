import React from 'react'

const WhyWe = () => {
  return (
    <div>
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
                Ukrainian diligence. Through our expertise, attention to detail,
                and deep analytics, we find a solution for any business problem.
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
                  We know how to make customers remember you and increase brand
                  recognition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WhyWe
