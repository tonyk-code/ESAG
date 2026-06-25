import { Outlet } from "react-router";

export function Root() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-[var(--color-canvas)] relative">
      <main className="flex-1 flex flex-col pt-16">
        <Outlet />
      </main>
    </div>
  );
}
