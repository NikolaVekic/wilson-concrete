import { Fragment } from "react";
import ContactForm from "./ContactForm";
import bg from "../assets/bg.png";
import Navbar from "./Navbar";
import ValueProp from "./ValueProp";

/**
 * @param {Object}   props
 * @param {string}   [props.heading]         // supports "\n" for line breaks
 * @param {string}   [props.subtext]
 * @param {{label:string, href:string}} [props.primaryBtn]
 * @param {{label:string, href:string}} [props.secondaryBtn]
 * @param {{label:string, href:string}} [props.navBtn]  // <-- NEW: Navbar CTA
 */
export default function Hero({
  heading = "From rough to\nremarkable!",
  subtext = "Durable, beautiful concrete solutions for homes and businesses — designed to last and crafted with care.",
  primaryBtn,
  secondaryBtn,
  navBtn, // pass straight into Navbar
}) {
  const headingLines = String(heading).split("\n");
  const showPrimary = Boolean(primaryBtn?.label && primaryBtn?.href);
  const showSecondary = Boolean(secondaryBtn?.label && secondaryBtn?.href);
  const showButtons = showPrimary || showSecondary;

  return (
    <section className="pb-[160px]">
      {/* Pass nav button down */}
      <Navbar cta={navBtn} />

      {/* background */}
      <div className="bg-stack">
        <img src={bg} alt="background" />
      </div>

      <div className="hero-content mx-auto w-full max-w-[1440px] px-4 md:px-6 pb-4 md:pb-10 lg:pb-20 pt-10 md:pt-16 lg:pt-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        {/* Left copy */}
        <div className="lg:col-span-6 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-[1.05] tracking-tight">
            {headingLines.map((line, i) => (
              <Fragment key={i}>
                {line}
                {i < headingLines.length - 1 && <br />}
              </Fragment>
            ))}
          </h1>

          <p className="mt-6 mx-auto lg:mx-0 max-w-xl text-white/90 text-base md:text-lg leading-relaxed">
            {subtext}
          </p>

          {showButtons && (
            <div className="mt-8 flex flex-wrap justify-center lg:justify-start items-center gap-3">
              {showPrimary && (
                <a
                  href={primaryBtn.href}
                  className="button-pill cursor-pointer bg-white text-red-600 font-semibold inline-flex items-center justify-center"
                >
                  {primaryBtn.label}
                </a>
              )}
              {showSecondary && (
                <a
                  href={secondaryBtn.href}
                  className="button-pill cursor-pointer text-white ring-1 ring-inset ring-white/70 hover:bg-white/10 inline-flex items-center justify-center"
                >
                  {secondaryBtn.label}
                </a>
              )}
            </div>
          )}
        </div>

        {/* Right form — diagonal on desktop, stacked & centered on mobile */}
        <div className="lg:col-span-6">
          <ContactForm accessKey={import.meta.env.VITE_WEB3FORMS_KEY} />
        </div>
      </div>

      <ValueProp />
    </section>
  );
}
