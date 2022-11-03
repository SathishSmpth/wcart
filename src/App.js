import Navbar from "./components/navbar";
import SectionOne from "./components/section-one";
import SectionThree from "./components/section-three";
import SectionTwo from "./components/section-two";
import SectionFour from "./components/section-four";
import SectionFive from "./components/section-five";
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
