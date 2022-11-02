import Navbar from "./navbar";
import SectionOne from "./section-one";
import SectionTwo from "./section-two";

const App =()=> {
  return (
    <div className="app-container">
      <div><Navbar/></div>
      <div><SectionOne/></div>
      <div><SectionTwo/></div>
    </div>
  );
}

export default App;
