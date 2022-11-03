import Navbar from "./navbar";
import SectionOne from "./section-one";
import SectionThree from "./section-three";
import SectionTwo from "./section-two";
import SectionFour from "./section-four";

const App =()=> {
  return (
    <div className="app-container">
      <div><Navbar/></div>
      <div><SectionOne/></div>
      <div><SectionTwo/></div>
      <div><SectionThree/></div>
      <div><SectionFour/></div>
    </div>
  );
}

export default App;
