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
    padding: 0;
    margin: 0;
    border: none;
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
    transition: color 0.3s ease-out;

    /* Subrayado animado */
    &::after {
      content: "";
      position: absolute;
      width: 0;
      left: 0;
      bottom: -7px;
      height: 2px;
      background: ${WebColors.PurpleLight};
      transition: width 0.3s ease-out;
    }

    /* Texto con efecto de pintado de izquierda a derecha */
    span {
      position: relative;
      background: linear-gradient(
        to right,
        ${WebColors.PurpleLight},
        ${WebColors.PurpleLight}
      );
      background-size: 0% 100%;
      background-repeat: no-repeat;
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
      transition: background-size 0.3s ease-out;
      /* Color original visible antes del hover */
      color: ${WebColors.TextColor};
      -webkit-text-fill-color: ${WebColors.TextColor};
    }

    /* Hover: activar animaciones */
    &:hover {
      span {
        background-size: 100% 100%;
        -webkit-text-fill-color: transparent; /* Asegura que se vea el gradiente */
      }

      &::after {
        width: 100%;
      }

      .icon {
        transform: translateX(4px);
        stroke: ${WebColors.PurpleLight};
      }
    }

    /* Ícono */
    .icon {
      width: 15px;
      height: 15px;
      stroke: ${WebColors.TextColor};
      transition: transform 0.2s ease-out 0.1s, stroke 0.3s ease-out;
    }
  }
`;

export default CustomLink;