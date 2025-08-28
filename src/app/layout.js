import "@/styles/globals.css";

import Footer from "../components/Footer";
import Header from "../components/Header";

export const metadata = {
  title: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-900 ">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
