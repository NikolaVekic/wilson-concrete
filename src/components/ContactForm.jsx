import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [message, setMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);
    formData.append("subject", "New Quote Request (Website)");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Submission failed");
      }

      setStatus("success");
      setMessage("Message Sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setMessage(err?.message || "Something went wrong");
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="w-full max-w-[640px] mx-auto lg:ml-auto"
    >
      {/* Honeypot anti-spam */}
      <input
        type="text"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
      />

      <div className="field mb-3" style={{ "--i": 0 }}>
        <div className="input-pill">
          <input
            name="name"
            type="text"
            placeholder="Name"
            className="input-base w-full h-full"
            required
          />
        </div>
      </div>

      <div className="field mb-3" style={{ "--i": 1 }}>
        <div className="input-pill">
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="input-base w-full h-full"
            required
          />
        </div>
      </div>

      <div className="field mb-3" style={{ "--i": 2 }}>
        <div className="input-pill">
          <input
            name="phone"
            type="tel"
            placeholder="Phone"
            className="input-base w-full h-full"
          />
        </div>
      </div>

      <div className="field mb-3" style={{ "--i": 3 }}>
        <div className="input-pill">
          <input
            name="projectType"
            type="text"
            placeholder="Project type (Garage, Patio, Other...)"
            className="input-base w-full h-full"
          />
        </div>
      </div>

      <div className="field" style={{ "--i": 4 }}>
        <div className="message-pill">
          <textarea
            name="message"
            placeholder="Message"
            className="textarea-base w-full h-full"
            required
          />
        </div>
      </div>

      <div className="mt-4 flex justify-center lg:justify-start items-center gap-3">
        <button
          type="submit"
          className="send-pill cursor-pointer"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending..." : "Send"}
        </button>

        {message && <span className="text-white/90">{message}</span>}
      </div>
    </form>
  );
}
