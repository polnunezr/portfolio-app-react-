import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Work from "./components/Work";
import { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  const style = {
    position: "fixed",
    top: "50%",
    left: "50%",
  };

  return (
    <div className="App">
      {loading ? (
        <ClipLoader
          color={"#36d7b7"}
          cssOverride={style}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <div>
          <Navbar />
          <Home />
          <About />
          <Experience />
          <Skills />
          <Work />
          <Contact />
        </div>
      )}
    </div>
  );
}

export default App;
