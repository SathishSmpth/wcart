import Navbar from "./components/navbar";
import SectionOne from "./components/sectionOne";
import Footer from "./components/footer";

const App =()=> {
  return (
    <div className="app-container">
      <Navbar/>
      <SectionOne/>
      <Footer/>
    </div>
  );
}

export default App;
