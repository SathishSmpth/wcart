import Navbar from "./navbar";
import SectionOne from "./section-one";
import SectionThree from "./section-three";
import SectionTwo from "./section-two";

const App =()=> {
  return (
    <div className="app-container">
      <div><Navbar/></div>
      <div><SectionOne/></div>
      <div><SectionTwo/></div>
      <div><SectionThree/></div>
    </div>
  );
}

export default App;
