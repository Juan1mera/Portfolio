import { FaHeart } from "react-icons/fa";
import { WebColors } from "../../constants/colors";
import styled from "styled-components";

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
    href: "https://www.fiverr.com/juanmera589",
    label: "Fiverr",
    text: "/juanmera589",
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
  return (
    <StyledFooter id="footer">
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
            Made with <FaHeart color={WebColors.PurpleLight} /> by{" "}
            <span className="name">Juan Mera</span>
          </div>

          <div className="copyright mt-8 text-sm opacity-70">
            © {new Date().getFullYear()} Juan Mera. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  width: 100%;
  padding: 2rem 1rem;
  background-color: inherit;

  /* Contenedor centrado con ancho máximo */
  .footer-container {
    max-width: 1200px;           
    margin: 0 auto;              
    display: flex;
    justify-content: center;     
  }

  /* Columna horizontal, compacta y centrada */
  .social-column {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;            
    gap: 0.5rem;                 
    justify-content: center;     
    align-items: center;
  }

  /* === LINKS === */
  .social-link {

    display: flex;
    align-items: center;
    justify-content: center;     

    gap: 0.75rem;
    padding: 0.5rem 0.9rem;
    font-size: 1.2rem;
    font-weight: 500;
    text-decoration: none;
    border-radius: 8px;
    transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    min-width: 280px;
    max-width: 240px;   
    width: auto;
    text-align: center;

    .text-wrapper {
      position: relative;
      height: 1.4em;
      overflow: hidden;
      display: flex;
      align-items: center;
      flex: 1;
      justify-content: center;
    }

    .label-text,
    .username-text {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
      line-height: 1.4;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .label-text {
      transform: translateY(0);
      opacity: 1;
    }

    .username-text {
      transform: translateY(100%);
      opacity: 0;
    }

    &:hover {
      background-color: var(--hover-bg);
      color: var(--hover-color);

      .label-text {
        transform: translateY(-100%);
        opacity: 0;
      }

      .username-text {
        transform: translateY(0);
        opacity: 1;
        animation: shake 0.5s ease-in-out both;
      }
    }
  }

  /* === MADE WITH === */
  .made-by {
    margin-top: 10rem;
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 1.5rem;
    color: ${WebColors.TextLight};
    white-space: nowrap;
    padding: 0.5rem 0.8rem;
    border-radius: 6px;
    background-color: transparent;
    transition: all 0.4s ease;

    .name {
      font-weight: 600;
      color: ${WebColors.PurpleLight};
    }

    &:hover {
      background-color: ${WebColors.Background};
    }
  }

  /* === ANIMACIÓN SHAKE === */
  @keyframes shake {
    0% { transform: translateY(0) rotate(0deg); }
    25% { transform: translateY(0) rotate(5deg); }
    50% { transform: translateY(0) rotate(-5deg); }
    75% { transform: translateY(0) rotate(1deg); }
    100% { transform: translateY(0) rotate(0deg); }
  }

  /* === RESPONSIVE === */
  @media (max-width: 768px) {
    .social-column {
      justify-content: center;
      gap: 0.4rem;
    }

    .social-link {
      min-width: 120px;
      padding: 0.45rem 0.7rem;
      font-size: 0.85rem;
    }

    .made-by {
      font-size: 0.75rem;
      padding: 0.45rem 0.7rem;
    }
  }
`;

