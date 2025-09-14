import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/routes";
import { Suspense } from "react";
import { Analytics } from "@vercel/analytics/react";
import ScrollToTop from "./utils/scroll-to-top";
import SmoothScrollMount from "./utils/smooth-scroll";

export default function WrappedApp() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Analytics />
        <SmoothScrollMount />
        <ScrollToTop />
        <AppRoutes />
      </BrowserRouter>
    </Suspense>
  );
}
