import { Outlet } from "react-router";
import { Footer } from "./Footer";
import Nav from "./Nav";
import { SmoothScroll } from "./SmoothScroll";

export function Root() {
  return (
    <SmoothScroll>
      <div className="flex flex-col min-h-screen bg-canvas text-primary font-body text-main relative">
        <Nav />
        <main className="flex-1 flex flex-col w-full max-w-full mx-auto px-site-margin relative z-10">
          <Outlet />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}
