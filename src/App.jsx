
import { BrowserRouter as Router } from "react-router-dom";

import ScrollToTop from "./services/ScrollToTop";
import LayoutAnimate from "./LayoutAnimate";
import ProgressBar from "./services/ProgressBar";

export default function App() {

  return (
    <>
      <Router>
        <ScrollToTop />
        <ProgressBar />
        <LayoutAnimate />
      </Router>
    </>
  );
}
