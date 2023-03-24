import { Suspense, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layout/layout";
import MainPage from "./pages/MainPage";
import SortingPage from "./pages/SortingPage";

function App() {
  return (
    <>
      <Suspense>
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
