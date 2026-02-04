import { Link } from "react-router-dom";

export default function PillButton({
  to, // internal route
  href, // external or non-SPA link
  children,
  className = "",
  variant = "primary", // "primary" | "outlineLight"
  ...props
}) {
  const base =
    "button-pill inline-flex items-center justify-center font-semibold";
  const variants = {
    primary: "bg-white text-red-600",
    outlineLight:
      "text-white ring-1 ring-inset ring-white/70 hover:bg-white/10",
  };
  const cls = `${base} ${variants[variant] || ""} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={cls} {...props}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={cls} {...props}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" className={cls} {...props}>
      {children}
    </button>
  );
}
