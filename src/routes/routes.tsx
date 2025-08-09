import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../../src/components/pages/index.tsx";
import ContactPage from "../app/contact/page.tsx";
import WorkPage from "../app/work/page.tsx";
import ExplorationsPage from "../app/explorations/page.tsx";
import AboutPage from "../app/about/page.tsx";

export class AppRoutes extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/explorations" element={<ExplorationsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    );
  }
}
// src\components\pages\index.tsx
