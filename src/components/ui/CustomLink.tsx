import './CustomLink.css';

// Componente reutilizable
interface CustomLinkProps {
  href: string;
  text: string;
  className?: string;
}

const CustomLink: React.FC<CustomLinkProps> = ({ href, text, className }) => {
  return (
    <div className={`custom-link ${className ?? ''}`}>
      <a href={href}>
        <span>{text}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={4}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
    </div>
  );
};

export default CustomLink;
