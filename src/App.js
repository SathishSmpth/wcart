import Navbar from "./components/navbar";
import SectionOne from "./components/sectionOne";
import SectionThree from "./components/sectionThree";
import SectionTwo from "./components/sectionTwo";
import SectionFour from "./components/sectionFour";
import SectionFive from "./components/sectionFive";
import Footer from "./components/footer";

const App =()=> {
  return (
    <div className="app-container">
      <Navbar/>
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
      <SectionFour/>
      <SectionFive/>
      <Footer/>
    </div>
  );
}

export default App;
