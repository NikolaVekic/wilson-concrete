export default function SkewInput({ placeholder, type = "text" }) {
  return (
    <div className="skew-wrap">
      <div className="rounded-full bg-white shadow-md">
        <input
          type={type}
          placeholder={placeholder}
          className="skew-content w-full rounded-full border-0 bg-transparent px-6 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none"
        />
      </div>
    </div>
  );
}
