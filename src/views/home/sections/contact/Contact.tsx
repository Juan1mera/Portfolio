import { useState } from "react";
import { CustomTitleSection } from "../../../../components/CustomTitleSection";

function Contact() {
  // Email
  const [emailCopied, setEmailCopied] = useState(false);
  const email = "mera.dev.co@gmail.com";

  // Teléfono
  const [phoneCopied, setPhoneCopied] = useState(false);
  const phone = "+7 915 572 78-34";

  const cvPath = "/cv/Juan_Mera_ Engineer_CV.pdf"; 

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const handleCopyPhone = async () => {
    await navigator.clipboard.writeText(phone);
    setPhoneCopied(true);
    setTimeout(() => setPhoneCopied(false), 2000);
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
        <CopyButton
          text={email}
          copied={emailCopied}
          onCopy={handleCopyEmail}
          label="Click to copy!"
          copiedLabel="¡Copied! Paste wherever you want"
        />

        {/* Teléfono */}
        <CopyButton
          text={phone}
          copied={phoneCopied}
          onCopy={handleCopyPhone}
          label="Click to copy!"
          copiedLabel="¡Copied! Paste wherever you want"
        />

        {/* Descarga de CV */}
        <div className="text-center sm:text-start">
          <a
            href={cvPath}
            target="_blank"         
            rel="noopener noreferrer"
            className="text-2xl font-semibold border-b-2 border-transparent hover:border-current transition-colors duration-200 focus:outline-none inline-block"
          >
            Download CV
          </a>
          <p className="font-light text-sm mt-1">
            PDF • 2025
          </p>
        </div>
      </div>
    </section>
  );
}

type CopyButtonProps = {
  text: string;
  copied: boolean;
  onCopy: () => void;
  label: string;
  copiedLabel: string;
};

function CopyButton({ text, copied, onCopy, label, copiedLabel }: CopyButtonProps) {
  return (
    <div className="text-center sm:text-start">
      <button
        onClick={onCopy}
        className="text-2xl font-semibold border-b-2 border-transparent hover:border-current transition-colors duration-200 focus:outline-none"
      >
        {copied ? "¡Copied!" : text}
      </button>
      <p className="font-light text-sm mt-1">
        {copied ? copiedLabel : label}
      </p>
    </div>
  );
}

export default Contact;