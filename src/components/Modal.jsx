
const Modal = () => {
  return (
    <>
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
                  className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate py-5 px-10 leading-[1.6]   transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200 text-middlegrey"
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
                  className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate py-5 px-10 leading-[1.6]   transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200 text-middlegrey"
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
                  className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate py-5 px-10 leading-[1.6]   transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200 text-middlegrey"
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
                  className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate py-5 px-10 leading-[1.6]   transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200 text-middlegrey"
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
                  className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate py-5 px-10 leading-[1.6]   transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200 text-middlegrey"
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
                  By clicking the &quot;Send&quot; button, you consent to the{" "}
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
}

export default Modal
