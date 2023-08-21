/* eslint-disable react/prop-types */
const CallToAction = () => {
  const InputField = ({ id, label, placeholder, type }) => {
    return (
      <div className="relative">
        <input
          type={type}
          className="peer block min-h-[auto] w-full border border-middlegrey rounded-full bg-transparent py-5 px-10 leading-[1.6] outline-none transition-all duration-200 easeLinear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
          id={id}
          placeholder={placeholder}
          required
        />
        <label
          htmlFor={id}
          className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate py-5 px-10 leading-[1.6]  transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200 text-middlegrey"
        >
          {label}
        </label>
      </div>
    );
  };

  const ActionButton = ({ href, text, icon }) => {
    return (
      <a
        className="sticky flex justify-center gap-5 px-10 py-3 mt-10 font-bold text-white uppercase rounded-full top-12 body-16 bg-main active:bg-activeRed hover:bg-lightred"
        href={href}
      >
        {text}
        {icon && <img loading="lazy" src={icon} alt="" />}
      </a>
    );
  };

  return (
    <section className="relative pt-32 mx-auto text-white  phone:w-[320px] tablet:w-[760px] laptop:w-[1650px]  pb-36">
      <div className="blur-img"></div>

      <h2 className="pb-12 font-bold uppercase border-b text-7xl border-middlegrey">
        Let&apos;s promote your business
      </h2>
      <div className="grid grid-cols-5 grid-rows-1">
        <div className="pr-12 row-span-full w-96">
          <p className="pt-12 body-16 text-middlegrey w-80">
            GET A DETAILED AND COMPREHENSIVE COMMERCIAL PROPOSAL
          </p>
        </div>
        <div className="col-span-3 p-12">
          <div className="grid grid-cols-2 col-span-3 grid-rows-5 gap-5 gap-y-1 gap-x-5 p-14">
            <InputField
              id="inputName"
              label="Your name?*"
              placeholder="Your name?"
              type="text"
            />

            <InputField
              id="inputEmail"
              label="Your e-mail?*"
              placeholder="Your e-mail?"
              type="email"
            />

            <InputField
              id="inputNumber"
              label="Phone number*"
              placeholder="Phone number?"
              type="tel"
            />

            <InputField
              id="inputCompany"
              label="Company*"
              placeholder="Company?"
              type="text"
            />

            <InputField
              id="inputTell"
              label="Tell us about your project"
              placeholder="Tell us about your project"
              type="text"
            />

            {/* Input file field */}
            <div className="relative col-span-2">
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
                    {/* SVG path */}
                  </svg>
                </div>
                <p className="text-sm text-middlegrey">Attach a file</p>
              </div>
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
              <ActionButton
                href="#"
                text="Discuss the project"
                icon="./img/link arrov.svg"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col pt-16 border-l border-middlegrey pl-11">
          <a className="body-16" href="https://goo.gl/maps/zhjwPWmqLJBoarJU9">
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
  );
};

export default CallToAction;
