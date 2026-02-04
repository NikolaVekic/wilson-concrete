export default function ContactStrip() {
  return (
    <section className="relative">
      {/* Red strip with rounded top and a bit of bottom space so footer can overlap */}
      <div className="mx-auto max-w-[1440px] px-4 md:px-6">
        <div className="bg-[#F50A13] text-white rounded-t-[36px] px-5 md:px-8 py-8 md:py-10 lg:py-12 relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6">
            <h3 className="md:col-span-2 text-[20px] md:text-[32px] lg:text-[40px] font-extrabold leading-tight sm:pb-4 md:pb-6 lg:pb-8">
              Hope to hear from you soon!
            </h3>
            <div className="md:col-span-1 flex md:justify-end">
              <a href="/quote">
                <button className="button-pill bg-white text-black font-semibold sm:mb-2 lg:mb-4 cursor-pointer">
                  Get a free quote
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* create the visual separation under the red bar */}
      <div className="mx-auto max-w-[1440px] px-4 md:px-6">
        {/* thin separator to match the figma line */}
        <div className="h-[1px] bg-black/10 -mt-[1px]" />
      </div>
    </section>
  );
}
