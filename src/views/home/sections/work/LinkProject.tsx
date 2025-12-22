import React from 'react';
import styled from 'styled-components';
import { WebColors } from '../../../../constants/colors';

interface Props {
  href: string;
  text: string;
  className?: string;
}

const LinkProject: React.FC<Props> = ({ href, text, className }) => {
  return (
    <StyledWrapper>
      <a 
        target="_blank" 
        rel="noopener noreferrer" 
        className={`learn-more ${className || ''}`} 
        href={href}
      >
        <span className="circle" aria-hidden="true">
          <span className="icon arrow" />
        </span>
        <span className="a-text">{text}</span>
      </a>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: inline-block;

  a.learn-more {
    position: relative;
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    background: transparent;
    padding: 0;
    width: fit-content;
  }

  a.learn-more .circle {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    display: block;
    margin: 0;
    width: 3rem;
    height: 3rem;
    background: ${WebColors.Background};
    border-radius: 1.625rem;
    flex-shrink: 0;
    z-index: 1;
  }

  a.learn-more .circle .icon.arrow {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0.625rem;
    width: 1.125rem;
    height: 0.125rem;
    background: none;
    z-index: 3;
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
    position: relative;
    display: inline-block;
    padding: 0.75rem 1.5rem 0.75rem 3.5rem;
    color: ${WebColors.Background};
    font-weight: 700;
    line-height: 1.6;
    text-transform: uppercase;
    white-space: nowrap;
    z-index: 2;
  }

  /* --- ESTADOS HOVER --- */

  a:hover .circle {
    width: 100%;
    transform: translateY(-50%);
  }

  a:hover .circle .icon.arrow {
    background: ${WebColors.TextLight};
    transform: translateY(-50%) translateX(0.5rem);
  }

  a:hover .a-text {
    color: ${WebColors.TextLight};
  }

  /* Responsive */
  @media (max-width: 768px) {
    a.learn-more .circle {
      width: 2.5rem;
      height: 2.5rem;
    }
    a.learn-more .a-text {
      font-size: 0.875rem;
      padding: 0.5rem 1.25rem 0.5rem 3.5rem;
    }
  }
`;

export default LinkProject;