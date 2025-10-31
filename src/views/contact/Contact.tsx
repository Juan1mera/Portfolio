import { useState } from "react";
import { CustomTitleSection } from "../../components/CustomTitleSection";

function Contact() {
  // Estado separado para email
  const [emailCopied, setEmailCopied] = useState(false);
  const email = "mera.dev.co@gmail.com";

  // Estado separado para teléfono
  const [phoneCopied, setPhoneCopied] = useState(false);
  const phone = "+7 915 572 78-34";

  // Función para copiar email
  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.error("Error al copiar email: ", err);
    }
  };

  // Función para copiar teléfono
  const handleCopyPhone = async () => {
    try {
      await navigator.clipboard.writeText(phone);
      setPhoneCopied(true);
      setTimeout(() => setPhoneCopied(false), 2000);
    } catch (err) {
      console.error("Error al copiar teléfono: ", err);
    }
  };

  return (
    <section
      id="contact"
      className="flex flex-col justify-start items-center py-40 gap-44 w-full"
    >
      <CustomTitleSection
        topTexts={["LET'S", "BUILD"]}
        bottomTexts={["SOMETHING"]}
        purpleWord="BUILD"
      />

      <div className="w-full max-w-4xl flex flex-col sm:flex-row items-center justify-around gap-12 px-6">
        {/* Email */}
        <div className="text-center sm:text-start">
          <button
            onClick={handleCopyEmail}
            className="text-2xl font-semibold border-b-2 border-transparent hover:border-current transition-colors duration-200 focus:outline-none"
          >
            {emailCopied ? "¡Copied!" : email}
          </button>
          <p className="font-light text-sm mt-1">
            {emailCopied ? "Paste wherever you want" : "Click to copy!"}
          </p>
        </div>

        {/* Phone */}
        <div className="text-center sm:text-start">
          <button
            onClick={handleCopyPhone}
            className="text-2xl font-semibold border-b-2 border-transparent hover:border-current transition-colors duration-200 focus:outline-none"
          >
            {phoneCopied ? "¡Copied!" : phone}
          </button>
          <p className="font-light text-sm mt-1">
            {phoneCopied ? "Paste wherever you want" : "Click to copy!"}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;