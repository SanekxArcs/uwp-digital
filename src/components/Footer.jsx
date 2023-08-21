import instagram from "./../assets/img/insta.svg"
import fb from "./../assets/img/fb.svg"
import linkedIn from "./../assets/img/linked in.svg"
import upWork from "./../assets/img/upWork.svg"
import youTube from "./../assets/img/youTube.svg"

const Footer = () => {
  return (
    <>
      <div className="font-light bg-white">
        <footer className="container flex flex-col">
          <div className="flex justify-between py-3 text-middleGrey">
            <p>Look also</p>
            <p>Up ⬆</p>
          </div>
          <div className="flex justify-between py-10">
            <nav className="">
              <ul className="flex flex-wrap gap-16 text-2xl uppercase">
                <li className="uppercase hover:text-activeRed hover:underline hover:underline-offset-4 active:text-middlegrey active:underline-offset-4">
                  <a href="#ABOUTUS">ABOUT US</a>
                </li>
                <li className="uppercase hover:text-activeRed hover:underline hover:underline-offset-4 active:text-middlegrey active:underline-offset-4">
                  <a href="#CASES">Case Studies</a>
                </li>
                <li className="hover:text-activeRed hover:underline hover:underline-offset-4 active:text-middlegrey active:underline-offset-4">
                  <a href="#SERVICES"> SERVICES </a>
                  <div></div>
                </li>
                <li className="hover:text-activeRed hover:underline hover:underline-offset-4 active:text-middlegrey active:underline-offset-4">
                  <a href="#BLOG"> BLOG </a>
                </li>
                <li className="hover:text-activeRed hover:underline hover:underline-offset-4 active:text-middlegrey active:underline-offset-4">
                  <a href="#CONTACT">CONTACT</a>
                </li>
              </ul>
            </nav>

            <div className="flex items-center justify-center gap-6">
              <a
                className="grid w-12 h-12 rounded-full place-items-center bg-lightGrey"
                href=""
              >
                <img
                  className="w-6 h-6"
                  loading="lazy"
                  src={instagram}
                  alt=""
                />
              </a>
              <a
                className="grid w-12 h-12 rounded-full place-items-center bg-lightGrey"
                href=""
              >
                <img className="w-6 h-6" loading="lazy" src={fb} alt="" />
              </a>
              <a
                className="grid w-12 h-12 rounded-full place-items-center bg-lightGrey"
                href=""
              >
                <img className="w-6 h-6" loading="lazy" src={linkedIn} alt="" />
              </a>
              <a
                className="grid w-12 h-12 rounded-full place-items-center bg-lightGrey"
                href=""
              >
                <img className="" loading="lazy" src={upWork} alt="" />
              </a>
              <a
                className="grid w-12 h-12 rounded-full place-items-center bg-lightGrey"
                href=""
              >
                <img className="" loading="lazy" src={youTube} alt="" />
              </a>
            </div>
          </div>

          <div className="flex flex-wrap justify-between py-6 text-base uppercase border-y border-middlegrey">
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
          <div className="flex justify-center gap-10 py-6 text-middleGrey">
            <p>© 2022 Unity World Platform. All rights reserved.</p>
            <a href="">Terms & Conditions</a>
            <a href="">Privacy Policy</a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer
