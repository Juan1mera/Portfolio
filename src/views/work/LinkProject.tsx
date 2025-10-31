import styled from 'styled-components';
import { WebColors } from '../../constants/colors';

interface Props {
  href: string;
  text: string;
  className?: string;
}

const LinkProject: React.FC<Props> = ({ href, text, className }) => {
  return (
    <StyledWrapper>
      <a className={`learn-more ${className || ''}`} href={href}>
        <span className="circle" aria-hidden="true">
          <span className="icon arrow" />
        </span>
        <span className="a-text">{text}</span>
      </a>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  a {
   position: relative;
   display: inline-block;
   cursor: pointer;
   outline: none;
   border: 0;
   vertical-align: middle;
   text-decoration: none;
   background: transparent;
   padding: 0;
   font-size: inherit;
   font-family: inherit;
  }

  a.learn-more {
   width: auto;
   min-width: 10rem;
   height: auto;
  }

  a.learn-more .circle {
   transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
   position: relative;
   display: block;
   margin: 0;
   width: 3rem;
   height: 3rem;
   background: ${WebColors.Background};
   border-radius: 1.625rem;
  }

  a.learn-more .circle .icon {
   transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
   position: absolute;
   top: 0;
   bottom: 0;
   margin: auto;
   background: ${WebColors.TextLight};
  }

  a.learn-more .circle .icon.arrow {
   transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
   left: 0.625rem;
   width: 1.125rem;
   height: 0.125rem;
   background: none;
  }

  a.learn-more .circle .icon.arrow::before {
   position: absolute;
   content: "";
   top: -0.29rem;
   right: 0.0625rem;
   width: 0.625rem;
   height: 0.625rem;
   border-top: 0.125rem solid ${WebColors.TextLight};
   border-right: 0.125rem solid ${WebColors.TextLight};
   transform: rotate(45deg);
  }

  a.learn-more .a-text {
   transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
   position: absolute;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   padding: 0.75rem 0;
   margin: 0 0 0 1.85rem;
   color: ${WebColors.Background};
   font-weight: 700;
   line-height: 1.6;
   text-align: center;
   text-transform: uppercase;
   white-space: nowrap;
  }

  a:hover .circle {
   width: 100%;
  }

  a:hover .circle .icon.arrow {
   background: ${WebColors.TextLight};
   transform: translate(1rem, 0);
  }

  a:hover .a-text {
   color: ${WebColors.TextLight};
  }`;

export default LinkProject;