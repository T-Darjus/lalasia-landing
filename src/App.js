import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Services from "./pages/Services";
import Article from "./pages/Article";
import AboutUs from "./pages/AboutUs";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/product"} element={<Product />} />
        <Route path={"/services"} element={<Services />} />
        <Route path={"/article"} element={<Article />} />
        <Route path={"/aboutus"} element={<AboutUs />} />
      </Routes>
      <ScrollToTop
        smooth
        viewBox="0 0 24 24"
        top="250"
        style={{ backgroundColor: "transparent" }}
        component={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 15l7-7 7 7"
            />
          </svg>
        }
      />
      <Footer />
    </Router>
  );
}

export default App;
