
const Hero = () => {
  return (
    <section className="container relative flex flex-col items-center text-center h-[38rem]">
      <h1 className="z-10 pt-24 font-bold text-white uppercase text-8xl">
        Your reliable digital
        <br />
        marketing partner
      </h1>
      <p className="z-10 text-2xl font-light text-white pt-14 w-144">
        We are a full-service digital marketing agency focused on your success.
        We do not sell ideas. We sell a solution for your business needs.
      </p>

      <div
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, #FF304D 0%, rgba(255, 48, 77, 0) 100%)",
        }}
        className="absolute top-8 -right-[15rem]  w-[30rem] h-[30rem] blur-2xl"
      ></div>

      {/* Form BTN */}
      <div className="absolute right-0 w-32 h-32 -bottom-16">
        <a
          className="flex flex-col items-center justify-center w-32 h-32 gap-2 font-normal text-white transition-all duration-300 rounded-full -bottom-16 bg-main"
          href="#"
        >
          <img src="./img/link_arrow.svg" alt="" />
          Discuss the
          <br />
          project
        </a>
      </div>
    </section>
  );
};

export default Hero;
