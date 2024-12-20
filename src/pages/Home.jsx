import AboutUs from "../components/home/AboutUs";
import Banner from "../components/home/Banner";
import ContactUs from "../components/home/ContactUs";
import SupportSection from "../components/home/SupportSection";
import HowItWorks from "../components/HowItWorks";
import Statistics from "../components/Statistics";
import HowToHelp from "./HowToHelp";

const Home = () => {
  return (
    <>
      <Banner />
      <AboutUs />
      <Statistics />
      <HowToHelp />
      <SupportSection />
      <HowItWorks />
      <ContactUs />
    </>
  );
};

export default Home;
