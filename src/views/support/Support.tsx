import { useState } from "react";
import { CustomTitleSection } from "../../components/CustomTitleSection";
import { useLanguage } from "../../context/LanguageContext";
import { getEmail } from "../../utils/email";

function Support() {
  const { language, t } = useLanguage();
  const [emailCopied, setEmailCopied] = useState(false);
  const email = getEmail();

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <div
      id="support"
      className="flex flex-col justify-start items-center gap-8 sm:gap-12 md:gap-16 pt-16 sm:pt-20 md:pt-28 pb-16 sm:pb-20 md:pb-28 w-full px-4 sm:px-6 md:px-12"
    >
      <div className="w-full flex justify-start ml-4 sm:ml-8 md:ml-16 lg:ml-28">
        <CustomTitleSection
          topTexts={t.support.titleTop}
          bottomTexts={t.support.titleBottom}
          purpleWord={t.support.titlePurple}
        />
      </div>

      {/* Texto introductorio */}
      <div className="w-full flex items-center justify-center px-4">
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-5xl text-center text-text-color/90">
          {t.support.intro}
        </p>
      </div>

      {/* Sección de contacto */}
      <div className="w-full max-w-4xl flex flex-col gap-8 sm:gap-10 md:gap-12 mt-4 sm:mt-6 md:mt-8 px-4">
        <div className="flex flex-col items-center justify-center gap-6 sm:gap-8">
          <h3 className="text-2xl sm:text-3xl font-semibold">{t.support.getInTouch}</h3>
          
          {/* Email copiable */}
          <div className="text-center">
            <button
              onClick={handleCopyEmail}
              className="text-lg sm:text-xl md:text-2xl font-semibold border-b-2 border-transparent hover:border-current transition-colors duration-200 focus:outline-none break-all cursor-pointer"
            >
              {emailCopied ? (language === 'es' ? "¡Copiado!" : language === 'ru' ? "Скопировано!" : "Copied!") : email}
            </button>
            <p className="font-light text-xs sm:text-sm mt-1 text-text-color/70">
              {emailCopied ? t.contact.copiedText : t.contact.clickToCopy}
            </p>
          </div>
        </div>

        {/* FAQs */}
        <div className="flex flex-col gap-6 sm:gap-8 mt-8 sm:mt-10 md:mt-12">
          <h3 className="text-2xl sm:text-3xl font-semibold text-center mb-2 sm:mb-4">
            {t.support.faqsTitle} <span className="text-purple-light">{t.support.faqsPurple}</span>
          </h3>

          <div className="space-y-4 sm:space-y-6 max-w-3xl mx-auto w-full">
            {t.support.faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

type FAQItemProps = {
  question: string;
  answer: string;
};

function FAQItem({ question, answer }: FAQItemProps) {
  return (
    <div className="border-l-2 sm:border-l-4 border-purple-light pl-4 sm:pl-6 py-2">
      <h4 className="text-lg sm:text-xl font-semibold mb-2">{question}</h4>
      <p className="text-base sm:text-lg leading-relaxed font-light text-text-color/85">{answer}</p>
    </div>
  );
}

export default Support;