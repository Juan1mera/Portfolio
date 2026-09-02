import { FaHeart } from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";
import { getEmail, openMailto } from "../../utils/email";
import "./Footer.css";

interface SocialLink {
  href: string;
  label: string;
  text: string;
}

const socialLinks: SocialLink[] = [
  {
    href: "https://github.com/Juan1mera",
    label: "GitHub",
    text: "/Juan1mera",
  },
  {
    href: "https://t.me/Juan_Mera1",
    label: "Telegram",
    text: "@Juan_Mera1",
  },
  {
    href: "https://www.buymeacoffee.com/meradev",
    label: "Buy Me a Coffee",
    text: "/meradev",
  },
  {
    href: "https://www.linkedin.com/in/meradev/",
    label: "LinkedIn",
    text: "@meradev",
  },
];

const whatsappLink: SocialLink = {
  href: "https://wa.me/+79155727834?text=Hello+Juan,+I+want+work+with+you+🧑‍💻",
  label: "WhatsApp",
  text: "+7 915 572 7834",
};

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="site-footer" id="footer">
      <div className="footer-container">
        <div className="social-column">
          {socialLinks.map(({ href, label, text }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${label}: ${text}`}
              className="social-link"
            >
              <div className="text-wrapper">
                <span className="label-text">{label}</span>
                <span className="username-text">{text}</span>
              </div>
            </a>
          ))}

          {/* Email: sin mailto en el DOM ni texto literal (anti-scrapers) */}
          <button
            type="button"
            onClick={openMailto}
            aria-label="Email"
            className="social-link"
            style={{ background: 'none', border: 'none', font: 'inherit', color: 'inherit', cursor: 'pointer' }}
          >
            <div className="text-wrapper">
              <span className="label-text">Email</span>
              <span className="username-text">{getEmail()}</span>
            </div>
          </button>

          <a
            href={whatsappLink.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${whatsappLink.label}: ${whatsappLink.text}`}
            className="social-link"
          >
            <div className="text-wrapper">
              <span className="label-text">{whatsappLink.label}</span>
              <span className="username-text">{whatsappLink.text}</span>
            </div>
          </a>

          <div className="made-by">
            {t.footer.madeWith} <FaHeart className="inline mx-1 text-purple-light" /> {t.footer.by}{" "}
            <span className="name" style={{ marginLeft: '4px' }}>Juan Mera</span>
          </div>

          <div className="copyright mt-8 text-sm opacity-70">
            © {new Date().getFullYear()} Juan Mera. {t.footer.rightsReserved}
          </div>
        </div>
      </div>
    </footer>
  );
}
