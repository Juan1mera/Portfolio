import { useState } from "react";
import { CustomTitleSection } from "../../components/CustomTitleSection";

function Support() {
  const [emailCopied, setEmailCopied] = useState(false);
  const email = "mera.dev.co@gmail.com";

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
          topTexts={["NEED "]}
          bottomTexts={["HELP?"]}
          purpleWord="HELP?"
        />
      </div>

      {/* Texto introductorio */}
      <div className="w-full flex items-center justify-center px-4">
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-5xl text-center">
          I'm here to help you with any questions or concerns you might have about my work, projects, or collaborations.
          <br /><br />
          Feel free to reach out and I'll get back to you as soon as possible.
        </p>
      </div>

      {/* Sección de contacto */}
      <div className="w-full max-w-4xl flex flex-col gap-8 sm:gap-10 md:gap-12 mt-4 sm:mt-6 md:mt-8 px-4">
        <div className="flex flex-col items-center justify-center gap-6 sm:gap-8">
          <h3 className="text-2xl sm:text-3xl font-semibold">Get in Touch</h3>
          
          {/* Email copiable */}
          <div className="text-center">
            <button
              onClick={handleCopyEmail}
              className="text-lg sm:text-xl md:text-2xl font-semibold border-b-2 border-transparent hover:border-current transition-colors duration-200 focus:outline-none break-all"
            >
              {emailCopied ? "¡Copied!" : email}
            </button>
            <p className="font-light text-xs sm:text-sm mt-1">
              {emailCopied ? "¡Copied! Paste wherever you want" : "Click to copy!"}
            </p>
          </div>
        </div>

        {/* FAQs */}
        <div className="flex flex-col gap-6 sm:gap-8 mt-8 sm:mt-10 md:mt-12">
          <h3 className="text-2xl sm:text-3xl font-semibold text-center mb-2 sm:mb-4">
            Frequently Asked <span className="text-purple-light">Questions</span>
          </h3>

          <div className="space-y-4 sm:space-y-6 max-w-3xl mx-auto w-full">
            <FAQItem
              question="How can I collaborate with you?"
              answer="I'm always open to new projects and collaborations. Send me an email with details about your project, timeline, and budget, and I'll get back to you within 48 hours."
            />

            <FAQItem
              question="What's your typical response time?"
              answer="I usually respond to emails within 24-48 hours during weekdays. For urgent matters, please mention it in the subject line."
            />

            <FAQItem
              question="Do you work on freelance projects?"
              answer="Yes! I'm available for freelance work and consulting. I specialize in full-stack web development, mobile applications, and game development."
            />

            <FAQItem
              question="Can I use your code or projects?"
              answer="Some of my projects are open source and available on GitHub. Please check the individual project licenses. For commercial use, feel free to reach out to discuss licensing options."
            />

            <FAQItem
              question="Do you provide mentorship or tutoring?"
              answer="I'm passionate about helping others learn programming. Depending on my availability, I may be able to provide mentorship or tutoring. Contact me to discuss the details."
            />
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
      <p className="text-base sm:text-lg leading-relaxed font-light">{answer}</p>
    </div>
  );
}

export default Support;