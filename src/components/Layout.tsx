import { Outlet } from "react-router";
import Navigation from "@/components/Navigation";


export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-base-200 text-base-content">
      <Navigation />

      <main className="container mx-auto p-6 flex-grow">
        <Outlet />
      </main>

      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <div>
          <p> © {new Date().getFullYear()} All right reserved by Starter Frontend</p>
        </div>
      </footer>
    </div>
  );
}
