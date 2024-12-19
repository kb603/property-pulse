import "@/assets/styles/globals.css";

export const metadata = {
  title: "Propety Pulse | Find the Perfect Rental",
  description: "Find your dream rental property",
  keywords: "rentals, find rentals, find properties",
};

export default function MainLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}
