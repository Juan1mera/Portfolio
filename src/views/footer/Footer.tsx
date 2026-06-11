import { FaHeart } from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";
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
    href: "https://instagram.com/mera.tsx",
    label: "Instagram",
    text: "@mera.tsx",
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
    href: "https://www.linkedin.com/in/juan1mera",
    label: "LinkedIn",
    text: "@juan1mera",
  },
  {
    href: "mailto:mera.dev.co@gmail.com",
    label: "Email",
    text: "mera.dev.co@gmail.com",
  },
  {
    href: "https://wa.me/+79155727834?text=Hello+Juan,+I+want+work+with+you+🧑‍💻",
    label: "WhatsApp",
    text: "+7 915 572 7834",
  },
];

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
