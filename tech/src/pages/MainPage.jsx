import ChooseBlock from "components/ChooseBlock/ChooseBlock";
import ContactModule from "components/Contact/ContactBlock";
import ExperienceBlock from "components/Experience/ExperienceBlock";
import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import ServiceContent from "components/Service/ServiceBlock";
import Solution from "components/Solutions/SolutionBlock";

const MainPage = () => {
  return (
    <>
      <Header />
      <Solution />
      <ExperienceBlock/>
      <ChooseBlock />
      <ContactModule />
      <ServiceContent />
      <Footer />
    </>
  );
};

export default MainPage;
