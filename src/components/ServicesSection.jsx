import { useLayoutEffect, useRef, useState } from "react";

// TODO: swap these with your actual assets
import mostPopular from "../assets/arrow.png"; // doodle arrow image
import imgSparkles from "../assets/2.png"; // card 1 right artwork
import imgCar from "../assets/3.png"; // card 2 right artwork
import imgPath from "../assets/4.png"; // card 3 right artwork

export default function ServicesSection() {
  const cards = [
    {
      title: "Concrete Polishing",
      desc: "Smooth, reflective surfaces for a clean, modern look",
      img: imgSparkles,
    },
    {
      title: "Garage Floor Coatings",
      desc: "Tough, chemical-resistant finishes built for heavy use",
      img: imgCar,
    },
    {
      title: "Outdoor Patios & Walkways",
      desc: "Weather-resistant decorative surfaces for any landscape",
      img: imgPath,
    },
  ];

  return (
    <section className="py-8 md:py-12" id="services">
      <div className="mx-auto max-w-[1440px] px-4 md:px-6">
        {/* Big Title (Figma: 200px, 100% LH, 1% letter spacing, Helvetica Neue LT Std) */}
        <h2
          className="
            text-[#F50A13] text-center leading-[1] tracking-[0.01em]
            font-['Helvetica_Neue_LT_Std','Helvetica Neue',Helvetica,Arial,sans-serif]
            font-[750]
            text-[48px] sm:text-[80px] md:text-[120px] lg:text-[164px]
          "
        >
          Our services
        </h2>

        {/* Red container */}
        <div className="relative bg-[#F50A13] pb-12 rounded-[26px] px-4 sm:px-6 md:px-8 lg:px-10 md:pt-[120px] pt-[120px] lg:pt-[160px]">
          {/* Doodle pinned to top of red block, ~30% from left */}
          <img
            src={mostPopular}
            alt="Most popular"
            className="
              pointer-events-none select-none
              absolute left-[31%] lg:left-[33%] top-[6px] md:-top-[16px]
              w-[110px] md:w-[150px] lg:w-[170px]
            "
          />

          <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
            {cards.map((c, i) => (
              <article
                key={i}
                className="
                  bg-white rounded-[22px] p-5 sm:p-6 md:p-7 lg:p-8
                  ring-1 h-[auto] md:h-[220px] lg:h-[260px] ring-black/10 shadow-[0_6px_18px_rgba(0,0,0,.08)]
                  flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6
                "
              >
                {/* Text block */}
                <div className="max-w-[740px]">
                  {/* Card Title (Figma: 86px, 100% LH, Heavy 750) */}
                  <h3
                    className="
                      font-['Helvetica_Neue_LT_Std','Helvetica Neue',Helvetica,Arial,sans-serif]
                      font-[750] leading-[1] text-center md:text-start tracking-tight break-words
                      text-[clamp(28px,7vw,52px)]
                    "
                  >
                    {c.title}
                  </h3>

                  {/* Subtitle (Figma: 32px, 100% LH, 500) */}
                  <p
                    className="
                      mt-2 text-neutral-900
                      font-['Helvetica_Neue_LT_Std','Helvetica Neue',Helvetica,Arial,sans-serif]
                      font-[400] leading-[1] break-words text-center md:text-start
                      text-4px md:text-14px lg:text-18px
                      max-w-[60ch]
                    "
                  >
                    {c.desc}
                  </p>
                </div>

                {/* Right-side image */}
                <img
                  src={c.img}
                  alt=""
                  className="
     h-auto max-h-[80px] md:max-h-[170px] lg:max-h-[210x]
    w-[90px] sm:w-[120px] md:w-[150px] lg:w-[180px] xl:w-[220px]
  "
                />
              </article>
            ))}

            {/* Bottom-left CTA inside red block */}
            <div className="pt-2 w-[100%] flex justify-center sm:justify-start">
              <a href="/quote">
                <button className="button-pill bg-white text-black font-semibold cursor-pointer">
                  Get a free quote
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
