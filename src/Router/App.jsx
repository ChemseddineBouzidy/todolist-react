import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "../layout/Layout";
import FormValidation from "../FormValidation/FormValidation";
import Home from "../pages/Home";
import FormValidationBeginner from "../FormValidation/FormValidationBeginner";
import PageNotFound from "./PageNotFound";
import Cards from "../Contect APi/Cards";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/validation" element={<FormValidationBeginner />} />
          <Route path="/validation-avancee" element={<FormValidation />} />
          <Route path="/cards" element={<Cards />} />
        </Route>
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
