import { Fragment } from "react";
import { FiMapPin, FiClock, FiPhone, FiMail } from "react-icons/fi";
import bg from "../assets/bg.png";
import ContactForm from "./ContactForm";
import Navbar from "./Navbar";
import Footer from "./Footer";

/**
 * @param {{
 *   navBtn?: { label: string, to?: string, href?: string, variant?: "primary"|"outlineLight" },
 *   heading?: string,
 *   subtext?: string
 * }} props
 */
export default function QuoteHero({
  navBtn = { label: "Back to Home", to: "/" },
  heading = "Let’s Talk\nConcrete",
  subtext = "Whether you’re ready to start or just exploring options, we’re here to help. Call or message us for a free, no-obligation quote.",
}) {
  const lines = String(heading).split("\n");

  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Navbar with home CTA */}
      <Navbar cta={navBtn} />

      {/* Background (same as home hero) */}
      <div className="bg-stack ">
        <img src={bg} alt="background" />
      </div>

      {/* Everything above the footer */}
      <div className="hero-content mx-auto w-full max-w-[1440px] px-4 md:px-6 flex-1 pt-10 md:pt-16 lg:pt-20 pb-8 md:pb-12">
        {/* Grid: left copy + right form (identical to home) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left copy */}
          <div className="lg:col-span-6 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-[1.05] tracking-tight">
              {lines.map((line, i) => (
                <Fragment key={i}>
                  {line}
                  {i < lines.length - 1 && <br />}
                </Fragment>
              ))}
            </h1>

            <p className="mt-6 mx-auto lg:mx-0 max-w-xl text-white/90 text-base md:text-lg leading-relaxed">
              {subtext}
            </p>

            {/* Optional back button under copy (matches comp vibe) */}
            <div className="mt-6 flex justify-center lg:justify-start">
              <a
                href={navBtn.href || navBtn.to || "/"}
                onClick={(e) => {
                  if (navBtn.to) {
                    e.preventDefault();
                    window.history.pushState({}, "", navBtn.to);
                    window.dispatchEvent(new PopStateEvent("popstate"));
                  }
                }}
                className="button-pill cursor-pointer bg-white text-red-600 font-semibold inline-flex items-center justify-center"
              >
                Back to Home
              </a>
            </div>
          </div>

          {/* Right form */}
          <div className="lg:col-span-6">
            <ContactForm accessKey={import.meta.env.VITE_WEB3FORMS_KEY} />
          </div>
        </div>

        {/* Contact icons row */}
        <div className="mt-8 grid grid-cols-2 gap-6 py-8 lg:py-14 text-white">
          <div className="flex items-start gap-3">
            <FiMapPin className="mt-1 shrink-0" size={22} />
            <p className="leading-snug">
              <span className="font-semibold">
                Serving Seattle, WA and Surrounding Areas
              </span>
            </p>
          </div>
          <div className="flex items-start gap-3">
            <FiClock className="mt-1 shrink-0" size={22} />
            <p className="leading-snug">
              <span className="font-semibold">Mon–Sat:</span> 8am – 6pm
            </p>
          </div>
          <div className="flex items-start gap-3">
            <FiPhone className="mt-1 shrink-0" size={22} />
            <p className="leading-snug">
              <span className="font-semibold">Phone:</span>{" "}
              <a
                href="tel:+12533204292"
                className="underline hover:no-underline"
                aria-label="Call 253-320-4292"
              >
                253-320-4292
              </a>
            </p>
          </div>
          <div className="flex items-start gap-3">
            <FiMail className="mt-1 shrink-0" size={22} />
            <p className="leading-snug">
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
        </div>
      </div>

      {/* Footer lives INSIDE the hero so bg.png wraps its sides */}
      <Footer />
    </section>
  );
}
