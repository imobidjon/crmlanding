import { FirstSection, SecondSection, ThirdSection } from "./Sections";
import Navbar from "./layout/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </div>
  );
}

export default App;
