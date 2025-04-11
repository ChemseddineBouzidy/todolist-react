import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "../layout/Layout";
import FormValidation from "../FormValidation/FormValidation";
import Home from "../pages/Home";
import FormValidationBeginner from "../FormValidation/FormValidationBeginner";
import PageNotFound from "./PageNotFound";
import Cards from "../Contect APi/Cards";
import Cars from "../CARS/cars";
import Mathcalcule from "../useCallback/Mathcalcule.jsx";
import Memo from "../useMemo/useMemo.jsx";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/validation" element={<FormValidationBeginner />} />
          <Route path="/validation-avancee" element={<FormValidation />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/math" element={<Mathcalcule />} />
          <Route path="/Memo" element={<Memo/>} />


        </Route>
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
