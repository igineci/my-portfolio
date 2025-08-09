import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/routes";
import { Suspense } from "react";

export default function WrappedApp() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Suspense>
  );
}
