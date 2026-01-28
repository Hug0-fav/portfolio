import "@/styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageTransitionWrapper from "../components/PageTransitionWrapper";

export const metadata = {
  title: "Ugochukwu Favour | Frontend Developer Portfolio",
  description:
    "Portfolio of Ugochukwu Favour – React & Next.js Frontend Developer. Projects, skills, and work experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <title>{metadata.title}</title>
      </head>
      <body className="bg-[#0d0d0d] text-gray-200 font-sans min-h-screen flex flex-col">
        <Header />

        {/* Page transitions handled client-side */}
        <PageTransitionWrapper>{children}</PageTransitionWrapper>

        <Footer />
      </body>
    </html>
  );
}
