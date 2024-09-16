import './App.css';
import ChooseBlock from './components/ChooseBlock/ChooseBlock';
import ContactContent from './components/Contact/ContactBlock';
import ExperienceBlock from './components/Experience/ExperienceBlock';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ServiceContent from './components/Service/ServiceBlock';
import Solution from './components/Solutions/SolutionBlock';

function App() {
  return (
    <div className="App">
      <Header />
      <Solution />
      <ExperienceBlock />
      <ChooseBlock />
      <ContactContent />
      <ServiceContent />
      <Footer />
    </div>
  );
}

export default App;
