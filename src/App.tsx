import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/routes";
import { Suspense } from "react";
import { Analytics } from "@vercel/analytics/react";

export default function WrappedApp() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Analytics />
        <AppRoutes />
      </BrowserRouter>
    </Suspense>
  );
}
