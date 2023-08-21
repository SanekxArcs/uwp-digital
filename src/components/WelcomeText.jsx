import React from 'react'

const WelcomeText = () => {
  return (
    <>
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
            The digital world offers limitless possibilities for turning an idea
            into a successful business. We are a digital marketing agency that
            opens these opportunities to you. With the help of marketing tools
            and smart technologies, UWP.Digital connects customers with their
            favorite brands.
          </p>
        </div>
      </section>
    </>
  );
}

export default WelcomeText
