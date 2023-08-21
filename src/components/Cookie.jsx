
const Cookie = () => {
  return (
    <>
      <div
        id="after-cookie"
        className="z-10 fixed md:flex hidden transition-all rounded-full h-24 bg-dark border border-white w-[490px] text-white bottom-5 right-5 justify-center items-center gap-10"
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
    </>
  );
}

export default Cookie
