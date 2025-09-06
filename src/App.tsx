import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/routes";
import { Suspense } from "react";
import { Analytics } from "@vercel/analytics/react";
import ScrollToTop from "./utils/scroll-to-top";

export default function WrappedApp() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Analytics />
        <ScrollToTop />
        <AppRoutes />
      </BrowserRouter>
    </Suspense>
  );
}
