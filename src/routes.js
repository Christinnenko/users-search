import React from "react";
import { Route, Routes } from "react-router-dom";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage.jsx";
import { SearchPage } from "./pages/SearchPage/SearchPage.jsx";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SearchPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
