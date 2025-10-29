import styled from 'styled-components';
import { WebColors } from '../../constants/colors';

// Componente reutilizable
interface CustomLinkProps {
  href: string;
  text: string;
  className?: string;
}

const CustomLink: React.FC<CustomLinkProps> = ({ href, text, className }) => {
  return (
    <StyledWrapper className={className}>
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
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  a {
    padding: 0.5rem 1rem;
    margin: 0;
    border: 2px solid ${WebColors.TextColor};
    border-radius: 24px; /* Borde redondeado */
    background: none;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 600;
    font-size: 20px;
    text-decoration: none;
    color: ${WebColors.TextColor};
    position: relative;
    transition: 
      color 0.3s ease-out,
      border-color 0.3s ease-out;

    /* Subrayado animado */
    // &::after {
    //   content: "";
    //   position: absolute;
    //   width: 0;
    //   left: 1rem; /* Ajustar según el padding */
    //   bottom: -7px;
    //   height: 2px;
    //   background: ${WebColors.PurpleLight};
    //   transition: width 0.3s ease-out;
    // }

    /* Texto con efecto de pintado */
    span {
      position: relative;
      color: ${WebColors.TextColor};
      transition: color 0.3s ease-out;
    }

    /* Ícono */
    .icon {
      width: 15px;
      height: 15px;
      stroke: ${WebColors.TextColor};
      transition: 
        transform 0.2s ease-out 0.1s,
        stroke 0.3s ease-out;
    }

    /* Hover: activar animaciones */
    &:hover {
      color: ${WebColors.PurpleLight};
      border-color: ${WebColors.PurpleLight};

      span {
        background: linear-gradient(
          to right,
          ${WebColors.PurpleLight},
          ${WebColors.PurpleLight}
        );
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        color: transparent; /* Solo en hover */
      }

      &::after {
        width: calc(100% - 2rem); /* Ajustar al padding */
      }

      .icon {
        transform: translateX(4px);
        stroke: ${WebColors.PurpleLight};
      }
    }
  }
`;

export default CustomLink;