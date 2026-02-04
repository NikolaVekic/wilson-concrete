import { FaFacebookF, FaInstagram } from "react-icons/fa";
import logo from "../assets/logo2.png";

export default function Footer() {
  return (
    <footer className="relative z-10 -mt-6">
      {/* pull up so it looks above the info strip */}
      <div className="mx-auto max-w-[1440px] px-4 md:px-6">
        <div className="bg-white rounded-t-[28px] shadow-[0_-6px_20px_rgba(0,0,0,0.06)]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 px-5 md:px-8 pt-8 md:pt-10 pb-10">
            {/* Left: contact */}
            <div className="text-[15px] md:text-[16px] text-neutral-900">
              <p className="mb-1">Serving Seattle, WA and Surrounding Areas</p>
              <p className="mb-1">
                <span className="font-semibold">Phone:</span>{" "}
                <a
                  href="tel:+12533204292"
                  className="underline hover:no-underline"
                  aria-label="Call 253-320-4292"
                >
                  253-320-4292
                </a>
              </p>
              <p className="mb-1">
                <span className="font-semibold">Mon–Sat:</span> 8am – 6pm
              </p>
              <p>
                <span className="font-semibold">Email:</span>{" "}
                <a
                  href="mailto:Wilsonconcreteandcoatings@gmail.com"
                  className="underline hover:no-underline"
                  aria-label="Email Wilsonconcreteandcoatings@gmail.com"
                >
                  Wilsonconcreteandcoatings@gmail.com
                </a>
              </p>
            </div>

            {/* Center: socials */}
            <div className="flex items-center md:justify-center gap-5 md:gap-6">
              <a
                href="#"
                aria-label="Facebook"
                className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-black text-white"
              >
                <FaFacebookF size={22} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="inline-flex items-center justify-center w-12 h-12 rounded-[14px] border-[3px] border-black text-black"
              >
                <FaInstagram size={24} />
              </a>
            </div>

            {/* Right: logo */}
            <div className="flex md:justify-end items-center">
              {/* Replace with your SVG if available */}
              <a href="#" className="flex items-center gap-3">
                <img
                  src={logo}
                  alt="logo"
                  className="max-w-[140px] md:max-w-[200px] lg:max-w-[240px]"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
