import { Outlet } from "react-router";
import { Footer } from "./Footer";

export function Root() {
  return (
    <div className="flex flex-col min-h-dvh bg-(--color-canvas) relative">
      <main className="flex-1 flex flex-col pt-16">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
}
