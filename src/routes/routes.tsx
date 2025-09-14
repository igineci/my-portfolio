import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
// Route-level code splitting
const HomePage = lazy(() => import("../../src/components/pages/index.tsx"));
const ContactPage = lazy(() => import("../app/contact/page.tsx"));
const WorkPage = lazy(() => import("../app/work/page.tsx"));
const ExplorationsPage = lazy(() => import("../app/explorations/page.tsx"));
const AboutPage = lazy(() => import("../app/about/page.tsx"));

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
