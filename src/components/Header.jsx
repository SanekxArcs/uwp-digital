
import Logo from "./../assets/img/whitelogo.svg";
import Theme from "./../assets/img/Dark.svg";
import Lang from "./../assets/img/Eng.svg";

const Header = () => {
  const navItem =
    "hover:text-activeRed hover:underline hover:underline-offset-4 active:text-middleGrey active:underline-offset-4";

  return (
    <header className="container sticky mx-auto font-light text-white">
      <div className="flex flex-row items-center justify-between h-16 md:h-20 lg:h-24">
        {/* LOGO & THEME */}
        <div className="flex items-center gap-10">
          <a href="/">
            <img className="h-10" src={Logo} alt="Company Logo" />
          </a>
          <a href="#" className="w-12 h-12 hover:text-activeRed">
            <img src={Theme} alt="Theme Toggle" />
          </a>
        </div>

        {/* NAVIGATION */}
        <nav>
          <ul className="hidden gap-12 transition-all lg:flex">
            <li className={navItem}>
              <a href="#CASES">CASES</a>
            </li>
            <li className={navItem}>
              <a href="#SERVICES">SERVICES</a>
            </li>
            <li className={navItem}>
              <a href="#ABOUTUS">ABOUT US</a>
            </li>
            <li className={navItem}>
              <a href="#BLOG">BLOG</a>
            </li>
            <li className={navItem}>
              <a href="#CONTACT">CONTACT</a>
            </li>
          </ul>
        </nav>

        {/* CTA & LANG */}
        <div className="flex items-center gap-3 md:gap-5 lg:gap-10">
          <a
            href="#"
            className="flex items-center gap-5 p-3 uppercase transition-all rounded-full md:px-6 md:py-3 group flex-nowrap bg-main hover:fill-dark active:bg-white active:border active:border-main active:text-main hover:bg-white hover:text-dark"
          >
            <span className="hidden md:block">Let&apos;s talk</span>
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

          <div className="hidden lg:flex">
            <a
              href="#"
              className="flex gap-3 flex-nowrap hover:text-activeRed hover:underline-offset-4 active:text-middleGrey active:underline-offset-4"
            >
              <img className="w-6 h-6" src={Lang} alt="Language" />
              EN
            </a>
          </div>

          <div className="lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
