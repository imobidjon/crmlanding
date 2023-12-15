import {
  FifthhSection,
  FirstSection,
  FourthSection,
  SecondSection,
  ThirdSection,
} from "./Sections";
import Navbar from "./layout/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthhSection />
    </div>
  );
}

export default App;
