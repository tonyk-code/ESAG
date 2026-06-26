import { Outlet } from "react-router";
import { Footer } from "./Footer";
import Nav from "./Nav";
import { SmoothScroll } from "./SmoothScroll";

export function Root() {
  return (
    <SmoothScroll>
      <div className="flex flex-col min-h-dvh bg-canvas relative">
        <Nav />
        <main className="flex-1 flex flex-col pt-16">
          <Outlet />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}
