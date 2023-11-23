import logo from "./logo.svg";
import "./App.css";
import NavBar from "./component/nav.js";
import Main from "./component/Main.js";
import Wrapper from "./component/Wrapper.js";
import wrapImage1 from "./assets/wrapperImage1.svg";
import wrapImage2 from "./assets/wrapperImage2.svg";
import wrapImage3 from "./assets/wrapperImage3.svg";
import "./style/wrapperStyle.css";
import Pricing from "./component/Pricing.js";
import Footer from "./component/Footer.js";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Main />
      <Wrapper
        style={{ height: "315.848px", width: "480px" }}
        image={wrapImage1}
        heading={"Light Fast & Powerful"}
        SubTitleComp={() => (
          <p className="wrapper-para">
            Lorem ipsum dolor sit amet, onsectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex
            ea commodo consequat. <br /> <br /> Duis aute irure dolor
            inreprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla
          </p>
        )}
      />
      <Wrapper
        style={{ height: "387px", width: "540px" }}
        image={wrapImage2}
        heading={"Light Fast & Powerful"}
        SubTitleComp={() => (
          <p className="wrapper-para">
            Lorem ipsum dolor sit amet, onsectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex
            ea commodo consequat. <br /> <br /> Duis aute irure dolor
            inreprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla
          </p>
        )}
      />
      <Wrapper
        style={{ height: "312px", width: "445px" }}
        image={wrapImage3}
        heading={"Light Fast & Powerful"}
        // p={
        //   "Lorem ipsum dolor sit amet, onsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nulla"
        // }
        SubTitleComp={() => (
          <p className="wrapper-para">
            Lorem ipsum dolor sit amet, onsectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex
            ea commodo consequat. <br /> <br /> Duis aute irure dolor
            inreprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla
          </p>
        )}
        newClass={"wrapper-3"}
        buttonText={"Purchase Now"}
        showButton={true}
      />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
