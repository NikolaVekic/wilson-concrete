import PillButton from "./ui/PillButton";
import logo from "../assets/logo.png";

export default function Navbar({ cta }) {
  const showCta = Boolean(cta?.label && (cta?.to || cta?.href));
  return (
    <header className="relative z-50">
      <div className="mx-auto w-full max-w-[1440px] px-4 md:px-6 flex h-16 items-center justify-between md:h-20">
        <a href="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="logo"
            className="max-w-[140px] md:max-w-[200px] lg:max-w-[240px]"
          />
        </a>
        {showCta && (
          <PillButton
            to={cta.to}
            href={cta.href}
            variant={cta.variant || "primary"}
          >
            {cta.label}
          </PillButton>
        )}
      </div>
    </header>
  );
}
