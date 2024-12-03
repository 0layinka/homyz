import Header from "./components/Header/header";
import Hero from "./components/Hero/Hero";
import './app.css'
import Companies from "./components/companies/companies";
import Residencies from "./components/Residencies/residencies";
import Value from "./components/Value/Value";
import Contact from "./components/Contact/Contact";
import GetStarted from "./components/Get_started/getStarted";
import Footer from "./components/Footer/footer";


function App() {
  return (
    <div className="app">
      <div>
        <div className="white-gradient"></div>
        <Header />
        <Hero />
      </div>
      <Companies />
      <Residencies />
      <Value />
      <Contact />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;
