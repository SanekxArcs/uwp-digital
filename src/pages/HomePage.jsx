import Header from "../components/Header";
import CallToAction from "../components/CallToAction";
import Cookie from "../components/Cookie";
import FAQ from "../components/FAQ";
import Hero from "../components/Hero";
import Modal from "../components/Modal";
import WhyWe from "../components/WhyWe";
import Blog from "../components/Blog";
import LetsDiscuss from "../components/LetsDiscuss";
import OurServices from "../components/OurServices";
import OurCases from "../components/OurCases";
import Video from "../components/Video";
import WelcomeText from "../components/WelcomeText";
import Footer from "../components/Footer";

const HomePage = () => {

  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <Hero/>
        <Video/>
        <div className="bg-light">
          {/* <WelcomeText/> */}
          {/* <OurCases/> */}
          {/* <OurServices/> */}
        </div>
        {/* <LetsDiscuss/> */}
        {/* <Blog/> */}
        {/* <WhyWe/> */}
        {/* <FAQ/> */}
        {/* <CallToAction/> */}
      </main>
      <Footer />
      {/* <Cookie/> */}
      {/* <Modal/> */}
    </>
  );
};

export default HomePage;
