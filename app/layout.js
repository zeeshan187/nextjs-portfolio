import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
import Testimonials from "./components/homepage/testimonials";
import ScrollToTop from "./components/helper/scroll-to-top";
import { AiFillLinkedin } from "react-icons/ai";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { TbBrandFiverr } from "react-icons/tb";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio of Zeeshan Tahir - Software Developer",
  description:
    "This is the portfolio of Zeeshan Tahir. I am a full stack developer and a self taught developer. I love to learn new things and I am always open to collaborating with others. I am a quick learner and I am always looking for new challenges.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-[50vh] relative mx-auto px-6 sm:px-12 lg:max-w-[1440px]  text-white">
          <Navbar />
          {children}
          <ScrollToTop />
          <Testimonials />
        </main>
        <div className="footer_social_med fixed bottom-3 left-0 right-0 mx-auto text-red bg-white  p-2 rounded-md">
          <a target="_blank" href="https://www.fiverr.com/mrzeeshan185">
            <TbBrandFiverr className="footer_icons" />{" "}
          </a>
          <a target="_blank" href="https://wa.me/+923057567185">
            <IoLogoWhatsapp className="footer_icons" />{" "}
          </a>
          <a
            target="_blank"
            href="https://www.facebook.com/zeeshan.zeeshanprince.94"
          >
            <FaFacebook className="footer_icons " />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/zeeshanshaniii185/"
          >
            <FaInstagramSquare className="footer_icons " />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/thezeeshantahir/"
          >
            {" "}
            <AiFillLinkedin className="footer_icons " />
          </a>
        </div>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
