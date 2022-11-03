import Navbar from "./navbar";
import SectionOne from "./section-one";
import SectionThree from "./section-three";
import SectionTwo from "./section-two";
import SectionFour from "./section-four";
import SectionFive from "./section-five";
import Footer from "./footer";

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
