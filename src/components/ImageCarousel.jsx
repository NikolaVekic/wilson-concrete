import { useEffect, useRef, useState, useCallback } from "react";

/** Load all JPGs from src/assets/gallery, e.g. 1.jpg ... N.jpg */
const modules = import.meta.glob("../assets/gallery/*.jpg", { eager: true });
const IMAGES = Object.entries(modules)
  .sort((a, b) => {
    const getNum = (p) => {
      const m = p.match(/\/([^/]+)\.jpg$/i);
      return m ? parseInt(m[1], 10) : 0;
    };
    return getNum(a[0]) - getNum(b[0]);
  })
  .map(([, mod]) => mod.default);

export default function ImageCarousel() {
  const trackRef = useRef(null);
  const cardRef = useRef(null);
  const [active, setActive] = useState(0);
  const [modalIndex, setModalIndex] = useState(null);

  // --- helpers ---
  const getStep = useCallback(() => {
    const el = trackRef.current;
    const card = cardRef.current;
    if (!el || !card) return 0;
    const gapPx = parseInt(getComputedStyle(el).gap || "24", 10) || 24;
    return card.offsetWidth + gapPx;
  }, []);

  const scrollToIndex = (i) => {
    const el = trackRef.current;
    const step = getStep();
    if (!el || !step) return;
    el.scrollTo({ left: i * step, behavior: "smooth" });
  };

  const pageScroll = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const amt = Math.round(el.offsetWidth * 0.7);
    el.scrollBy({ left: dir === "left" ? -amt : amt, behavior: "smooth" });
  };

  const onScroll = () => {
    const el = trackRef.current;
    const step = getStep();
    if (!el || !step) return;
    const idx = Math.round(el.scrollLeft / step);
    if (idx !== active)
      setActive(Math.max(0, Math.min(IMAGES.length - 1, idx)));
  };

  // --- keyboard ---
  useEffect(() => {
    const handler = (e) => {
      if (modalIndex !== null) {
        if (e.key === "Escape") setModalIndex(null);
        if (e.key === "ArrowLeft")
          setModalIndex((i) => (i + IMAGES.length - 1) % IMAGES.length);
        if (e.key === "ArrowRight")
          setModalIndex((i) => (i + 1) % IMAGES.length);
      } else {
        if (e.key === "ArrowLeft") pageScroll("left");
        if (e.key === "ArrowRight") pageScroll("right");
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [modalIndex]);

  if (!IMAGES.length) {
    return (
      <section className="mx-auto max-w-[1440px] px-4 md:px-6 py-12">
        <p className="text-center text-sm text-white/80">
          No images found in <code>src/assets/gallery/*.jpg</code>.
        </p>
      </section>
    );
  }

  return (
    <section className="relative pt-48 lg:pt-32 pb-24">
      {/* clamp to 1440 and clip overflow */}
      <div className="relative mx-auto max-w-[1440px] overflow-hidden px-4 md:px-6">
        {/* Track: overflow-x-auto for programmatic scroll; block wheel/touch */}
        <div
          ref={trackRef}
          className="flex gap-6 md:gap-8 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory select-none"
          onScroll={onScroll}
          onWheel={(e) => e.preventDefault()} // block mouse wheel/trackpad
          onTouchMove={(e) => e.preventDefault()} // block touch swipe
          style={{ cursor: "default", overscrollBehaviorX: "contain" }}
        >
          {IMAGES.map((src, i) => (
            <figure
              key={i}
              ref={i === 0 ? cardRef : null}
              className="shrink-0 snap-start rounded-[18px] shadow-[0_10px_24px_rgba(0,0,0,.12)] overflow-hidden"
            >
              <img
                src={src}
                alt={`gallery-${i + 1}`}
                className="h-[215px] w-[175px] md:h-[430px] md:w-[350px] object-cover cursor-pointer"
                loading="lazy"
                onClick={() => setModalIndex(i)}
              />
            </figure>
          ))}
        </div>

        {/* Arrows (inside 1440 box) */}
        <button
          onClick={() => pageScroll("left")}
          aria-label="Scroll left"
          className="cursor-pointer absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white text-gray-900 p-3 rounded-full shadow-lg hover:shadow-xl px-2 md:px-3 lg:px-4"
        >
          ‹
        </button>
        <button
          onClick={() => pageScroll("right")}
          aria-label="Scroll right"
          className="cursor-pointer absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white text-gray-900 p-3 rounded-full shadow-lg hover:shadow-xl px-2 md:px-3 lg:px-4"
        >
          ›
        </button>

        {/* Indicators (assumes you kept indicator styles in CSS) */}
        <div className="mt-6 flex justify-center gap-3">
          {IMAGES.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to image ${i + 1}`}
              className={`indicator ${i === active ? "indicator--active" : ""}`}
              onClick={() => scrollToIndex(i)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/70 flex items-center justify-center p-4"
          onClick={() => setModalIndex(null)}
        >
          {/* Close */}
          <button
            onClick={() => setModalIndex(null)}
            className="fixed top-4 right-4 bg-white text-gray-900 rounded-full p-2 shadow-lg hover:shadow-xl"
            aria-label="Close"
          >
            ✕
          </button>

          <div
            className="relative max-w-[95vw] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={IMAGES[modalIndex]}
              alt={`modal-${modalIndex + 1}`}
              className="max-w-[95vw] max-h-[85vh] rounded-lg object-contain mt-[30px]"
            />
          </div>
        </div>
      )}
    </section>
  );
}
