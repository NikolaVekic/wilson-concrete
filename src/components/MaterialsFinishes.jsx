// Put the Resinwerks logo at public/resinwerks.png (or change src below)
import img from "../assets/1.png";

export default function MaterialsFinishes() {
  return (
    <section className="py-10 md:py-14">
      <div className="mx-auto max-w-[1440px] px-4 md:px-6 grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-12">
        {/* Copy */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
          <h2 className="text-[32px] md:text-[40px] xl:text-[48px] font-extrabold leading-tight">
            Materials and finishes
          </h2>

          <p className="mt-4 max-w-[720px] mx-auto lg:mx-0 text-[16px] md:text-[18px] leading-relaxed text-neutral-900">
            We offer an extensive selection of premium floor finishes by
            Resinwerks<span className="align-[2px]">™</span>, designed to
            transform your space with both style and durability. Whether you're
            aiming for a sleek, modern look or a more textured, industrial feel,
            our customizable options ensure your flooring aligns perfectly with
            your vision.
          </p>

          <div className="mt-6 flex justify-center lg:justify-start">
            <a
              href="https://store.resinwerks.com/color-cards"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="button-pill bg-[#F50A13] text-white font-semibold cursor-pointer">
                Browse catalogue
              </button>
            </a>
          </div>
        </div>

        {/* Logo / image */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <img
            src={img}
            alt="Resinwerks"
            className="w-[280px] md:w-[360px] lg:w-[420px] h-auto ml-7 md:ml-0 lg:ml-0"
          />
        </div>
      </div>
    </section>
  );
}
