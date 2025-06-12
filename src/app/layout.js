import "@/app/__styles/globals.css";

import Footer from "./__component/Footer";
import Header from "./__component/Header";

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
