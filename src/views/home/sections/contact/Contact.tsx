import { useState } from "react";
import { CustomTitleSection } from "../../../../components/CustomTitleSection";
import { useLanguage } from "../../../../context/LanguageContext";
import { getEmail } from "../../../../utils/email";

function Contact() {
  const { t } = useLanguage();

  // Email (ensamblado en runtime para evitar extractores)
  const [emailCopied, setEmailCopied] = useState(false);
  const email = getEmail();

  // Teléfono
  const [phoneCopied, setPhoneCopied] = useState(false);
  const phone = "+7 915 572 78-34";

  const cvPath = "/Juan_Mera_ Engineer_CV.pdf"; 

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
        topTexts={t.contact.titleTop}
        bottomTexts={t.contact.titleBottom}
        purpleWord={t.contact.titlePurple}
      />

      <div className="w-full max-w-4xl flex flex-col sm:flex-row items-center justify-around gap-12 px-6">
        {/* Email */}
        <CopyButton
          text={email}
          copied={emailCopied}
          onCopy={handleCopyEmail}
          label={t.contact.clickToCopy}
          copiedLabel={t.contact.copiedText}
        />

        {/* Teléfono */}
        <CopyButton
          text={phone}
          copied={phoneCopied}
          onCopy={handleCopyPhone}
          label={t.contact.clickToCopy}
          copiedLabel={t.contact.copiedText}
        />

        {/* Descarga de CV */}
        <div className="text-center sm:text-start">
          <a
            href={cvPath}
            target="_blank"         
            rel="noopener noreferrer"
            className="text-2xl font-semibold border-b-2 border-transparent hover:border-current transition-colors duration-200 focus:outline-none inline-block"
          >
            {t.contact.downloadCv}
          </a>
          <p className="font-light text-sm mt-1 text-text-color/70">
            {t.contact.cvDetails}
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
  const { language } = useLanguage();

  return (
    <div className="text-center sm:text-start">
      <button
        onClick={onCopy}
        className="text-2xl font-semibold border-b-2 border-transparent hover:border-current transition-colors duration-200 focus:outline-none cursor-pointer"
      >
        {copied ? (language === 'es' ? "¡Copiado!" : language === 'ru' ? "Скопировано!" : "Copied!") : text}
      </button>
      <p className="font-light text-sm mt-1 text-text-color/70">
        {copied ? copiedLabel : label}
      </p>
    </div>
  );
}

export default Contact;