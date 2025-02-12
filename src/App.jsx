import { Suspense, lazy } from "react";
import Header from "./components/header/Header";
import { HashRouter, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./pages/home/Home"));

export default function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback="loading...">
              <Home />
            </Suspense>
          }
        />
      </Routes>
    </HashRouter>
  );
}
