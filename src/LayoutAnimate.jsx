import { Route, Routes, useLocation } from "react-router-dom";
import { Suspense, lazy } from "react";
import { AnimatePresence } from "framer-motion";
import { Loading } from "./components/Loading";


const Welcome = lazy(() => import("./pages/Welcome"));

const LayoutAnimate = () => {
  const location = useLocation();
  return (

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <Suspense fallback={<Loading />}>
                <Welcome />
              </Suspense>
            }
          />
          <Route
          path="/*"
          element={
            <h1>404</h1>
          }
        />
        </Routes>
        
      </AnimatePresence>

  );
};

export default LayoutAnimate;
