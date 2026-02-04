export default function PeopleFirst() {
  const items = [
    "Honest pricing",
    "Local, reliable team",
    "Premium materials & equipment",
    "Results that last",
  ];

  return (
    <section className="pb-10 md:pb-14">
      <div className="mx-auto max-w-[1440px] px-4 md:px-6">
        {/* Title */}
        <h2
          className="text-center font-['Helvetica_Neue_LT_Std','Helvetica Neue',Helvetica,Arial,sans-serif] font-extrabold leading-[1] 
                       text-3xl sm:text-4xl md:text-[48px]"
        >
          Built on a People-First Philosophy.
        </h2>

        {/* Subtext */}
        <p
          className="mt-4 mx-auto max-w-[1132px] text-center font-['Helvetica_Neue_LT_Std','Helvetica Neue',Helvetica,Arial,sans-serif]
                      font-medium leading-[1] text-[16px] sm:text-[18px] md:text-[24px] text-neutral-900"
        >
          We do things differently. Every project starts with a simple question:
          “What outcome does the client truly want?” Our people-first approach
          means we listen closely, communicate clearly, and deliver exactly what
          we promise —{" "}
          <strong className="font-bold">no shortcuts, no surprises.</strong>
        </p>

        {/* Responsive red blocks */}
        <div className="mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 justify-items-center">
          {items.map((label, i) => (
            <div
              key={i}
              className="
                bg-[#F50A13] rounded-[18px] shadow-xl
                w-full sm:w-[min(100%,320px)]   /* cap width on md+; full width on small */
                min-h-[84px] sm:min-h-[100px] md:min-h-[110px] lg:min-h-[130px]
                px-4 sm:px-5 md:px-6 py-5 sm:py-6 md:py-7
                flex items-center justify-center
              "
            >
              <span
                className="
                  text-white text-center break-words whitespace-normal leading-[1.1]
                  font-['Helvetica_Neue_LT_Std','Helvetica Neue',Helvetica,Arial,sans-serif] font-bold
                  text-[14px] sm:text-[18px] md:text-[21px] lg:text-[22px] xl:text-[26px]
                "
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
