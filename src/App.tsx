import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
const Layout = lazy(() => import("./layout/layout"));
const Loading = lazy(() => import("./pages/Loading"));
const MainPage = lazy(() => import("./pages/MainPage"));
const SortingPage = lazy(() => import("./pages/SortingPage"));

function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="" element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path="sorting-page/:id" element={<SortingPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
