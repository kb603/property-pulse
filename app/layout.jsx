import "../assets/styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AuthProvider from "../components/AuthProvider";

export const metadata = {
  title: "Propety Pulse | Find the Perfect Rental",
  description: "Find your dream rental property",
  keywords: "rentals, find rentals, find properties",
};

export default function MainLayout({ children }) {
  return (
    <AuthProvider>
      <html lang="en">
        <body>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </AuthProvider>
  );
}
